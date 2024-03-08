export default function appendToEachArrayValue(array, appendString) {
  const arrayEnd = [];
  for (let value of array) {
    arrayEnd.push(`${appendString}${value}`);
  }
  
  return arrayEnd;
}
