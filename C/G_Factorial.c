#include <stdio.h>

int main() 
{
    int test;
    scanf("%d", &test);
    while (test--)
    {
        int num;
        scanf("%d", &num);
        long long ans = 1;
        for (int i = 1; i <= num; i++) ans *= i;
        printf("%lld\n", ans);
    }

    return 0;
}