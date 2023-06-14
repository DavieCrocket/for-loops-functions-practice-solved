
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  let namesWithA = [];
  let namesWithoutA = [];
  let sortedNames = [];
  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array[x].length; y++) {
      if (array[x][y] == 'a' || array[x][y] == 'A') {
        namesWithA.push(array[x]);
        break
      }
      if (y == array[x].length - 1) {
        namesWithoutA.push(array[x]);
      }
    }
  }
  sortedNames.push(namesWithA);
  sortedNames.push(namesWithoutA);
  return sortedNames;
}

const classSeatsFlattened = [
  "Ben",
  "Emma",
  "Sophia",
  "William",
  "Elijah",
  "James",
  "Lucas",
  "Mason",
  "Mia",
  "Liam",
  "Noah",
  "Oliver",
  "Ethan",
  "Harper",
  "Evelyn",
];

separateNamesWithAFromRest(classSeatsFlattened);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
