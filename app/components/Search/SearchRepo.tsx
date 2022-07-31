import clsx from "clsx";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  Form,
  useParams,
  useSearchParams,
  useTransition,
} from "@remix-run/react";

const SearchRepo = () => {
  const [searchParams] = useSearchParams();
  const transition = useTransition();
  const params = useParams();

  const defaultRepo = searchParams.get("q") || params.repo || "";
  const isSearching = transition.state === "submitting";

  return (
    <Form action="/search" method="get">
      <div className="flex items-center justify-center">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <MagnifyingGlassIcon />
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400  text-gray-700 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for repositories..."
            type="text"
            name="q"
            defaultValue={defaultRepo}
          />
        </label>
        <button
          className={clsx(
            "ml-4 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-md",
            {
              "disabled:bg-slate-700 cursor-not-allowed": isSearching,
            }
          )}
          disabled={isSearching}
        >
          {isSearching ? "Searching..." : "Search"}
        </button>
      </div>
    </Form>
  );
};

export default SearchRepo;
