function romanToNumber(roman) {
    var romanNumeralMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var result = 0;
    for (var i in romanNumeralMap) {
        while (roman.indexOf(i) === 0) {
            result += romanNumeralMap[i];
            roman = roman.replace(i, '');
        }
    }
    return result;
}

module.exports = romanToNumber;