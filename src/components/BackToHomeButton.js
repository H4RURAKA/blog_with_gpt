// src/BackToHomeButton.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/BackToHomeButton.css"; // CSS 파일 import

const BackToHomeButton = () => (
	<Link to="/" className="back-to-home-button">
		<i className="arrow-left" />
	</Link>
);

export default BackToHomeButton;
