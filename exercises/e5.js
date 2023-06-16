export function getAllClientNames(array) {
  let allNames = [];
  for (var i in array) {
    allNames.push(array[i].name);
  }
return allNames;
}
