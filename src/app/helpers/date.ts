export function returnDate(dateString: string) {
  const arr = dateString
    .split('.')
    .map(el => parseInt(el, 10));

  return new Date(arr[0], arr[1] - 1, arr[2]);
}
