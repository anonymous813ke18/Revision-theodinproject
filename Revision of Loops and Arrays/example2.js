function filterRange (arr, a, b) {
    return arr.filter((item) => item >= a && item <= b);
}

let arr = [1,2,3,4,5]

console.log(filterRange(arr, 2, 4))