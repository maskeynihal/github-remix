import {
  useLocation,
  useNavigate,
  useLoaderData,
  useTransition,
  useSearchParams,
} from "@remix-run/react";
import { useEffect } from "react";
import RepoCard from "./components/Card";
import { getQueryParams } from "~/utils/url";
import { Header } from "~/components/Header";
import { Select } from "~/components/select";
import type { ActionMeta } from "react-select";
import { json, redirect } from "@remix-run/node";
import { Pagination } from "~/components/Pagination";
import SortDirection from "./components/SortDirection";
import { getRepos } from "~/services/api/repo.services";
import type { SortType } from "./components/SortDirection";
import { Cross1Icon, TokensIcon } from "@radix-ui/react-icons";
import type { RepoSortType } from "~/services/api/repo.services";
import type { MetaFunction, LoaderFunction } from "@remix-run/node";

type LoaderData = Awaited<ReturnType<typeof getRepos>>;
type ErrorBoundaryComponentProps = any;

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const queries = getQueryParams(request.url);

    if (!queries.q) {
      console.log("No query param found");
      return redirect("/");
    }

    return json(await getRepos(queries));
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const meta: MetaFunction = ({ data, parentsData, params, location }) => {
  const query = new URLSearchParams(location.search);

  return {
    title: `Search: ${query.get("q")} | Github Remix`,
  };
};

export const ErrorBoundary = ({ error }: ErrorBoundaryComponentProps) => {
  return <div>ERROR: {error.message}</div>;
};

export interface IPageSize {
  label: string;
  value: number;
}

const pageSizeOptions = [
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

const sortOptions: Array<{ label: string; value: RepoSortType | null }> = [
  {
    label: "Default",
    value: null,
  },
  {
    label: "Stars",
    value: "stars",
  },
  {
    label: "Forks",
    value: "forks",
  },
  {
    label: "Updated",
    value: "updated",
  },
  {
    label: "Help Wanted",
    value: "help-wanted-issues",
  },
];

const Search = () => {
  const repos = useLoaderData<LoaderData>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const transition = useTransition();

  const isLoading = transition.state === "loading";

  const pageSize = Number(searchParams.get("per_page")) || 10;
  const totalPages = Math.ceil(repos.total_count / +pageSize);
  const currentPage = Number(searchParams.get("page")) || 1;
  const orderBy = searchParams.get("sort") as RepoSortType;
  const sortDirection = searchParams.get("order") as SortType;
  const startOffset = (currentPage - 1) * pageSize + 1;
  const endOffset = (currentPage - 1) * pageSize + pageSize;

  const hasData = Boolean(repos?.items?.length);

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

  const handleSortChange = (selected: { label: string; value: string }) => {
    selected.value
      ? searchParams.set("sort", selected.value)
      : searchParams.delete("sort");

    setSearchParams(new URLSearchParams(searchParams), { replace: true });
  };

  const handleSortDirectionClick = (direction: SortType) => {
    direction
      ? searchParams.set("order", direction)
      : searchParams.delete("order");

    setSearchParams(new URLSearchParams(searchParams), { replace: true });
  };

  return (
    <>
      <Header />
      {hasData && (
        <div className="container mx-auto top-20">
          <div className="bg-slate-600 rounded-lg mb-4 p-4 flex items-center justify-between">
            <div className="flex items-center">
              <p>{`Showing ${startOffset} - ${endOffset} of ${repos.total_count}`}</p>

              {isLoading && <TokensIcon className="animate-spin ml-4" />}
            </div>
            <div className="flex items-center justify-between">
              <span className="mr-4">Sort By</span>
              <Select
                options={sortOptions}
                placeholder="Sort By"
                onChange={handleSortChange as any}
                defaultValue={sortOptions.find(
                  (option) => option.value === orderBy
                )}
              />
              {orderBy && (
                <div className="flex items-center justify-between">
                  <SortDirection
                    onClick={handleSortDirectionClick}
                    order={sortDirection}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto">
        {hasData ? (
          repos.items.map((repo) => (
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
          ))
        ) : (
          <div className="text-center bg-slate-600 rounded-lg mb-4 p-4 flex items-center justify-center h-48 text-white">
            <Cross1Icon />
            <p className="px-4 font-bold">No results found</p>
            <Cross1Icon />
          </div>
        )}
      </div>

      <div className="container mx-auto sticky bottom-0">
        <div className="bg-slate-600 rounded-lg mb-4 p-4 flex items-center justify-between">
          <Pagination
            pageCount={totalPages}
            renderOnZeroPageCount={() => null}
          />

          <div className="flex items-center">
            <span className="mr-4">Page Size: </span>
            <Select
              placeholder="Select page size"
              className="w-24"
              options={pageSizeOptions}
              menuPosition="fixed"
              onChange={handlePageSizeUpdate as any}
              defaultValue={
                pageSizeOptions.find(
                  (option) =>
                    +option.value === +(searchParams.get("per_page") || 10)
                ) || pageSizeOptions[0]
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
