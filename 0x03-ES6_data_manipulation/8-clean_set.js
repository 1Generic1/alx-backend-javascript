function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  const filteredValues = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      const restOfString = value.substring(startString.length);
      filteredValues.push(restOfString);
    }
  }
  return filteredValues.join('-');
}
export default cleanSet;
