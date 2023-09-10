import React, { useEffect, useState } from 'react';
// import PostDetail from './PostDetail';

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then((response) => response.json())
      .then(setPosts);
  }, []);

  function getComments(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then(setComments);
  }

  return (
    <div className="App">
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p onClick={() => getComments(post.id)}>{post.body}</p>
          {
            comments.map((comment) => (
              post.id === comment.postId && 
              <div key={comment.id} style={{border: '1px solid red'}}>
                <p>{comment.body}</p>
              </div>
            ))
          }
        </div>
      ))}
    </div>
  );
}

export default App;
