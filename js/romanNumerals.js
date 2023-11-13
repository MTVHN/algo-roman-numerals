exports.toRoman = function (num) {

  let arabicNums = [{ 1000: 'M' }, { 500: 'D' }, { 100: 'C' }, { 50: 'L' }, { 10: 'X' }, { 5: 'V' }, { 1: 'I' }];
  let roman = ''

  for (let i = 0; i < arabicNums.length; i++) {

    let arabicKey = Object.keys(arabicNums[i])[0];
    let romanValue = Object.values(arabicNums[i])[0];

    let integer = Math.floor(num / arabicKey);
    let remainder = Math.floor(num % arabicKey)


    if (integer >= 1) {
      roman += romanValue.repeat(integer);
      num = remainder;
      if (remainder === 0) break;
    }
  }
  // console.log(roman)
  return roman;
};

exports.toRoman(20001);