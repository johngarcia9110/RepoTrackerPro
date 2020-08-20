export const saveLocalRepoList = (repoList) => {
  localStorage.setItem(
    "repoTrackerPro",
    JSON.stringify({
      repoList,
    })
  );
};

export const createLocalRepoList = () => {
  localStorage.setItem(
    "repoTrackerPro",
    JSON.stringify({
      repoList: [],
    })
  );
};

export const getReposFromLocal = () => {
  let { repoList } = JSON.parse(localStorage.getItem("repoTrackerPro"));
  if (!repoList) {
    createLocalRepoList();
    return [];
  }
  return repoList;
};
