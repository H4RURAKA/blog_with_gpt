//포스트 타이틀 관리하는 파일.
//배열을 만들어서 export 합니다. import는 postData.js에서

import { post1title } from "./post/Post1";
import { post2title } from "./post/Post2";
import { post21001title } from "./post/Post21001";

export const allPostTitles = [
	{ id: 1, title: post1title },
	{ id: 2, title: post2title },
	{ id: 21001, title: post21001title },
];
