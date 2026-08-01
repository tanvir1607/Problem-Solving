#include <stdio.h>

int main() 
{
    int num;
    scanf("%d", &num);

    if (num == 1) printf("-1\n");
    else
    {
        for (int i = 2; i <= num; i += 2)
            printf("%d\n", i);
    }

    return 0;
}