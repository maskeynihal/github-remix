import {
  CaretDownIcon,
  CaretSortIcon,
  CaretUpIcon,
} from "@radix-ui/react-icons";

export type SortType = "asc" | "desc" | null;

export interface ISortDirection {
  order?: SortType;
  onClick: (direction: SortType) => void;
}

const SortDirection = ({ order, onClick }: ISortDirection) => {
  if (order === "asc") {
    return (
      <CaretUpIcon
        className="text-white cursor-pointer h-6 w-6"
        onClick={() => onClick("desc")}
      />
    );
  }

  if (order === "desc") {
    return (
      <CaretDownIcon
        className="text-white cursor-pointer h-6 w-6"
        onClick={() => onClick("asc")}
      />
    );
  }

  return (
    <CaretSortIcon
      className="text-white cursor-pointer h-6 w-6"
      onClick={() => onClick("asc")}
    />
  );
};

export default SortDirection;
