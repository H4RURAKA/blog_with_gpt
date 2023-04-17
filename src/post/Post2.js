import React from "react";
import Post from "../components/Post";
import BackToHomeButton from "../components/BackToHomeButton";
import CodeBlock from "../components/CodeBlock";
import Table from "../components/Table";
import sampleImage from "../imgs/sample-image.jpg";

export const post2title = "JavaScript Tips and Tricks";

const Post2 = () => {
	const subSections = [
		{
			title: "Debouncing",
			content: (
				<>
					<p>
						Debouncing is a technique used to limit the number of
						times a function is called within a specific time frame.
						It is especially useful when handling events like window
						resizing or input change.
					</p>
					<CodeBlock
						language="JavaScript"
						code={`function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}`}
					/>
				</>
			),
		},
		{
			title: "JavaScript Performance Tips",
			content: (
				<>
					<p>
						Here are some performance tips for writing efficient
						JavaScript code:
					</p>
					<Table
						headers={["Tip", "Description"]}
						rows={[
							[
								"Avoid using global variables",
								"Global variables can cause conflicts and make the code harder to maintain.",
							],
							[
								"Use '===' instead of '=='",
								"The '===' operator checks both value and type, whereas '==' only checks the value.",
							],
							[
								"Minify and compress your code",
								"Minified and compressed code loads faster and takes up less bandwidth.",
							],
						]}
					/>
				</>
			),
		},
		{
			title: "Asynchronous JavaScript",
			content: (
				<>
					<p>
						Asynchronous programming allows you to perform tasks
						concurrently, leading to better performance and
						responsiveness. JavaScript provides several ways to
						handle asynchronous tasks, such as callbacks, promises,
						and async/await.
					</p>
					<img src={sampleImage} alt="Asynchronous JavaScript" />
				</>
			),
		},
	];

	return (
		<Post
			title={post2title}
			date="April 13, 2023"
			subSections={subSections}>
			<BackToHomeButton />
		</Post>
	);
};

export default Post2;
