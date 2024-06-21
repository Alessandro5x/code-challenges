from collections import defaultdict
from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = defaultdict(list)    
        for word in strs:
            # Ordena os caracteres da palavra para formar a chave canônica
            sorted_word = ''.join(sorted(word))
            # Agrupa a palavra no dicionário com a chave canônica
            anagrams[sorted_word].append(word)
        
        # Retorna os valores do dicionário (os grupos de anagramas)
        return list(anagrams.values())