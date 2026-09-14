function shuffle (arr) {
    // arr.sort(() => Math.floor(Math.random() * (1 - -1 +1)) + -1)
    arr.sort(() => Math.random() - 0.5)
}

let arr = [1, 2, 3]

shuffle(arr);
console.log(arr)
shuffle(arr)
console.log(arr)
shuffle(arr)
console.log(arr)