import React from 'react';
import './HomePage.css';

const HomePage = () => {
  const blogTitle = 'My Awesome Blog';
  const blogDescription = 'A blog where I share my experiences and learnings from university and beyond.';

  const recentPosts = [
    { title: 'Post 1: My First Day at University', date: '2023-04-01' },
    { title: 'Post 2: React vs Angular: Which One to Choose?', date: '2023-04-05' },
    { title: 'Post 3: 10 Tips for Writing Clean Code', date: '2023-04-08' },
  ];

  return (
    <div className="homepage">
      <h1>{blogTitle}</h1>
      <p>{blogDescription}</p>
      <h2>Recent Posts</h2>
      <ul>
        {recentPosts.map((post, index) => (
          <li key={index}>
            {post.title} - <span>{post.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
