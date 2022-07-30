import { format as dateFormat } from "date-fns";

const formatDate = (date: Date | string, format = "MMM dd, yyyy"): string => {
  return dateFormat(new Date(date), format);
};

export { formatDate };
