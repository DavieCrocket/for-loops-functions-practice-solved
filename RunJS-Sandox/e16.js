
export function flatArrays(array) {
// function flatArrays(array) {
  let newArray = [];
  for (let x = 0; x < arr1.length; x++)
    if (typeof(array[x]) == 'string') {
      newArray.push(array[x])
    } else if (typeof(array[x]) == 'object') {
      for (let y = 0; y < array[x].length; y++) {
        newArray.push(array[x][y]);
      }
    }
  return newArray;
}

export const arr1 = [['d', 'r'], 'z', 'b', ['f', 'y']];

export const flatArraysData = [
  ["Yay", "!", "this"],
  ["works", "as", "expected", "!"],
];

console.log(flatArrays(arr1));
console.log(flatArrays(flatArraysData));