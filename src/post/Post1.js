import React from "react";
import Post from "../components/Post";
import BackToHomeButton from "../components/BackToHomeButton";
import CodeBlock from "../components/CodeBlock";
import Table from "../components/Table";

export const post1title = "Post 1 Title";

const Post1 = () => {
	const subSections = [
		{
			title: "Section 1",
			content: (
				<>
					<p>
						This is the content of Section 1. You can add more text,
						tables, or any other elements here to create a beautiful
						and engaging post.
					</p>
					<Table
						headers={["Header 1", "Header 2", "Header 3"]}
						rows={[
							["Row 1, Col 1", "Row 1, Col 2", "Row 1, Col 3"],
							["Row 2, Col 1", "Row 2, Col 2", "Row 2, Col 3"],
							["Row 3, Col 1", "Row 3, Col 2", "Row 3, Col 3"],
						]}
					/>
					<p>Section 1's Second Paragraph is here.</p>
					{/* Add more elements here */}
				</>
			),
		},
		{
			title: "Section 2",
			content: (
				<>
					<p>
						This is the content of Section 2. You can add more text,
						tables, or any other elements here to create a beautiful
						and engaging post.
					</p>
					{/* Add table or any other elements here */}
					<CodeBlock
						language="C (programming language)"
						code={`#include <stdio.h>

#define MAX_TERMS 101
#define MAX_COL 10

typedef struct {
    int col; 
    int row; 
    int value;
} term;

void fasttranspose(term a[], term b[]) {
    int rowTerms[MAX_COL], startPos[MAX_COL];
    int i, j, numCol = a[0].col, numTerms = a[0].value;

    b[0].row = numCol;
    b[0].col = a[0].row;
    b[0].value = numTerms;

    if (numTerms > 0) {
        for (i = 0; i < numCol; i++) {
            rowTerms[i] = 0;
        }

for (int i = 0; i < 10; i++){

        for (i = 1; i <= numTerms; i++) {
            rowTerms[a[i].col]+=1;
        }

        startPos[0] = 1;

        for (i = 1; i < numCol; i++) {
            startPos[i] = startPos[i-1] + rowTerms[i-1];
        }

        for (i = 1; i <= numTerms; i++) {
            j = startPos[a[i].col];
            startPos[a[i].col] ++;
            b[j].row = a[i].col;
            b[j].col = a[i].row;
            b[j].value = a[i].value;
        }
    }
}

int main(int argc, char *argv[]) {
    term a[MAX_TERMS], b[MAX_TERMS];

    fasttranspose(a, b);
}`}
					/>
				</>
			),
		},
		{
			title: "Section 3",
			content: (
				<>
					<p>
						This is the content of Section 3. You can add more text,
						tables, or any other elements here to create a beautiful
						and engaging post.
					</p>
					{/* Add table or any other elements here */}
				</>
			),
		},
	];

	return (
		<Post
			title={post1title}
			date="April 12, 2023"
			subSections={subSections}>
			<BackToHomeButton />
		</Post>
	);
};

export default Post1;
