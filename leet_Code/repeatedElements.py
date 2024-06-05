def remove_repeated_elements(input_list):
    seen = set()
    result = []
    for item in input_list:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

my_list = [5, 1, 2, 3, 2, 1, 3, 1, 1, 2, 3, 4, 5]
unique_ordered_list = remove_repeated_elements(my_list)
print(unique_ordered_list)