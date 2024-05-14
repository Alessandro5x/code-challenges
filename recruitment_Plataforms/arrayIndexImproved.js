function getPositions(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b);
    return arr.map(num => sortedArr.indexOf(num) + 1);
}

console.log(getPositions([4, 5, 2, 3]));  // Output: [4, 3, 1, 2]
console.log(getPositions([10, 10, 10]));  // Output: [1, 1, 1]