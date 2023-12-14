import date from "date-and-time";

export const Colours = [
  "rgba(179, 139, 250, 1)",
  "rgba(255, 121, 242, 1)",
  "rgba(67, 230, 252, 1)",
  "rgba(241, 149, 118, 1)",
  "rgba(0, 71, 255, 1)",
  "rgba(102, 145, 255, 1)",
];

export const Trim2Letters = (name) => {
  return (
    name.split(" ")[0].slice(0, 1).toUpperCase() +
    name.split(" ")[1].slice(0, 1).toUpperCase()
  );
};
export const Trim1Letter = (name) => {
  return name.split(" ")[0].slice(0, 1).toUpperCase();
};

export const calculateDate = () => {
  const now = new Date();
  return date.format(now, "DD MMM YYYY");
};
export const calculateTime = () => {
  const now = new Date();
  return date.format(now, "hh:mm A");
};
