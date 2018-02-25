module.exports = function getZerosCount(number) {
  // your implementation
  let count_5 = 0;

  for (var value = 1; value <= number; value++) {

    if (value%5 === 0) {
      count_5++;
    }
    let subValue = value / 5;
    while (subValue%5 === 0) {
        count_5++;
        subValue=subValue / 5;
      }
  }

  console.log('count: ', count_5);
  return count_5;
}
