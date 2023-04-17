//포스트 타이틀 및 미리보기와 날짜 관리하는 파일.
//배열을 만들어서 export 합니다. import는 home.js에서
/*id 분류는 5자리 수로 다음과 같이 하겠습니다.
1xxxx 는 일반 잡담
2lxxx 는 프로그래밍 언어		l = {0:Asm, 1:C, 2:C++, 3:Python, 4:JAVA, 5:JS+React}
3xxxx 는 보안쪽 공부 내용
*/
import { allPostTitles } from "./postTitles";

export const posts = [
	{
		id: 21001,
		title: allPostTitles.find((postTitle) => postTitle.id === 21001).title,
		content: "Dynamic Memory Alloc, Selection Sort, Structure",
		date: "2023-04-15",
		category: "DataStructure",
	},
	{
		id: 1,
		title: allPostTitles.find((postTitle) => postTitle.id === 1).title,
		content:
			"This is the content of Section 1. You can add more text, tables, or any other elements here to create a beautiful and ...",
		date: "2023-04-12",
		category: "Inform",
	},
	{
		id: 2,
		title: allPostTitles.find((postTitle) => postTitle.id === 2).title,
		content:
			"Debouncing is a technique used to limit the number of times a function is called within a specific time ...",
		date: "2023-04-13",
		category: "JavaScript",
	},
];
