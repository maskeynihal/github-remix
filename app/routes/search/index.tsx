import type { ErrorBoundaryComponent } from "remix";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getRepos } from "~/services/api/repo.services";
import { getQueryParams } from "~/utils/url";
import RepoCard from "./components/Card";
import { Header } from "~/components/Header";

type LoaderData = Awaited<ReturnType<typeof getRepos>>;

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const queries = getQueryParams(request.url);

    return await getRepos(queries);
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return <div>ERROR: {error.message}</div>;
};

const Search = () => {
  const repos = useLoaderData<LoaderData>();

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
    </>
  );
};

export default Search;
