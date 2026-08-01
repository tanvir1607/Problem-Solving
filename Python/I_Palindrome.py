def main():
    num = int(input())
    reversed_num = reverseNum(num)
    print(reversed_num)
    print("YES" if num == reversed_num else "NO")


def reverseNum(num):
    ans = 0
    while num:
        last_digit = num % 10
        ans = ans * 10 + last_digit
        num //= 10
    return ans


if __name__ == "__main__":
    main()