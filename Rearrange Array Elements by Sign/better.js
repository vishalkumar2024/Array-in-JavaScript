// This function returns the array of nums such that every consecutive 
// pair of integers have opposite signs.

function rearrangeArray(arr) {
    let res = [];
    let posiIdx = 0;
    let negaIdx = 1;
    for (let i = 0; i < arr.length; i++) {      // O(n)
        if (arr[i] >= 0) {
            res[posiIdx] = arr[i];
            posiIdx += 2;
        }
        else {
            res[negaIdx] = arr[i];
            negaIdx += 2;
        }
    }
    return res;
}
let arr = [3, 1, -2, -5, 2, -4]
console.log(rearrangeArray(arr));

