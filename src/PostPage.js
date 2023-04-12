// src/PostPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { postId } = useParams();

  const post = {
    id: postId,
    title: `Example Post ${postId}`,
    content: `This is an example blog post ${postId}.`
  };

  return (
    <div>
      <h1>Boom!</h1>
      <p>Actually, there is no post yet!</p>
    </div>
  );
};

export default PostPage;
