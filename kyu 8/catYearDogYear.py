def humanYearsCatYearsDogYears(humanYear):
    catYear = 0
    dogYear = 0

    if humanYear == 1:
        catYear = 15
        dogYear = 15
    elif humanYear == 2:
        catYear = 24
        dogYear = 24
    elif humanYear >= 3:
        catYear = 4 * (humanYear - 2) + 24
        dogYear = 5 * (humanYear - 2) + 24

    return [humanYear, catYear, dogYear]


def human_cat_dog_year(x):
    cat_year = 15 + (9 * (x > 1)) + (4*(x-2) * (x > 2))
    dog_year = 15 + (9 * (x > 1)) + (5*(x-2) * (x > 2))
    return [x, cat_year, dog_year]


print(human_cat_dog_year(10))
