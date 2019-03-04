export default function quickSort(arr: number[], isAsccending: boolean): number[] {
  if (1 === arr.length) return arr;
  if (0 === arr.length) return [];

  let small: number[] = [];
  let big: number[] = [];
  let equal: number[] = [];
  let key = arr[0]

  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] < key) {
      small.push(arr[i]);
    } else if (arr[i] > key) {
      big.push(arr[i]);
    } else {
      equal.push(arr[i])
    }
  }

  if (isAsccending) {
    return [].concat(quickSort(small, isAsccending), equal, quickSort(big, isAsccending));
  }
  return [].concat(quickSort(big, isAsccending), equal, quickSort(small, isAsccending));
}