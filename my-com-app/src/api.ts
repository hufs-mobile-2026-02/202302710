import axios from "axios";
import type { GitHubUser } from "./GitHubUser";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const getUserProfile = (username: string) => {
  return api.get<GitHubUser>(`/users/${username}`);
};

export default api;