//This is not applicable for even basic level question 🤣
let arr = [1, 1, 3, 4, 4, 5, 5, 7, 7, 8]
let brr = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
        brr.push(arr[i]);
    }
}
console.log(brr);
