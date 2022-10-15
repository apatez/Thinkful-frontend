import React, { useState } from 'react';

function PostDetail({ posts }) {
  const [comments, setComments] = useState([]);
  const [id, setId] = useState(null);

  function getComments(id) {
    setId(id);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then(setComments);
  }

  function DisplayComments() {
    return comments.map((comment) => (
      <div key={comment.id}>
        <p>{comment.body}</p>
      </div>
    ));
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p onClick={() => getComments(post.id)}>{post.body}</p>
          {id === post.id && <DisplayComments />}
        </div>
      ))}
    </div>
  );
}

export default PostDetail;
