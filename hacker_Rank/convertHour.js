'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let hour = s.split(":")[0];
    let min = s.split(":")[1];
    let sec = s.split(":")[2].replace(s.slice(-2),"");
    if (s.length > 2){
        const lastChars = s.slice(-2);
        if (lastChars == "PM"){
            hour = parseInt(hour)
            hour = hour + 12
        }
    }
    return hour.toString() + ":" + min + ":" + sec

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
