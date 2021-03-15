# from functools import reduce

# def my_add(a,b):
#     result = a+b
#     print(f"{a} + {b} = {result}")
#     return result


# x = [9, 3, '7', '3']
# strings = reduce(my_add, list(map(int,x)))
# print(strings)

# x = [9, 3, '7', '3']
# strings = reduce(my_add, list(map(int,x)))
# print(strings)

def sum_mix(arr):
    values = list(map(int,arr))
    answer = 0
    for value in values:
        answer += value
    return answer
    # print(answer)   

print(sum_mix([9, 3, '7', '3']))