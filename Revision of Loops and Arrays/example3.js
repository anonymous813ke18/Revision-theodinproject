function filterRangeInPlace (arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 3, 8, 1, 3]

filterRangeInPlace(arr, 2, 5)

console.log(arr)
console.log(1 < 2)