export function saveRepos(repos) {
  console.log(repos);
  return { type: "SAVE_REPOS", payload: repos };
}
