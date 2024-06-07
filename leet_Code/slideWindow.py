#Longest Subarray of 1's after deleting one element.
from typing import List

class Solution:
    def longestSubarray(self,nums: List[int]) -> int:
        if all(nums): return len(nums)-1

        size = len(nums)
        lo, hi = 0,0 # min and max index
        curr, _max = 0,0
        zeroes = 0

        while hi < size:
            if nums[hi] == 1:
                curr+=1
                _max = max(_max,curr)
            else:
                zeroes+=1
            while zeroes >1:
                if nums[lo] == 0:
                    zeroes-=1
                else:
                    curr-=1                
                lo +=1
            hi+=1

        return _max