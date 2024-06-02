#horas
#saroh
from typing import List
class Solution:
    def reverse(string):
        aux = []
        for i in range(len(string)-1, -1, -1):
            aux.append(string[i])
        print(aux)
        return aux

    reverse("horas")