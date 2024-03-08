export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty string to store the concatenated employee names
  let employeesString = '';

  // Iterate through the iterator object using a for...of loop
  for (const employee of reportWithIterator) {
    // Concatenate each employee name followed by a |
    employeesString += `${employee} | `;
  }

  // Remove the trailing ' | ' from the concatenated string
  employeesString = employeesString.slice(0, -3);

  // Return the concatenated string of employee names
  return employeesString;
}
