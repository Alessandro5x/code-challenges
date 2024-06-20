from typing import List
# My first exercise using hash table 
class Solution:
    def twoSum(nums: List[int], target: int) -> List[int]:
        numMap = {}
        n = len(nums)

        for i in range(1,n):
            print(i)
            complement = target - nums[i]
            if complement in numMap:
                return [numMap[complement], i]
            numMap[nums[i]] = i

        return []  # No solution found
    
    twoSum([1,2,3,4],5)
# Brute force
# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
#         for i in range(len(nums)):
#             for j in range(len(nums)-1):
#                 if (nums[i]+nums[j+1] == target):
#                     return [i,j+1]