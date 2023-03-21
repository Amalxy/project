#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define STR_LEN 10

int main() {
    char str[STR_LEN+1];
    int index, len;

    // seed the random number generator
    srand(time(NULL));

    // generate a random string
    for (int i = 0; i < STR_LEN; i++) {
        str[i] = 'a' + rand() % 26;
    }
    str[STR_LEN] = '\0';

    // print the string and prompt the user for an index
    printf("Generated string: %s\n", str);
    printf("Enter an index to check (0-%d): ", STR_LEN-1);
    scanf("%d", &index);

    // check if the index is within bounds
    if (index < 0 || index >= STR_LEN) {
        printf("Invalid index.\n");
        return 1;
    }

    // check if the character at the index matches the randomly generated character
    if (str[index] == str[0]) {
        printf("Match!\n");
    } else {
        printf("No match.\n");
    }

    return 0;
}