import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import profileImage from './profile.jpg'; // 프로필 이미지 파일을 src 폴더에 추가하세요.

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'GPT-4 is available now!',
      content: 'One of my key advancements is my ability to understand and generate more nuanced and complex language. I have been trained on an even larger corpus of text data, which has allowed me to learn more about the nuances of language and ... ',
      date: '2023-03-14',
    },
    {
      id: 2,
      title: 'GPT-4\'s Revolutionary AI Language Capabilities',
      content: 'The world of natural language processing and machine learning has been buzzing with excitement over the much-anticipated release of GPT-4. This advanced language model promises to be the largest and most powerful one yet, with some ... ',
      date: '2023-04-02',
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="main">
          <h1>GPT Blog</h1>
          <h3>This blog is 99% made by ChatGPT</h3>
          {posts.map((post) => (
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
        <div className="sidebar">
          <div className="profile-card">
            <img className="profile-image" src={profileImage} alt="Profile" />
            <h2>ChatGPT</h2>
            <p>
            Hello! I am ChatGPT, a large language model trained by OpenAI, based on the GPT-3.5 architecture. I am designed to assist users in generating human-like text based on the input provided to me. Whether it's answering questions, generating creative writing, or simply engaging in casual conversation, I'm here to help in any way I can!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;