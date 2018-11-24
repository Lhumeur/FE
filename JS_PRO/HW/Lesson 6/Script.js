//Solution in 66 characters:

// a=Math.abs,r=(n,s)=>s.split(' ').reduce((p,c)=>a(c-n)<a(p-n)?c:p)
//
// console.log(
//     r("200", "3 40 -15 90 197 -40 0 33 -1 5 -6")
// );

const result = function (number, string) {
// Arrow functions:
//  return string.split(' ').reduce((previousValue, currentItem) => Math.abs(currentItem - number) < Math.abs(previousValue - number) ? currentItem : previousValue);
    return string.split(' ').reduce(function(previousValue, currentItem) {
        return Math.abs(currentItem - number) < Math.abs(previousValue - number) ? currentItem : previousValue;
    });
}

console.log(
    result("-10", "3 40 -15 90 197 -40 0 33 -1 5 -6")
);
console.log(
    result("-11", "3 40 -15 90 197 -40 0 33 -1 5 -6")
);
console.log(
    result("0", "3 40 -15 90 197 -40 0 33 -1 5 -6")
);
console.log(
    result("90", "3 40 -15 90 197 -40 0 33 -1 5 -6")
);
console.log(
    result("29", "3 40 -15 90 197 -40 0 33 -1 5 -6")
);