from typing import List

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # Ponteiro para a próxima posição não-zero
        non_zero_pos = 0
        
        # Itera sobre o array
        for i in range(len(nums)):
            # Se o elemento atual não for zero, mova-o para a posição non_zero_pos
            if nums[i] != 0:
                nums[non_zero_pos] = nums[i]
                non_zero_pos += 1
        
        # Após mover todos os elementos não-zero, preencha o resto do array com zeros
        for i in range(non_zero_pos, len(nums)):
            nums[i] = 0
        