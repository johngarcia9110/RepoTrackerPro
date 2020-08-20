import { Octokit } from "@octokit/core";
import { getReposFromLocal, saveLocalRepoList } from "../utils/localStorage";

const octokit = new Octokit();

export const SET_REPO_DATA = "SET_REPO_DATA";
export const ADD_REPO_TO_LIST = "ADD_REPO_TO_LIST";

export const setRepoData = (data) => ({
  type: SET_REPO_DATA,
  data,
});

export const addRepoToList = (data) => ({
  type: ADD_REPO_TO_LIST,
  data,
});

export const loadInitialData = () => async (dispatch) => {
  const localRepos = getReposFromLocal();
  await dispatch(updateRepoListData(localRepos));
};

export const deleteRepo = (id) => (dispatch) => {
  const localRepos = getReposFromLocal();
  const filteredRepos = localRepos.filter((repo) => repo.id !== id);
  saveLocalRepoList(filteredRepos);
  dispatch(setRepoData(filteredRepos));
};

export const setRepoToViewed = (id, repoList) => async (dispatch) => {
  const repoListCopy = [...repoList];
  repoListCopy.forEach((repo, index) => {
    if (repo.id === id) {
      repoListCopy[index].last_viewed = new Date().getTime();
    }
  });
  saveLocalRepoList(repoListCopy);
  dispatch(setRepoData(repoListCopy));
};

export const getUpdatedInfo = async (repo) => {
  try {
    const resp = await octokit.request("GET /repos/{owner}/{repo}/releases", {
      repo: repo.name,
      owner: repo.owner,
    });
    const { data } = resp;
    if (data) {
      const { html_url, published_at } = data[0];

      return {
        ...repo,
        html_url,
        published_at,
      };
    }
  } catch (err) {
    console.error(
      "There was an error updating information for the following repo:",
      err
    );
    return false;
  }
  return repo;
};

export const updateRepoListData = (repoList) => async (dispatch) => {
  const updatedRepoList = [];
  console.log(repoList);
  if (repoList.length === 0) {
    dispatch(setRepoData(updatedRepoList));
    return;
  }
  for (const repo of repoList) {
    const updatedInfo = await getUpdatedInfo(repo);
    updatedRepoList.push(updatedInfo);
  }
  saveLocalRepoList(updatedRepoList);
  dispatch(setRepoData(updatedRepoList));
  return true;
};
