test = int(input())
for _ in range(test):
    num = int(input())
    ans = 1
    for i in range(1, num + 1): ans *= i
    print(ans)  