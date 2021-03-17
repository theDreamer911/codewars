# def merge_arrays(arr1, arr2):
#     for i in arr2:
#         arr1.append(i)
#     print(arr1)
#     return arr1.sort()

# def merge_arrays(arr1, arr2):
#     arr = arr1 + arr2
#     arr.sort()
#     return list(dict.fromkeys(arr))

# def merge_arrays(arr1, arr2):
#     return sorted(set(arr1+arr2))


def merge_arrays(a, b): return sorted(list(set(a+b)))


print(merge_arrays([1, 2, 3, 4], [5, 6, 7, 8]))
print(merge_arrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))
