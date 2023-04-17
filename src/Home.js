import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./App.css";

import profileImage from "./imgs/profile.jpg";
import githubIcon from "./imgs/github.png";
import instagramIcon from "./imgs/instagram.png";

import { posts } from "./postData";

const Home = () => {
	const profileCardRef = useRef(null);
	const [filteredPosts, setFilteredPosts] = useState(posts);

	useEffect(() => {
		const target = profileCardRef.current;
		const initialTop = 10; // 상단 고정 위치

		const onScroll = () => {
			target.style.transform = `translateY(${initialTop}px)`;
		};

		onScroll(); // 초기 렌더링시에도 위치 설정
		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	const categories = [...new Set(posts.map((post) => post.category))];
	const [selectedCategory, setSelectedCategory] = useState("All");

	const filterPosts = (category) => {
		if (category === "All") {
			setFilteredPosts(posts);
		} else {
			setFilteredPosts(
				posts.filter((post) => post.category === category)
			);
		}
		setSelectedCategory(category); // 선택된 카테고리 업데이트
	};

	return (
		<div className="App">
			<div className="container">
				<div className="main">
					<h1>H4RU's Dev Blog</h1>
					<h3>Just space talking anything I think</h3>

					<div className="categories">
						<button
							className={`category-btn ${
								selectedCategory === "All" ? "category-All" : ""
							}`}
							onClick={() => filterPosts("All")}>
							All
						</button>
						{categories.map((category, index) => (
							<button
								key={index}
								className={`category-btn ${
									selectedCategory === category
										? `category-${category}`
										: ""
								}`}
								onClick={() => filterPosts(category)}>
								{category}
							</button>
						))}
					</div>

					{filteredPosts.map((post) => (
						<div key={post.id} className="post-card">
							<h2>{post.title}</h2>
							<p className="post-card-content">{post.content}</p>
							<div className="post-footer">
								<div className="post-date">{post.date}</div>
								<Link to={`/post/${post.id}`}>Read More</Link>
							</div>
						</div>
					))}
				</div>
				<Link to="/skills" className="sidebar">
					<div ref={profileCardRef} className="profile-card">
						<img
							className="profile-image"
							src={profileImage}
							alt="Profile"
						/>
						<h2>H4RU</h2>
						<p>
							Hi, I'm H4RU, a software engineer and blogger. This
							is my personal blog where I share my thoughts on
							various topics.
						</p>
						<div className="social-icons">
							<a
								href="https://github.com/H4RURAKA/"
								target="_blank"
								rel="noopener noreferrer">
								<img
									className="icon"
									src={githubIcon}
									alt="GitHub"
								/>
							</a>
							<a
								href="https://www.instagram.com/haruraka/"
								target="_blank"
								rel="noopener noreferrer">
								<img
									className="icon"
									src={instagramIcon}
									alt="Instagram"
								/>
							</a>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Home;
