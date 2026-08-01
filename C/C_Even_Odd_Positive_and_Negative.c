#include <stdio.h>

int main() 
{
    int size;
    scanf("%d", &size);
    int arr[size];
    for (int i = 0;  i < size; i++)
        scanf("%d", &arr[i]);

    int even = 0, odd = 0, pos = 0, neg = 0;
    for (int i = 0; i < size; i++)
    {
        if (arr[i] % 2) odd++;
        else even++;

        if (arr[i] > 0) pos++;
        else if (arr[i] < 0) neg++;
    }
    printf("Even: %d\n", even);
    printf("Odd: %d\n", odd);
    printf("Positive: %d\n", pos);
    printf("Negative: %d\n", neg);

    return 0;
}