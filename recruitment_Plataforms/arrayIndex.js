function getPositions(arr) {
    let positions = new Array(arr.length).fill(1);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                positions[i]++;
            }
        }
    }
    return positions;
}

console.log(getPositions([5, 4, 2, 3]));  // Output: [4, 3, 1, 2]
console.log(getPositions([10, 10, 10]));  // Output: [1, 1, 1]