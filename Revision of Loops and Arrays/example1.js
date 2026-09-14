function camelize (str) {
    let arr = str.split("-");

    return arr.reduce((firstItem, item) => firstItem + item.charAt(0).toUpperCase() + item.slice(1))

}

console.log(camelize("background-color"))