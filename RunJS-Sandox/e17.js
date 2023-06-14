
export function doesArrayInclude(array, value) {
  for (let val of array) {
    if (val == value) {
      return true;
    }
  }
  return false;
}

const array = ['c', 'd', 'f', 'h', 'i', 'z', 'v'];
const value = 'v';
const value2 = 't';

doesArrayInclude(array, value);
doesArrayInclude(array, value2);