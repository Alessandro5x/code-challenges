from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = nums[0]
        current_sum = nums[0]
        
        # Itera sobre os elementos do array começando pelo segundo elemento
        for num in nums[1:]:
            # Atualiza o current_sum para ser o máximo entre o elemento atual
            # e a soma atual mais o elemento atual
            current_sum = max(num, current_sum + num)
            
            # Atualiza o max_sum se o current_sum for maior
            max_sum = max(max_sum, current_sum)
        
        return max_sum