def bynarySearch(arr,target): #Good when the array is sorted
    aux = sorted(arr)
    start = 0
    end = len(aux) - 1

    while start <= end:
        half = (start + end) // 2
        if arr[half] == target:
            print (half)
            return half
        elif aux[half] < target:
            start = half + 1; # follow the right part
        else:
            end = half - 1; # follow the left part

print(bynarySearch([1, 2, 4,5,6,7,8,9], 6))
        