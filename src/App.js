// 라우터 별로 홈, 포스트, 404를 출력하게 해주는 js이다. index에서 그려줌

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import PostPage from "./PostPage";
import NotFound from "./NotFound"; // Add this line
import MySkills from "./myskills";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/post/:id" element={<PostPage />} />
				<Route path="/skills" element={<MySkills />} />
				<Route path="*" element={<NotFound />} /> {/* Add this line */}
			</Routes>
		</div>
	);
};

export default App;
