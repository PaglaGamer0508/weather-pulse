export const extractTimeFromDate = (dateTimeString: string): string => {
  const dateTimeParts = dateTimeString.split(" ");
  const time = dateTimeParts[1];
  return time;
};
