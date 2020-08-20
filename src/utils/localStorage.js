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
  const localData = localStorage.getItem("repoTrackerPro");
  if (!localData) {
    createLocalRepoList();
    return [];
  }
  return JSON.parse(localData).repoList;
};
