size = int(input())
numbers = list(map(int, input().split()))

even = odd = pos = neg = 0
for num in numbers:
    even += num % 2 == 0
    odd += num % 2
    pos += num > 0
    neg += num < 0

print(f"Even: {even}")
print(f"Odd: {odd}")
print(f"Positive: {pos}")
print(f"Negative: {neg}")