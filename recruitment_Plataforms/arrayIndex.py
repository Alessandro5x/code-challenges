def get_positions(arr):
    positions = [1] * len(arr)
    for i in range(len(arr)):
        for j in range(len(arr)):
            if arr[i] > arr[j]:
                positions[i] += 1
    return positions

print(get_positions([5, 4, 2, 3]))  # Output: [4, 3, 1, 2]
print(get_positions([10, 10, 10]))  # Output: [1, 1, 1]
