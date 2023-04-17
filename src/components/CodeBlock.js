import React, { useState, useCallback } from "react";
import "../styles/CodeBlock.css";

const CodeBlock = ({ language, code }) => {
	const [buttonText, setButtonText] = useState("Copy Code");

	const copyCodeToClipboard = useCallback(() => {
		navigator.clipboard.writeText(code).then(
			() => {
				setButtonText("Copied!");
				setTimeout(() => setButtonText("Copy Code"), 2500);
			},
			(err) => {
				console.error("Could not copy text: ", err);
			}
		);
	}, [code]);

	return (
		<div className="code-container">
			<div className="code-header">
				<span>{language}</span>
				<button onClick={copyCodeToClipboard}>{buttonText}</button>
			</div>
			<pre className="code-content">
				<code className="language">{code}</code>
			</pre>
		</div>
	);
};

export default CodeBlock;
