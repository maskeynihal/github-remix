import { Header } from "~/components/Header";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import RepoCard from "~/routes/search/components/Card";
import { getRepoDetails } from "~/services/api/repo.services";
import type { RepoDetails } from "~/services/api/repo.services";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    if (!params.repo || !params.owner) {
      console.log("No repo or owner param found");
      return redirect("/");
    }

    return json(
      await getRepoDetails({
        owner: params.owner,
        repo: params.repo,
      })
    );
  } catch (error) {
    return {};
  }
};

export const meta: MetaFunction = ({ data }) => ({
  title: `${data.name} | Github Remix`,
});

const Repo = () => {
  const repo = useLoaderData<RepoDetails>();

  return (
    <>
      <Header />

      <div className="container mx-auto">
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
          openIssues={repo.open_issues}
          defaultBranch={repo.default_branch}
        />
      </div>
    </>
  );
};

export default Repo;
