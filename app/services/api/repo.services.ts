import api from "~/lib/api";
import endPoints from "~/constants/endpoints.constant";
import { DEFAULT_PARAMS } from "~/constants/app.constants";
import { interpolate } from "~/utils/string";

export type RepoSortType = "stars" | "forks" | "updated" | "help-wanted-issues";

export interface RepoParams {
  q: string;
  sort: RepoSortType;
  order: "asc" | "desc";
  per_page: number;
  page: number;
}

export interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  type: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  owner: GithubUser;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface GithubRepoSearch {
  total_count: number;
  incomplete_results: boolean;
  items: GithubRepo[];
}

export interface RepoDetailsParams {
  owner: string;
  repo: string;
}

export interface RepoDetails extends GithubRepo {
  open_issues: number;
  default_branch: string;
}

export const getRepos = async (
  params: RepoParams
): Promise<GithubRepoSearch> => {
  const { data: repos } = await api.get(endPoints.search.repos, {
    params: { ...DEFAULT_PARAMS, ...params },
  });

  return repos;
};

export const getRepoDetails = async (
  params: RepoDetailsParams
): Promise<RepoDetails> => {
  const { owner, repo } = params;

  const { data } = await api.get(
    interpolate(endPoints.repo.details, { owner, repo })
  );

  return data;
};
