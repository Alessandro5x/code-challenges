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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zer = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            pos++;
        }else if (arr[i] < 0){
            neg++;
        }else {
            zer++;
        }
    }
    console.log(pos/arr.length)
    console.log(neg/arr.length)
    console.log(zer/arr.length)

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}