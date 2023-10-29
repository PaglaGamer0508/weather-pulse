export const formatDateTime = (inputDateTime: string): string => {
  const date = new Date(inputDateTime);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleString(undefined, options);
};
