def main():
    num = int(input())
    for i in range(1, num + 1):
        if isPrime(i):
            print(i, end=" ")


# def isPrime(num):
#     if num == 1: return False
#     for i in range(2, num):
#         if num % i == 0: return False
#     return True


def isPrime(num):
    if num == 1: return False
    for i in range(2, int(num ** 0.5 + 1)):
        if num % i == 0: return False
    return True


if __name__ == "__main__":
    main()