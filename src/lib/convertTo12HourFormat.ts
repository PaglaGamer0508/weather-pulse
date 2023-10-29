export const convertTo12HourFormat = (time24h: string): string => {
  const [hour, minute] = time24h.split(":");
  let ampm = "AM";
  let hour12 = parseInt(hour, 10);

  if (hour12 === 12) {
    ampm = "PM";
  } else if (hour12 > 12) {
    ampm = "PM";
    hour12 -= 12;
  } else if (hour12 === 0) {
    hour12 = 12;
  }

  // Pad the hour and minute with leading zeros if needed
  const paddedHour = hour12.toString().padStart(2, "0");
  const paddedMinute = minute.toString().padStart(2, "0");

  return `${paddedHour}:${paddedMinute} ${ampm}`;
};
