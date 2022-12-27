import format from "date-fns/format";

export const getFullDateFormatted = (created) =>
  `${format(new Date(created), "dd-MM-yyyy | HH:mm:ss")}`;
