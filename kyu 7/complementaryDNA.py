def DNA_strand(dna):
    answer = ''
    for d in dna:
        if d == 'A':
            answer += 'T'
        elif d == 'T':
            answer += 'A'
        elif d == 'C':
            answer += 'G'
        elif d == 'G':
            answer += 'C'
    return answer


print(DNA_strand("AAAA"))
