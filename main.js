import got from "got";

/**
 * Get a user's repos off of GitHub
 * @param {string} username
 * @param {function} callback This will return an error and an array of repositories
 * Documentation: https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
 */
async function github(username, callback) {
  let err, data;
  try {
    const resp = got(`https://api.github.com/users/${username}/repos`);
    data = await resp.json();
    callback(err, data);
  } catch (err) {
    callback(err, data);
  }
}
function main() {
  github("oppoishd", (error, projects) => {
      if (error != undefined) {
          console.log(error.message);
          return
        };
          for ( let project of projects){
    console.log(`${project.name}, has ${project.description}, has ${project.stargazers_count}`);
        }
  });
}

main();
