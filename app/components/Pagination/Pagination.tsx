import ReactPaginate from "react-paginate";

import type { ReactPaginateProps } from "react-paginate";
import { useLocation, useNavigate, useSearchParams } from "@remix-run/react";
import { useEffect } from "react";

const Pagination = (props: ReactPaginateProps) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") || "1";
    searchParams.set("page", page);

    setSearchParams(new URLSearchParams(searchParams));
  }, []);

  const handlePageChange = ({ selected }: { selected: number }) => {
    const page = selected + 1;
    searchParams.set("page", page.toString());

    setSearchParams(new URLSearchParams(searchParams));

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const pageIndex = (+searchParams.get("page") || 1) - 1;

  return (
    <div className="flex items-center shrink-0">
      <ReactPaginate
        className="flex w-full"
        previousClassName="hover:text-white"
        nextClassName="hover:text-white"
        pageClassName="mx-2 hover:text-white"
        activeLinkClassName="text-white"
        onPageChange={handlePageChange}
        initialPage={pageIndex}
        {...props}
      />
    </div>
  );
};

export default Pagination;
