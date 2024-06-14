def merge_sorted_arrays(array1, array2):
    merged_array = []
    i, j = 0, 0

    # Comparar elementos dos dois arrays e adicionar o menor ao array mesclado
    while i < len(array1) and j < len(array2):
        if array1[i] < array2[j]:
            merged_array.append(array1[i])
            i += 1
        else:
            merged_array.append(array2[j])
            j += 1

    # Adicionar elementos restantes de array1, se houver
    while i < len(array1):
        merged_array.append(array1[i])
        i += 1

    # Adicionar elementos restantes de array2, se houver
    while j < len(array2):
        merged_array.append(array2[j])
        j += 1

    return merged_array

# Exemplo de uso
array1 = [1, 3, 5, 7]
array2 = [2, 4, 6, 8]
merged_array = merge_sorted_arrays(array1, array2)
print(merged_array)  # Saída: [1, 2, 3, 4, 5, 6, 7, 8]
