#include <stdio.h>

int main() 
{
    int password = 1999;
    while (1)
    {
        int num;
        scanf("%d", &num);
        if (num == password)
        {
            printf("Correct\n");
            break;
        }
        else printf("Wrong\n");
    }

    return 0;
}