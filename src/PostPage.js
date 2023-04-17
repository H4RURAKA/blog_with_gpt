import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
	const { id } = useParams();
	const PostComponent = lazy(() => {
		return import(`./post/Post${id}`).catch((error) => {
			if (error.message.includes("Cannot find module")) {
				return import("./NotFound");
			}
			throw error;
		});
	});

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<PostComponent />
		</Suspense>
	);
};

export default PostPage;
