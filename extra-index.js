

function ExtraIdx(a,b) {
    let i = 0;
    let j = 0;
    let length=a.length>b.length?a.length:b.length;
        while (i <= length) {
        if (a[i] == b[j]) {
            i++;
            j++;
        }
        else {
            return i;
        }
    }
}
let a = [2, 4, 6, 8, 10, 12];
let b = [2, 4, 6, 8, 10];

console.log(ExtraIdx(a,b))