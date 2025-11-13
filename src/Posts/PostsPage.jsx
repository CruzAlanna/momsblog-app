import { PostsIndex } from './PostsIndex.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function PostsPage() {
  const [posts, setPosts] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <PostsIndex posts_prop={posts} />
    </main>
  );
};