import format from "date-fns/format";

export const getFullDateFormatted = (created) =>
  `${format(new Date(created), "dd-MM-yyyy | HH:mm:ss")}`;

export const getMonthByIndex = (index) => {
  switch (index) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November ";
    case 11:
    default:
      return "December";
  }
};
