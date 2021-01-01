# def find_it(seq):
# cnt = 0
# R = 0
# seq = sorted(seq)
# if len(seq) > 1:

#     for i in range(len(seq) - 1):
#         if seq[i] == seq[i + 1]:
#             cnt += 1
#         else:
#             if (cnt + 1) % 2 != 0:
#                 R = seq[i]


#             else:
#                 cnt = 0
#     if (seq[len(seq)-1] != seq[len(seq)-2]) and R == 0:
#         R = seq[len(seq)-1]
# else:
#     R = seq[0]


# return R
