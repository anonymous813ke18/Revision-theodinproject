function copySorted (arr) {
    return arr.filter((item) => item).sort();

    // return arr.slice().sort()
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)