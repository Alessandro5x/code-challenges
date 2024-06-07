class Solution {
    longestSubarray(nums) {
        if (nums.every(num => num === 1)) return nums.length - 1;

        const size = nums.length;
        let lo = 0, hi = 0; // min and max index
        let curr = 0, max = 0;
        let zeroes = 0;

        while (hi < size) {
            if (nums[hi] === 1) {
                curr++;
                max = Math.max(max, curr);
            } else {
                zeroes++;
            }
            while (zeroes > 1) {
                if (nums[lo] === 0) {
                    zeroes--;
                } else {
                    curr--;
                }
                lo++;
            }
            hi++;
        }

        return max;
    }
}

// Exemplo de uso
const solution = new Solution();
const nums = [1, 1, 0, 1, 1, 1, 0, 1];
console.log(solution.longestSubarray(nums)); // Saída esperada: 5
