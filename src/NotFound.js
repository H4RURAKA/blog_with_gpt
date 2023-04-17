import React from "react";
import "./NotFound.css"; // 추가한 CSS 파일 불러오기

const NotFound = () => {
	return (
		<div className="notfound-container">
			<div className="notfound-emoji">😢</div>
			<h1 className="notfound-title">404 - Not Found</h1>
			<p className="notfound-text">
				The page you are looking for does not exist.
			</p>
		</div>
	);
};

export default NotFound;
