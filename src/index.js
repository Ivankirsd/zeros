module.exports = function getZerosCount(number) {
  let count_5 = 0;

  for (var value = 5; value <= number; value= value + 5) {

    let subValue = value;
    while (subValue%5 === 0) {

      if (subValue%125 === 0) {
        count_5 = count_5 + 3;
        subValue=subValue / 125;
        continue;
      }

      if (subValue%25 === 0) {
        count_5 = count_5 + 2;
        subValue=subValue / 25;
        continue;
      }

        count_5++;
        subValue=subValue / 5;
      }
  }

  return count_5;
}
