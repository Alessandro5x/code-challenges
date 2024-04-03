//Baseball Game https://leetcode.com/problems/baseball-game/description/
class Solution {
    calPoints(operations) {
        let v = [];
        for (let i = 0; i < operations.length; i++) {
            let op = operations[i];
            let n;
            if (this.isNumber(op, n)) {
                v.push(n);
            } else if (op === "+") {
                v.push(v[v.length - 1] + v[v.length - 2]);
            } else if (op === "D") {
                v.push(2 * v[v.length - 1]);
            } else {
                v.pop();
            }
        }
        let sum = 0;
        for (let i = 0; i < v.length; i++) {
            sum += v[i];
        }
        return sum;
    }

    isNumber(line) {
        let parsed = parseInt(line);
        return !isNaN(parsed);
    }
}

// Exemplo de uso:
let solution = new Solution();
let operations = ["5", "2", "C", "D", "+"];
console.log(solution.calPoints(operations)); // Saída esperada: 30