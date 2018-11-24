//Solution in 66 characters:

// a=Math.abs,r=(n,s)=>s.split(' ').reduce((p,c)=>a(c-n)<a(p-n)?c:p)
//
// console.log(
//     r("200", "")
// );

const result = function (number, string) {
    return string.split(' ').reduce((previousValue, currentItem) => Math.abs(currentItem - number) < Math.abs(previousValue - number) ? currentItem : previousValue);
}

console.log(
    result("29", "3 40 90 197 -40 0 33 -1 5 -6")
);