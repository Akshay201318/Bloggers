import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  

  useEffect(async () => {
    let response = await axios.get('http://localhost:8000/api/post/posts');

    if (response) {
      setPosts(response.data);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="home">
        <h1> Uefa Nations Blog</h1>
        <div className="author">by Akshay Panchal</div>

        {posts.map((post) => {
          let id = post._id;
          let link = '/post/' + id;
          return (
            <div className="post">
              <Link to={link}>
                <h3>{post.title}</h3>
              </Link>

              <p>{post.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
