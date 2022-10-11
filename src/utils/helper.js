export function calculateDate(startDate, endDate) {
  let days;
  const timeStartDate = new Date(startDate).getTime();
  const timeEndDate = new Date(endDate).getTime();
  if (isNaN(timeEndDate) || timeEndDate - timeStartDate <= 0)
    return "Over time";
  let timeRemaining = parseInt((timeEndDate - timeStartDate) / 1000);
  if (timeRemaining > 0) {
    days = parseInt(timeRemaining / 86400);
  }
  return days;
}
