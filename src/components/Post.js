// src/components/Post.js
import React, { useRef } from "react";
import "../styles/Post.css";

const Post = ({ title, date, subSections, children }) => {
	// children prop을 추가하세요
	const contentRefs = useRef([]);

	const handleClick = (index) => {
		contentRefs.current[index].scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="post-container">
			<div className="post-box">
				<h1 className="post-title">{title}</h1>
				<p className="post-date">{date}</p>
				{subSections && (
					<div className="table-of-contents">
						<ol>
							{subSections.map((section, index) => (
								<li
									key={index}
									onClick={() => handleClick(index)}>
									{section.title}
								</li>
							))}
						</ol>
					</div>
				)}
				<div className="post-content">
					{subSections &&
						subSections.map((section, index) => (
							<div
								ref={(el) => (contentRefs.current[index] = el)}
								key={index}>
								<h2>{section.title}</h2>
								{section.content}
							</div>
						))}
				</div>
				{children} {/* 이 줄을 추가하여 children을 렌더링하세요 */}
			</div>
		</div>
	);
};

export default Post;
