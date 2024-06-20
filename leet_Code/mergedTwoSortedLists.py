# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from typing import Optional


class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]: # type: ignore
            # Dummy node to serve as the starting point
        dummy = ListNode() # type: ignore
        current = dummy

        # Traverse both lists and merge them
        while list1 and list2:
            if list1.val < list2.val:
                current.next = list1
                list1 = list1.next
            else:
                current.next = list2
                list2 = list2.next
            current = current.next

        # If there are remaining nodes in list1 or list2, append them
        if list1:
            current.next = list1
        elif list2:
            current.next = list2

        # Return the next node of the dummy node, which is the head of the merged list
        return dummy.next