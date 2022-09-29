export const GetDate = (date) => {
  const year = new Date(date).getFullYear();
  const month = String(new Date(date).getMonth() + 1).padStart(2, 0);
  const day = String(new Date(date).getDate()).padStart(2, 0);

  return `${year}-${month}-${day}`;
};
