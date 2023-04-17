import React, { useEffect, useState } from "react";
import "./myskills.css";

const skills = [
	{
		skill: "JavaScript",
		percentage: 30,
		description: "JavaScript로 이 블로그를 만들었어용",
		modal_desc: "JavaScript 프로젝트",
	},
	{
		skill: "React",
		percentage: 25,
		description: "이 블로그는 리액트로 만들어짐 ㄷㄷㄷ",
		modal_desc: "React 사용 프로젝트",
	},
	{
		skill: "Python",
		percentage: 60,
		description: "파이썬도 배웠고, Ps 주력을 C++가 아닌 Py로 합니다",
		modal_desc: "Python 프로젝트는 Baekjoon을 올리겠습니당",
	},
	{
		skill: "JAVA",
		percentage: 25,
		description: "자바 프로그래밍 실습",
		modal_desc: "JAVA프로젝트도 Github에 올리겠습니다",
	},
];

const MySkills = () => {
	return (
		<div className="skills-container">
			<h1>My Skills</h1>
			<h2>Click name of skills to read more</h2>
			<div className="skills-grid">
				{skills.map((skill, index) => (
					<SkillProgress
						key={index}
						skill={skill.skill}
						targetPercentage={skill.percentage}
						description={skill.description}
						modal_desc={skill.modal_desc}
					/>
				))}
			</div>
		</div>
	);
};

const SkillProgress = ({
	skill,
	targetPercentage,
	description,
	modal_desc,
}) => {
	const [percentage, setPercentage] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (percentage < targetPercentage) {
				setPercentage(percentage + 1);
			}
		}, 5);
		return () => {
			clearTimeout(timer);
		};
	}, [percentage, targetPercentage]);

	const radius = 40;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset = circumference - (percentage / 100) * circumference;

	const skillClass = skill.toLowerCase().replace(/[^a-z]/g, "-");

	return (
		<div className={`skill-progress ${skillClass}`}>
			<div className="skill-info">
				<svg width="100" height="100" viewBox="0 0 100 100">
					<circle
						cx="50"
						cy="50"
						r={radius}
						strokeWidth="10"
						stroke="#eee"
						fill="none"
						strokeOpacity="0.2"
					/>
					<circle
						className="progress-ring"
						cx="50"
						cy="50"
						r={radius}
						strokeWidth="10"
						strokeLinecap="square"
						fill="none"
						strokeDasharray={circumference}
						strokeDashoffset={strokeDashoffset}
						transform="rotate(-90 50 50)"
					/>
				</svg>
				<div className="skill-text">
					<h3
						className="skill-name"
						onClick={() => setModalOpen(true)}>
						{skill}
					</h3>
					<p className="skill-desc">{description}</p>
				</div>
			</div>
			{modalOpen && (
				<div className="modal" onClick={() => setModalOpen(false)}>
					<div
						className="modal-content"
						onClick={(e) => e.stopPropagation()}>
						<h3>{skill}</h3>
						<p>{modal_desc}</p>
						<button
							className="close-button"
							onClick={() => setModalOpen(false)}>
							&times;
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default MySkills;
