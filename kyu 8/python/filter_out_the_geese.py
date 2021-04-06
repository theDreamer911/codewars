def exist(var):
    geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    if var in geese:
        return False
    else:
        return True


def goose_filter(birds):
    filtered = filter(exist, birds)
    return(list(filtered))


print(goose_filter(["Mallard", "Hook Bill", "African",
                    "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))


# # master
# geese = {"African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"}

# def goose_filter(birds):
#     return [bird for bird in birds if bird not in geese]
