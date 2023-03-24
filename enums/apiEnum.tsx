export default function ApiNames() {
    let GITHUB = "https://api.github.com/users/";
    let GITHUB_REPOS = (user: string) => `https://api.github.com/users/${user}/repos`;

    let API = "https://nest-network-production.up.railway.app/api/";
    let API_AUTH = `${API}auth`;
    let API_USER = `${API}user`;

    return {
        API_AUTH,
        API_USER,
        GITHUB,
        GITHUB_REPOS
    }
}