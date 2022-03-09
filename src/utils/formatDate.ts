const formatDate = (date: string): string => {
  const dateFormatted = new Date(date);
  const day = String(dateFormatted.getDate()).padStart(2, '0');
  const month = String(dateFormatted.getMonth() + 1).padStart(2, '0');
  const year = dateFormatted.getFullYear();

  return `${day}/${month}/${year}`;
}

export { formatDate };