import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Navbar from './Navbar';

const qs = require('qs');
const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(async () => {
    console.log('id is equal to', id);
    let response = await axios.post('http://localhost:8000/api/post/post', {
      data: id,
    });

    if (response) {
      setPost(response.data);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="post-Details">
        <h1>{post.title}</h1>

        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default PostDetails;
