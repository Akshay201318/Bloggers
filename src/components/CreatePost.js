import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import Navbar from './Navbar';

const CreatePost = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [titleErr, setTitleErr] = useState('');
  const [subtitleErr, setSubtitleErr] = useState('');
  const [contentErr, setContentErr] = useState('');

  const isValid = () => {
    let flag = true;
    if (title.length == 0) {
      setTitleErr('title should not be empty!');
      flag = false;
    } else {
      setTitleErr('');
    }

    if (subtitle.length == 0) {
      setSubtitleErr('subtitle should not be empty!');
      flag = false;
    } else {
      setSubtitleErr('');
    }

    if (content.length == 0) {
      setContentErr('content should not be empty!');
      flag = false;
    } else {
      setContentErr('');
    }

    return flag;
  };

  const onSubmit = async () => {
    const valid = isValid();

    if (valid) {
      const post = {
        title,
        subtitle,
        content,
      };
      let response = await axios.post(
        'http://localhost:8000/api/post/create-post',
        {
          data: post,
        }
      );
      if (response.status == 201) {
        alert('Post created successfully!');
        history.push('/home');
        setTitleErr('');
        setSubtitleErr('');
        setContentErr('');
      } else {
        alert('Something is wrong!.Post not created!');
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="create-post">
        <h1>Create Post</h1>
        <div className="form-field">
          <label>Post Title</label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title here...."
          />
        </div>
        <div style={{ color: 'red', marginLeft: '150px' }}>{titleErr}</div>

        <div className="form-field">
          <label>Post Sub-title</label>
          <input
            name="subtitle"
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Enter subtitle here...."
          />
        </div>
        <div style={{ color: 'red', marginLeft: '150px' }}>{subtitleErr}</div>

        <div className="form-field">
          <label>Content</label>
          <textarea
            name="content"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's in your mind type here...."
          />
        </div>
        <div style={{ color: 'red', marginLeft: '150px' }}>{contentErr}</div>

        <button className="create-post-btn" onClick={onSubmit}>
          Create Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
