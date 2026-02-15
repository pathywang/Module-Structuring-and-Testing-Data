function getOrdinalNumber(num) {
  lastDigit = num % 10;
  lastTwoDigits = num % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + "th";
  }

  switch (lastDigit) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}

console.log(getOrdinalNumber(112))



module.exports = getOrdinalNumber;
