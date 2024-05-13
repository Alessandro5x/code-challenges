class Solution {
    findIndex(array, target) {
        for(let i = 0; i <= array.length; i++){
            for(let j = i+1; j < array.length; j++){
                console.log(array[i])
                console.log(array[j])
                if (array[i] + array[j] == target){
                    console.log([i,j])
                    return [i,j]
                }
            }
        }
    }
}

// Exemplo de uso:
let solution = new Solution();
let operations = [2,7,11,15];
let target = 9;
console.log(solution.findIndex(operations));