export default function ApiNames() {
    let GITHUB = "https://api.github.com/users/";
    let GITHUB_REPOS = (user: string) => `https://api.github.com/users/${user}/repos`;

    return {
        GITHUB,
        GITHUB_REPOS
    }
}