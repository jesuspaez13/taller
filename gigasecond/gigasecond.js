export const gigasecond = (date) => {
  const SECOND = 1000;
  const GIGASECOND = SECOND * 10 ** 9;

  return new Date(date.getTime() + GIGASECOND);
};
