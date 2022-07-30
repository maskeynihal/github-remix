import type { ErrorBoundaryComponent } from "remix";
import { json, LoaderFunction } from "@remix-run/node";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useSearchParams,
} from "@remix-run/react";
import { getRepos } from "~/services/api/repo.services";
import { getQueryParams } from "~/utils/url";
import RepoCard from "./components/Card";
import { Header } from "~/components/Header";
import { Select } from "~/components/select";
import { ActionMeta } from "react-select";
import { Pagination } from "~/components/Pagination";
import { useEffect } from "react";

type LoaderData = Awaited<ReturnType<typeof getRepos>>;

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const queries = getQueryParams(request.url);
    return await getRepos(queries);

    return {
      total_count: 18,
      incomplete_results: false,
      items: [
        {
          id: 400784247,
          node_id: "MDEwOlJlcG9zaXRvcnk0MDA3ODQyNDc=",
          name: "MaskeyDude",
          full_name: "MaskeyDude/MaskeyDude",
          private: false,
          owner: {
            login: "MaskeyDude",
            id: 83801626,
            node_id: "MDQ6VXNlcjgzODAxNjI2",
            avatar_url: "https://avatars.githubusercontent.com/u/83801626?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/MaskeyDude",
            html_url: "https://github.com/MaskeyDude",
            followers_url: "https://api.github.com/users/MaskeyDude/followers",
            following_url:
              "https://api.github.com/users/MaskeyDude/following{/other_user}",
            gists_url:
              "https://api.github.com/users/MaskeyDude/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/MaskeyDude/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/MaskeyDude/subscriptions",
            organizations_url: "https://api.github.com/users/MaskeyDude/orgs",
            repos_url: "https://api.github.com/users/MaskeyDude/repos",
            events_url:
              "https://api.github.com/users/MaskeyDude/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/MaskeyDude/received_events",
            type: "User",
            site_admin: false,
          },
          html_url: "https://github.com/MaskeyDude/MaskeyDude",
          description: "Config files for my GitHub profile.",
          fork: false,
          url: "https://api.github.com/repos/MaskeyDude/MaskeyDude",
          forks_url: "https://api.github.com/repos/MaskeyDude/MaskeyDude/forks",
          keys_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/MaskeyDude/MaskeyDude/teams",
          hooks_url: "https://api.github.com/repos/MaskeyDude/MaskeyDude/hooks",
          issue_events_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/events",
          assignees_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/branches{/branch}",
          tags_url: "https://api.github.com/repos/MaskeyDude/MaskeyDude/tags",
          blobs_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/languages",
          stargazers_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/stargazers",
          contributors_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/contributors",
          subscribers_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/subscribers",
          subscription_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/subscription",
          commits_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/merges",
          archive_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/downloads",
          issues_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/labels{/name}",
          releases_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/MaskeyDude/MaskeyDude/deployments",
          created_at: "2021-08-28T12:13:58Z",
          updated_at: "2022-07-16T06:52:08Z",
          pushed_at: "2022-07-16T06:52:06Z",
          git_url: "git://github.com/MaskeyDude/MaskeyDude.git",
          ssh_url: "git@github.com:MaskeyDude/MaskeyDude.git",
          clone_url: "https://github.com/MaskeyDude/MaskeyDude.git",
          svn_url: "https://github.com/MaskeyDude/MaskeyDude",
          homepage: "https://github.com/MaskeyDude",
          size: 7,
          stargazers_count: 0,
          watchers_count: 0,
          language: "HTML",
          has_issues: false,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: ["config", "github-config"],
          visibility: "public",
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: "main",
          permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
          },
          score: 1,
        },
        {
          id: 426718376,
          node_id: "R_kgDOGW80qA",
          name: "Maskey2",
          full_name: "Maskey2/Maskey2",
          private: false,
          owner: {
            login: "Maskey2",
            id: 35844858,
            node_id: "MDQ6VXNlcjM1ODQ0ODU4",
            avatar_url: "https://avatars.githubusercontent.com/u/35844858?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/Maskey2",
            html_url: "https://github.com/Maskey2",
            followers_url: "https://api.github.com/users/Maskey2/followers",
            following_url:
              "https://api.github.com/users/Maskey2/following{/other_user}",
            gists_url: "https://api.github.com/users/Maskey2/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/Maskey2/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/Maskey2/subscriptions",
            organizations_url: "https://api.github.com/users/Maskey2/orgs",
            repos_url: "https://api.github.com/users/Maskey2/repos",
            events_url: "https://api.github.com/users/Maskey2/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/Maskey2/received_events",
            type: "User",
            site_admin: false,
          },
          html_url: "https://github.com/Maskey2/Maskey2",
          description: "Config files for my GitHub profile.",
          fork: false,
          url: "https://api.github.com/repos/Maskey2/Maskey2",
          forks_url: "https://api.github.com/repos/Maskey2/Maskey2/forks",
          keys_url:
            "https://api.github.com/repos/Maskey2/Maskey2/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/Maskey2/Maskey2/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/Maskey2/Maskey2/teams",
          hooks_url: "https://api.github.com/repos/Maskey2/Maskey2/hooks",
          issue_events_url:
            "https://api.github.com/repos/Maskey2/Maskey2/issues/events{/number}",
          events_url: "https://api.github.com/repos/Maskey2/Maskey2/events",
          assignees_url:
            "https://api.github.com/repos/Maskey2/Maskey2/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/Maskey2/Maskey2/branches{/branch}",
          tags_url: "https://api.github.com/repos/Maskey2/Maskey2/tags",
          blobs_url:
            "https://api.github.com/repos/Maskey2/Maskey2/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/Maskey2/Maskey2/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/Maskey2/Maskey2/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/Maskey2/Maskey2/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/Maskey2/Maskey2/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/Maskey2/Maskey2/languages",
          stargazers_url:
            "https://api.github.com/repos/Maskey2/Maskey2/stargazers",
          contributors_url:
            "https://api.github.com/repos/Maskey2/Maskey2/contributors",
          subscribers_url:
            "https://api.github.com/repos/Maskey2/Maskey2/subscribers",
          subscription_url:
            "https://api.github.com/repos/Maskey2/Maskey2/subscription",
          commits_url:
            "https://api.github.com/repos/Maskey2/Maskey2/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/Maskey2/Maskey2/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/Maskey2/Maskey2/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/Maskey2/Maskey2/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/Maskey2/Maskey2/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/Maskey2/Maskey2/compare/{base}...{head}",
          merges_url: "https://api.github.com/repos/Maskey2/Maskey2/merges",
          archive_url:
            "https://api.github.com/repos/Maskey2/Maskey2/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/Maskey2/Maskey2/downloads",
          issues_url:
            "https://api.github.com/repos/Maskey2/Maskey2/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/Maskey2/Maskey2/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/Maskey2/Maskey2/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/Maskey2/Maskey2/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/Maskey2/Maskey2/labels{/name}",
          releases_url:
            "https://api.github.com/repos/Maskey2/Maskey2/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/Maskey2/Maskey2/deployments",
          created_at: "2021-11-10T17:40:48Z",
          updated_at: "2021-11-10T17:42:08Z",
          pushed_at: "2021-11-10T17:42:06Z",
          git_url: "git://github.com/Maskey2/Maskey2.git",
          ssh_url: "git@github.com:Maskey2/Maskey2.git",
          clone_url: "https://github.com/Maskey2/Maskey2.git",
          svn_url: "https://github.com/Maskey2/Maskey2",
          homepage: "https://github.com/Maskey2",
          size: 0,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: false,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: ["config", "github-config"],
          visibility: "public",
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: "main",
          permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
          },
          score: 1,
        },
        {
          id: 382256625,
          node_id: "MDEwOlJlcG9zaXRvcnkzODIyNTY2MjU=",
          name: "Maskey71098",
          full_name: "Maskey71098/Maskey71098",
          private: false,
          owner: {
            login: "Maskey71098",
            id: 58427790,
            node_id: "MDQ6VXNlcjU4NDI3Nzkw",
            avatar_url: "https://avatars.githubusercontent.com/u/58427790?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/Maskey71098",
            html_url: "https://github.com/Maskey71098",
            followers_url: "https://api.github.com/users/Maskey71098/followers",
            following_url:
              "https://api.github.com/users/Maskey71098/following{/other_user}",
            gists_url:
              "https://api.github.com/users/Maskey71098/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/Maskey71098/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/Maskey71098/subscriptions",
            organizations_url: "https://api.github.com/users/Maskey71098/orgs",
            repos_url: "https://api.github.com/users/Maskey71098/repos",
            events_url:
              "https://api.github.com/users/Maskey71098/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/Maskey71098/received_events",
            type: "User",
            site_admin: false,
          },
          html_url: "https://github.com/Maskey71098/Maskey71098",
          description: null,
          fork: false,
          url: "https://api.github.com/repos/Maskey71098/Maskey71098",
          forks_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/forks",
          keys_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/teams",
          hooks_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/hooks",
          issue_events_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/events",
          assignees_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/branches{/branch}",
          tags_url: "https://api.github.com/repos/Maskey71098/Maskey71098/tags",
          blobs_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/languages",
          stargazers_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/stargazers",
          contributors_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/contributors",
          subscribers_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/subscribers",
          subscription_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/subscription",
          commits_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/merges",
          archive_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/downloads",
          issues_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/labels{/name}",
          releases_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/Maskey71098/Maskey71098/deployments",
          created_at: "2021-07-02T06:48:08Z",
          updated_at: "2021-07-02T07:03:27Z",
          pushed_at: "2021-07-02T07:03:25Z",
          git_url: "git://github.com/Maskey71098/Maskey71098.git",
          ssh_url: "git@github.com:Maskey71098/Maskey71098.git",
          clone_url: "https://github.com/Maskey71098/Maskey71098.git",
          svn_url: "https://github.com/Maskey71098/Maskey71098",
          homepage: null,
          size: 16,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: "public",
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: "main",
          permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
          },
          score: 1,
        },
        {
          id: 182151245,
          node_id: "MDEwOlJlcG9zaXRvcnkxODIxNTEyNDU=",
          name: "2019-04-23-maskeyNDVI",
          full_name: "mlmaskey/2019-04-23-maskeyNDVI",
          private: false,
          owner: {
            login: "mlmaskey",
            id: 45472541,
            node_id: "MDQ6VXNlcjQ1NDcyNTQx",
            avatar_url: "https://avatars.githubusercontent.com/u/45472541?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/mlmaskey",
            html_url: "https://github.com/mlmaskey",
            followers_url: "https://api.github.com/users/mlmaskey/followers",
            following_url:
              "https://api.github.com/users/mlmaskey/following{/other_user}",
            gists_url: "https://api.github.com/users/mlmaskey/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/mlmaskey/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/mlmaskey/subscriptions",
            organizations_url: "https://api.github.com/users/mlmaskey/orgs",
            repos_url: "https://api.github.com/users/mlmaskey/repos",
            events_url:
              "https://api.github.com/users/mlmaskey/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/mlmaskey/received_events",
            type: "User",
            site_admin: false,
          },
          html_url: "https://github.com/mlmaskey/2019-04-23-maskeyNDVI",
          description:
            "Extracting normalized difference vegetation index (NDVI) time series data from Landsat images via R-spatial Packages",
          fork: false,
          url: "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI",
          forks_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/forks",
          keys_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/teams",
          hooks_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/hooks",
          issue_events_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/events",
          assignees_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/tags",
          blobs_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/languages",
          stargazers_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/stargazers",
          contributors_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/contributors",
          subscribers_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/subscribers",
          subscription_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/subscription",
          commits_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/merges",
          archive_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/downloads",
          issues_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/labels{/name}",
          releases_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/mlmaskey/2019-04-23-maskeyNDVI/deployments",
          created_at: "2019-04-18T20:13:03Z",
          updated_at: "2019-04-20T04:10:58Z",
          pushed_at: "2019-04-20T04:10:56Z",
          git_url: "git://github.com/mlmaskey/2019-04-23-maskeyNDVI.git",
          ssh_url: "git@github.com:mlmaskey/2019-04-23-maskeyNDVI.git",
          clone_url: "https://github.com/mlmaskey/2019-04-23-maskeyNDVI.git",
          svn_url: "https://github.com/mlmaskey/2019-04-23-maskeyNDVI",
          homepage: null,
          size: 2627,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: true,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: "public",
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: "master",
          permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
          },
          score: 1,
        },
        {
          id: 456521438,
          node_id: "R_kgDOGzX23g",
          name: "maskey",
          full_name: "PeterWahba/maskey",
          private: false,
          owner: {
            login: "PeterWahba",
            id: 17385035,
            node_id: "MDQ6VXNlcjE3Mzg1MDM1",
            avatar_url: "https://avatars.githubusercontent.com/u/17385035?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/PeterWahba",
            html_url: "https://github.com/PeterWahba",
            followers_url: "https://api.github.com/users/PeterWahba/followers",
            following_url:
              "https://api.github.com/users/PeterWahba/following{/other_user}",
            gists_url:
              "https://api.github.com/users/PeterWahba/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/PeterWahba/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/PeterWahba/subscriptions",
            organizations_url: "https://api.github.com/users/PeterWahba/orgs",
            repos_url: "https://api.github.com/users/PeterWahba/repos",
            events_url:
              "https://api.github.com/users/PeterWahba/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/PeterWahba/received_events",
            type: "User",
            site_admin: false,
          },
          html_url: "https://github.com/PeterWahba/maskey",
          description:
            "Maskey is mobile app help to detect act if user have mask or not. Maskey build with Flutter and Getx",
          fork: false,
          url: "https://api.github.com/repos/PeterWahba/maskey",
          forks_url: "https://api.github.com/repos/PeterWahba/maskey/forks",
          keys_url:
            "https://api.github.com/repos/PeterWahba/maskey/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/PeterWahba/maskey/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/PeterWahba/maskey/teams",
          hooks_url: "https://api.github.com/repos/PeterWahba/maskey/hooks",
          issue_events_url:
            "https://api.github.com/repos/PeterWahba/maskey/issues/events{/number}",
          events_url: "https://api.github.com/repos/PeterWahba/maskey/events",
          assignees_url:
            "https://api.github.com/repos/PeterWahba/maskey/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/PeterWahba/maskey/branches{/branch}",
          tags_url: "https://api.github.com/repos/PeterWahba/maskey/tags",
          blobs_url:
            "https://api.github.com/repos/PeterWahba/maskey/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/PeterWahba/maskey/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/PeterWahba/maskey/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/PeterWahba/maskey/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/PeterWahba/maskey/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/PeterWahba/maskey/languages",
          stargazers_url:
            "https://api.github.com/repos/PeterWahba/maskey/stargazers",
          contributors_url:
            "https://api.github.com/repos/PeterWahba/maskey/contributors",
          subscribers_url:
            "https://api.github.com/repos/PeterWahba/maskey/subscribers",
          subscription_url:
            "https://api.github.com/repos/PeterWahba/maskey/subscription",
          commits_url:
            "https://api.github.com/repos/PeterWahba/maskey/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/PeterWahba/maskey/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/PeterWahba/maskey/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/PeterWahba/maskey/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/PeterWahba/maskey/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/PeterWahba/maskey/compare/{base}...{head}",
          merges_url: "https://api.github.com/repos/PeterWahba/maskey/merges",
          archive_url:
            "https://api.github.com/repos/PeterWahba/maskey/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/PeterWahba/maskey/downloads",
          issues_url:
            "https://api.github.com/repos/PeterWahba/maskey/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/PeterWahba/maskey/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/PeterWahba/maskey/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/PeterWahba/maskey/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/PeterWahba/maskey/labels{/name}",
          releases_url:
            "https://api.github.com/repos/PeterWahba/maskey/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/PeterWahba/maskey/deployments",
          created_at: "2022-02-07T13:40:21Z",
          updated_at: "2022-02-07T13:41:56Z",
          pushed_at: "2022-02-09T15:33:53Z",
          git_url: "git://github.com/PeterWahba/maskey.git",
          ssh_url: "git@github.com:PeterWahba/maskey.git",
          clone_url: "https://github.com/PeterWahba/maskey.git",
          svn_url: "https://github.com/PeterWahba/maskey",
          homepage: null,
          size: 9883,
          stargazers_count: 0,
          watchers_count: 0,
          language: "C++",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: "public",
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: "master",
          permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
          },
          score: 1,
        },
        {
          id: 448625204,
          node_id: "R_kgDOGr16NA",
          name: "maskey",
          full_name: "maskey32/maskey",
          private: false,
          owner: {
            login: "maskey32",
            id: 61390881,
            node_id: "MDQ6VXNlcjYxMzkwODgx",
            avatar_url: "https://avatars.githubusercontent.com/u/61390881?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/maskey32",
            html_url: "https://github.com/maskey32",
            followers_url: "https://api.github.com/users/maskey32/followers",
            following_url:
              "https://api.github.com/users/maskey32/following{/other_user}",
            gists_url: "https://api.github.com/users/maskey32/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/maskey32/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/maskey32/subscriptions",
            organizations_url: "https://api.github.com/users/maskey32/orgs",
            repos_url: "https://api.github.com/users/maskey32/repos",
            events_url:
              "https://api.github.com/users/maskey32/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/maskey32/received_events",
            type: "User",
            site_admin: false,
          },
          html_url: "https://github.com/maskey32/maskey",
          description: null,
          fork: false,
          url: "https://api.github.com/repos/maskey32/maskey",
          forks_url: "https://api.github.com/repos/maskey32/maskey/forks",
          keys_url:
            "https://api.github.com/repos/maskey32/maskey/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/maskey32/maskey/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/maskey32/maskey/teams",
          hooks_url: "https://api.github.com/repos/maskey32/maskey/hooks",
          issue_events_url:
            "https://api.github.com/repos/maskey32/maskey/issues/events{/number}",
          events_url: "https://api.github.com/repos/maskey32/maskey/events",
          assignees_url:
            "https://api.github.com/repos/maskey32/maskey/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/maskey32/maskey/branches{/branch}",
          tags_url: "https://api.github.com/repos/maskey32/maskey/tags",
          blobs_url:
            "https://api.github.com/repos/maskey32/maskey/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/maskey32/maskey/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/maskey32/maskey/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/maskey32/maskey/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/maskey32/maskey/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/maskey32/maskey/languages",
          stargazers_url:
            "https://api.github.com/repos/maskey32/maskey/stargazers",
          contributors_url:
            "https://api.github.com/repos/maskey32/maskey/contributors",
          subscribers_url:
            "https://api.github.com/repos/maskey32/maskey/subscribers",
          subscription_url:
            "https://api.github.com/repos/maskey32/maskey/subscription",
          commits_url:
            "https://api.github.com/repos/maskey32/maskey/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/maskey32/maskey/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/maskey32/maskey/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/maskey32/maskey/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/maskey32/maskey/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/maskey32/maskey/compare/{base}...{head}",
          merges_url: "https://api.github.com/repos/maskey32/maskey/merges",
          archive_url:
            "https://api.github.com/repos/maskey32/maskey/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/maskey32/maskey/downloads",
          issues_url:
            "https://api.github.com/repos/maskey32/maskey/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/maskey32/maskey/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/maskey32/maskey/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/maskey32/maskey/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/maskey32/maskey/labels{/name}",
          releases_url:
            "https://api.github.com/repos/maskey32/maskey/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/maskey32/maskey/deployments",
          created_at: "2022-01-16T17:30:56Z",
          updated_at: "2022-01-16T17:38:55Z",
          pushed_at: "2022-01-16T17:38:52Z",
          git_url: "git://github.com/maskey32/maskey.git",
          ssh_url: "git@github.com:maskey32/maskey.git",
          clone_url: "https://github.com/maskey32/maskey.git",
          svn_url: "https://github.com/maskey32/maskey",
          homepage: null,
          size: 565,
          stargazers_count: 0,
          watchers_count: 0,
          language: "HTML",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: "public",
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: "master",
          permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
          },
          score: 1,
        },
        {
          id: 278598388,
          node_id: "MDEwOlJlcG9zaXRvcnkyNzg1OTgzODg=",
          name: "maskeynihal",
          full_name: "maskeynihal/maskeynihal",
          private: false,
          owner: {
            login: "maskeynihal",
            id: 26411488,
            node_id: "MDQ6VXNlcjI2NDExNDg4",
            avatar_url: "https://avatars.githubusercontent.com/u/26411488?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/maskeynihal",
            html_url: "https://github.com/maskeynihal",
            followers_url: "https://api.github.com/users/maskeynihal/followers",
            following_url:
              "https://api.github.com/users/maskeynihal/following{/other_user}",
            gists_url:
              "https://api.github.com/users/maskeynihal/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/maskeynihal/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/maskeynihal/subscriptions",
            organizations_url: "https://api.github.com/users/maskeynihal/orgs",
            repos_url: "https://api.github.com/users/maskeynihal/repos",
            events_url:
              "https://api.github.com/users/maskeynihal/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/maskeynihal/received_events",
            type: "User",
            site_admin: false,
          },
          html_url: "https://github.com/maskeynihal/maskeynihal",
          description: null,
          fork: false,
          url: "https://api.github.com/repos/maskeynihal/maskeynihal",
          forks_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/forks",
          keys_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/teams",
          hooks_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/hooks",
          issue_events_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/events",
          assignees_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/branches{/branch}",
          tags_url: "https://api.github.com/repos/maskeynihal/maskeynihal/tags",
          blobs_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/languages",
          stargazers_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/stargazers",
          contributors_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/contributors",
          subscribers_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/subscribers",
          subscription_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/subscription",
          commits_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/merges",
          archive_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/downloads",
          issues_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/labels{/name}",
          releases_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/maskeynihal/maskeynihal/deployments",
          created_at: "2020-07-10T09:51:00Z",
          updated_at: "2020-07-10T09:51:05Z",
          pushed_at: "2020-07-10T09:51:03Z",
          git_url: "git://github.com/maskeynihal/maskeynihal.git",
          ssh_url: "git@github.com:maskeynihal/maskeynihal.git",
          clone_url: "https://github.com/maskeynihal/maskeynihal.git",
          svn_url: "https://github.com/maskeynihal/maskeynihal",
          homepage: null,
          size: 0,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: "public",
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: "master",
          permissions: {
            admin: true,
            maintain: true,
            push: true,
            triage: true,
            pull: true,
          },
          score: 1,
        },
        {
          id: 446558814,
          node_id: "R_kgDOGp3yXg",
          name: "maskeyaniket",
          full_name: "maskeyaniket/maskeyaniket",
          private: false,
          owner: {
            login: "maskeyaniket",
            id: 39902003,
            node_id: "MDQ6VXNlcjM5OTAyMDAz",
            avatar_url: "https://avatars.githubusercontent.com/u/39902003?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/maskeyaniket",
            html_url: "https://github.com/maskeyaniket",
            followers_url:
              "https://api.github.com/users/maskeyaniket/followers",
            following_url:
              "https://api.github.com/users/maskeyaniket/following{/other_user}",
            gists_url:
              "https://api.github.com/users/maskeyaniket/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/maskeyaniket/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/maskeyaniket/subscriptions",
            organizations_url: "https://api.github.com/users/maskeyaniket/orgs",
            repos_url: "https://api.github.com/users/maskeyaniket/repos",
            events_url:
              "https://api.github.com/users/maskeyaniket/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/maskeyaniket/received_events",
            type: "User",
            site_admin: false,
          },
          html_url: "https://github.com/maskeyaniket/maskeyaniket",
          description: "Config files for my GitHub profile.",
          fork: false,
          url: "https://api.github.com/repos/maskeyaniket/maskeyaniket",
          forks_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/forks",
          keys_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/teams",
          hooks_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/hooks",
          issue_events_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/events",
          assignees_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/tags",
          blobs_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/languages",
          stargazers_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/stargazers",
          contributors_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/contributors",
          subscribers_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/subscribers",
          subscription_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/subscription",
          commits_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/merges",
          archive_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/downloads",
          issues_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/labels{/name}",
          releases_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/maskeyaniket/maskeyaniket/deployments",
          created_at: "2022-01-10T19:39:26Z",
          updated_at: "2022-01-10T19:39:26Z",
          pushed_at: "2022-01-10T19:39:27Z",
          git_url: "git://github.com/maskeyaniket/maskeyaniket.git",
          ssh_url: "git@github.com:maskeyaniket/maskeyaniket.git",
          clone_url: "https://github.com/maskeyaniket/maskeyaniket.git",
          svn_url: "https://github.com/maskeyaniket/maskeyaniket",
          homepage: "https://github.com/maskeyaniket",
          size: 0,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: false,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: ["config", "github-config"],
          visibility: "public",
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: "main",
          permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
          },
          score: 1,
        },
        {
          id: 428214132,
          node_id: "R_kgDOGYYHdA",
          name: "pratik-maskey",
          full_name: "pratik-maskey/pratik-maskey",
          private: false,
          owner: {
            login: "pratik-maskey",
            id: 94355205,
            node_id: "U_kgDOBZ-_BQ",
            avatar_url: "https://avatars.githubusercontent.com/u/94355205?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/pratik-maskey",
            html_url: "https://github.com/pratik-maskey",
            followers_url:
              "https://api.github.com/users/pratik-maskey/followers",
            following_url:
              "https://api.github.com/users/pratik-maskey/following{/other_user}",
            gists_url:
              "https://api.github.com/users/pratik-maskey/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/pratik-maskey/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/pratik-maskey/subscriptions",
            organizations_url:
              "https://api.github.com/users/pratik-maskey/orgs",
            repos_url: "https://api.github.com/users/pratik-maskey/repos",
            events_url:
              "https://api.github.com/users/pratik-maskey/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/pratik-maskey/received_events",
            type: "User",
            site_admin: false,
          },
          html_url: "https://github.com/pratik-maskey/pratik-maskey",
          description: "Config files for my GitHub profile.",
          fork: false,
          url: "https://api.github.com/repos/pratik-maskey/pratik-maskey",
          forks_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/forks",
          keys_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/teams",
          hooks_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/hooks",
          issue_events_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/events",
          assignees_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/tags",
          blobs_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/languages",
          stargazers_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/stargazers",
          contributors_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/contributors",
          subscribers_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/subscribers",
          subscription_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/subscription",
          commits_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/merges",
          archive_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/downloads",
          issues_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/labels{/name}",
          releases_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/pratik-maskey/pratik-maskey/deployments",
          created_at: "2021-11-15T10:15:02Z",
          updated_at: "2021-11-15T10:15:02Z",
          pushed_at: "2021-11-15T10:15:03Z",
          git_url: "git://github.com/pratik-maskey/pratik-maskey.git",
          ssh_url: "git@github.com:pratik-maskey/pratik-maskey.git",
          clone_url: "https://github.com/pratik-maskey/pratik-maskey.git",
          svn_url: "https://github.com/pratik-maskey/pratik-maskey",
          homepage: "https://github.com/pratik-maskey",
          size: 0,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: false,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: ["config", "github-config"],
          visibility: "public",
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: "main",
          permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
          },
          score: 1,
        },
        {
          id: 274539731,
          node_id: "MDEwOlJlcG9zaXRvcnkyNzQ1Mzk3MzE=",
          name: "Maskey-repo",
          full_name: "tony-780/Maskey-repo",
          private: false,
          owner: {
            login: "tony-780",
            id: 67349919,
            node_id: "MDQ6VXNlcjY3MzQ5OTE5",
            avatar_url: "https://avatars.githubusercontent.com/u/67349919?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/tony-780",
            html_url: "https://github.com/tony-780",
            followers_url: "https://api.github.com/users/tony-780/followers",
            following_url:
              "https://api.github.com/users/tony-780/following{/other_user}",
            gists_url: "https://api.github.com/users/tony-780/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/tony-780/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/tony-780/subscriptions",
            organizations_url: "https://api.github.com/users/tony-780/orgs",
            repos_url: "https://api.github.com/users/tony-780/repos",
            events_url:
              "https://api.github.com/users/tony-780/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/tony-780/received_events",
            type: "User",
            site_admin: false,
          },
          html_url: "https://github.com/tony-780/Maskey-repo",
          description: null,
          fork: false,
          url: "https://api.github.com/repos/tony-780/Maskey-repo",
          forks_url: "https://api.github.com/repos/tony-780/Maskey-repo/forks",
          keys_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/tony-780/Maskey-repo/teams",
          hooks_url: "https://api.github.com/repos/tony-780/Maskey-repo/hooks",
          issue_events_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/events",
          assignees_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/branches{/branch}",
          tags_url: "https://api.github.com/repos/tony-780/Maskey-repo/tags",
          blobs_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/languages",
          stargazers_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/stargazers",
          contributors_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/contributors",
          subscribers_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/subscribers",
          subscription_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/subscription",
          commits_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/merges",
          archive_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/downloads",
          issues_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/labels{/name}",
          releases_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/tony-780/Maskey-repo/deployments",
          created_at: "2020-06-24T00:47:12Z",
          updated_at: "2020-07-15T20:51:54Z",
          pushed_at: "2020-07-15T20:51:51Z",
          git_url: "git://github.com/tony-780/Maskey-repo.git",
          ssh_url: "git@github.com:tony-780/Maskey-repo.git",
          clone_url: "https://github.com/tony-780/Maskey-repo.git",
          svn_url: "https://github.com/tony-780/Maskey-repo",
          homepage: null,
          size: 297,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: true,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: true,
          web_commit_signoff_required: false,
          topics: [],
          visibility: "public",
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: "master",
          permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
          },
          score: 1,
        },
      ],
    };
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return <div>ERROR: {error.message}</div>;
};

export interface IPageSize {
  label: string;
  value: number;
}

const options = [
  {
    label: "10",
    value: "10",
  },
  {
    label: "25",
    value: "25",
  },
  {
    label: "50",
    value: "50",
  },
];

const Search = () => {
  const repos = useLoaderData<LoaderData>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const per_page = searchParams.get("per_page") || "10";
    searchParams.set("per_page", per_page);

    setSearchParams(new URLSearchParams(searchParams));
  }, []);

  const handlePageSizeUpdate = (
    selectedValue: IPageSize,
    action: ActionMeta<IPageSize>
  ) => {
    searchParams.set("per_page", selectedValue.value.toString());

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto">
        {repos.items.map((repo) => (
          <RepoCard
            name={repo.name}
            description={repo.description}
            stargazersCount={repo.stargazers_count}
            forksCount={repo.forks_count}
            updatedAt={repo.updated_at}
            owner={{
              login: repo.owner.login,
              id: repo.owner.id,
              nodeId: repo.owner.node_id,
              avatarUrl: repo.owner.avatar_url,
              gravatarId: repo.owner.gravatar_id,
              url: repo.owner.url,
              htmlUrl: repo.owner.html_url,
              type: repo.owner.type,
            }}
            watchersCount={repo.watchers_count}
            key={repo.id}
          />
        ))}
      </div>

      <div className="container mx-auto sticky bottom-0">
        <div className="bg-slate-600 rounded-lg mb-4 p-4 flex items-center justify-between">
          <Pagination pageCount={repos.total_count} />
          <Select
            placeholder="Select page size"
            className="w-48"
            options={options}
            menuPosition="fixed"
            onChange={handlePageSizeUpdate}
            defaultValue={
              options.find(
                (option) =>
                  +option.value === +(searchParams.get("per_page") || 10)
              ) || options[0]
            }
          />
        </div>
      </div>
    </>
  );
};

export default Search;
