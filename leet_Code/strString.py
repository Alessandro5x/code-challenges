class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        # Caso especial: se needle é uma string vazia, retorne 0
        if not needle:
            return 0
        
        # Tamanho do needle e do haystack
        needle_length = len(needle)
        haystack_length = len(haystack)
        
        # Percorrer o haystack até o ponto onde o needle ainda pode caber
        for i in range(haystack_length - needle_length + 1):
            # Comparar substring do haystack com o needle
            if haystack[i:i + needle_length] == needle:
                return i
        
        # Se o needle não for encontrado, retornar -1
        return -1