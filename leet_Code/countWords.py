def count_words(sentence):
    # Converte a frase para minúsculas para considerar as palavras de forma case-insensitive
    sentence = sentence.lower()
    
    # Remove pontuações para evitar contagem incorreta de palavras
    sentence = sentence.replace('.', '').replace(',', '')
    
    # Divide a frase em palavras
    words = sentence.split()
    
    # Inicializa o dicionário para armazenar as contagens
    words_count = {}
    
    # Conta a ocorrência de cada palavra
    for word in words:
        if word in words_count:
            words_count[word] += 1
        else:
            words_count[word] = 1
    
    return words_count

# Exemplo de uso:
sentence = "This is a sample sentence to count words in a sentence. In the sample sentence."
word_counts = count_words(sentence)
print(word_counts)
