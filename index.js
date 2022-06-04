const sumItems = function(array) {
  // Sum all the numbers in the array
  let total = 0;
  for (let element of array) {
    if (Array.isArray(element)) {
      element = sumItems(element);
    }
    total += element;
  }

  return total;
};
module.exports = sumItems;