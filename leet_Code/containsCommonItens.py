# given 2 arrays, return true if they have common elements and false if not
# ['a','b','c'] ['x','y'] ['o','a','x']
# Learning hash Table
from typing import List


class Solution:
    def containsCommonItens(arr1: List[int], arr2: List[int]) -> bool:
        numMap = {}
        n1 = len(arr1)
        n2 = len(arr2)

        for i in range(n1):
            if (arr1[i] not in numMap):
                item = arr1[i]
                numMap[item] = True
        
        for i in range(n2):
            if(arr2[i] in numMap):
                print(True)
                return True
        print(False)
        return False


    containsCommonItens(['a','b','c'], ['x','c'])