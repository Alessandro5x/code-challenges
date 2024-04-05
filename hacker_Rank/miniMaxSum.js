'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    //Find the max number and add the others
    let max = 0;
    let maxSum = 0;
    let minSum = 0;
    for(let i = 0; i < arr.length;i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }
    let min = max;
    for(let j = 0; j < arr.length;j++){
        if (max != arr[j]){
            minSum = minSum + arr[j];
        }
    }
    for(let a = 0; a < arr.length;a++){
        if (min > arr[a]){
            min = arr[a];
        }
    }
    if (min == max){
        for(let k = 1; k < arr.length;k++){
            maxSum = maxSum + arr[k];
            minSum = minSum + arr[k];
        }
        console.log(`${minSum} ${maxSum}`);
    }else{
        for(let b = 0; b < arr.length;b++){
            if (min != arr[b]){
                maxSum = maxSum + arr[b];
            }
        }
        console.log(`${minSum} ${maxSum}`);
    }


}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
