// src/Post.js
import React from 'react';

const Post = ({ title, content }) => {
  return (
    <div className="post">
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
    </div>
  );
};

export default Post;
