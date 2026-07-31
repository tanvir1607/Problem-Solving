size = int(input())
numbers = list(map(int, input().split()))

mx = numbers[0]
for num in numbers:
    if num > mx: mx = num

print(mx)