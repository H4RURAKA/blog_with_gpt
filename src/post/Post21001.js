import React from "react";
import Post from "../components/Post";
import BackToHomeButton from "../components/BackToHomeButton";
import CodeBlock from "../components/CodeBlock";
import Table from "../components/Table";

export const post21001title = "Data Structures - C Codes";

const Post21001 = () => {
	const subSections = [
		{
			title: "Dinamic Memory Allocation",
			content: (
				<>
					<p>What pointer does.</p>
					<Table
						headers={["Operator", "Description", "example"]}
						rows={[
							[
								"&",
								"the addr operator",
								'&a returns addr of "a"',
							],
							[
								"*",
								"dereferencing operator",
								'*a returns exact value in "a"',
							],
						]}
					/>
					<p>
						Example C code for make 2D dynamic array is below here.
					</p>
					<CodeBlock
						language="C (programming language)"
						code={`#include <stdio.h>

int main(void){
    int row;
    int col;

    // scan two integers and put them in row and col each

    int **arr;
    arr = ( int* ) malloc ( sizeof( int* ) * row );
    for ( int i = 0; i < row; i++ ){
        arr[i] = ( int* ) malloc ( sizeof( int* ) * col);
    }

    // some codes and func using 2D array

    for ( int i = 0; i < row; i++ ){
        free( arr[i] );
    }
    free( arr );

    return 0;
}`}
					/>
				</>
			),
		},
		{
			title: "Selection Sort",
			content: (
				<>
					<p>
						Selection Sort is one way to sort variables in array.
						Its time complexity is O(n^2). How does it work?
					</p>
					<p>
						First, It loops whole array variables and find the
						smallest one. and change with arr[0]. Next, It loops
						arr[1] to arr[n] and find smallest one of them. and,
						change with arr[1]. loop and loop again. and finally, it
						would sorted.
					</p>
					<p>The C code is below.</p>
					<CodeBlock
						language="C (programming language)"
						code={`#include <stdio.h>
#include <math.h>
#define MAX_SIZE 101
#define SWAP(x, y, t) ((t)=(x), (x)=(y), (y)=(t))

void sort(int [], int);
void main(void){
    int i, n;
    int list[MAX_SIZE];

    // scan integer to n

    for (i = 0; i < n; i++) { list[i] = rand()%1000; }
    sort(list, n);
    for (i = 0; i < n; i++) { printf("%d ", list[i]); }
    return 0;
}

void sort(int list[], int n){
    int i, j, min, temp;
    for (i = 0; i < n-1; i++){
        min = i;
        for (j = i+1; j < n; j++){
            if (list[j] < list[min]){
                min = j;
            }
        }
        SWAP(list[i], list[min], temp);
    }
}`}
					/>
				</>
			),
		},
		{
			title: "Structure",
			content: (
				<>
					<p>
						Sturct is something like \(in easy way:\) make some new
						data type include some datas in there.
					</p>
					<p>
						It sounds weird, I know. But, if you see some example
						code below, you could understand well, I hope.
					</p>
					<CodeBlock
						language="C (programming language)"
						code={`#include <stdio.h>
typedef struct {
    int month;
    int day;
    int year;
} date;

int main(void){

    date my_birthday;

    my_birthday.month = 6;
    my_birthday.day = 9;
    my_birthday.year = 2001;

    return 0;
}`}
					/>
					<p>
						if I print my_birthday.month, day, year : it will print
						6, 9, 2001 well. Also I can make array of dates like :
					</p>
					<p>date friends_birthday[10];</p>
				</>
			),
		},
	];

	return (
		<Post
			title={post21001title}
			date="April 15, 2023"
			subSections={subSections}>
			<BackToHomeButton />
		</Post>
	);
};

export default Post21001;
