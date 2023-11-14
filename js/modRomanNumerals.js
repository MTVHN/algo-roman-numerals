exports.toRoman = function (num) {

  let arabicNums = [{ 1000: 'M' }, { 500: 'D' }, { 100: 'C' }, { 50: 'L' }, { 10: 'X' }, { 5: 'V' }, { 1: 'I' }];
  let romanNums = { 1000: 'M', 500: 'D', 100: 'C', 50: 'L', 10: 'X', 5: 'V', 1: 'I' }
  let roman = ''
  let valid
  let smallNum;
  let difference

  for (let i = 0; i < arabicNums.length; i++) {

    let arabicKey = Object.keys(arabicNums[i])[0];
    let romanValue = Object.values(arabicNums[i])[0];

    let integer = Math.floor(num / arabicKey);
    let integerRevers = Math.floor(arabicKey / num);
    let remainder = Math.floor(num % arabicKey);

    if (integer == 1) {
      // let difference = num - arabicKey;
      roman += romanValue;
      num = remainder;
      console.log(arabicKey)
    }

    if (integerRevers == 1) {
      difference = num % 10 * 10;
      smallNum = arabicKey - difference;
      roman += romanNums[smallNum] + romanValue;
      num = num - difference;
    }

    valid = num + 1 == arabicKey;
    if (valid) {
      roman += romanNums[1] + romanValue
      console.log(arabicKey);
    }
  }
  console.log(roman)
  // console.log(roman)
  return roman;
};

exports.toRoman(44);