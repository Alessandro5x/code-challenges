from typing import List
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(len(nums)-1):
                if (nums[i]+nums[j+1] == target):
                    return [i,j+1]