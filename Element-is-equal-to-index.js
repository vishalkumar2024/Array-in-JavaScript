function valueEqualToIndex(arr) {
    let res = [];
    for (let i = 1; i < arr.length; i++) {
        if (i == arr[i-1]) {
            res.push(arr[i-1]);
        }
    }
    return res; 
}
let arr = [15, 2, 45, 4 , 7]
console.log(valueEqualToIndex(arr));