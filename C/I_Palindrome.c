#include <stdio.h>


int reverseNum(int num)
{
    int ans = 0;
    while (num)
    {
        int lastDigit = num % 10;
        ans = ans * 10 + lastDigit;
        num /= 10;
    }
    return ans;
}


int main() 
{
    int num;
    scanf("%d", &num);

    int reversedNum = reverseNum(num);
    printf("%d\n", reversedNum);
    if (num == reversedNum) printf("YES\n");
    else printf("NO\n");

    return 0;
}