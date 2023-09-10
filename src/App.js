import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=10&select=firstName,lastName')
      .then((response) => response.json())
      .then(({users}) => setUsers(users));
  }, []);

  function getPosts(id) {
    fetch(`https://dummyjson.com/posts/user/${id}`)
      .then((response) => response.json())
      .then(({posts}) => setPosts(posts));
  }

  return (
    <div className="App">
      {users.map((user) => (
        <div key={user.id}>
          <h2 onClick={() => getPosts(user.id)}>{user.firstName} {user.lastName}</h2>
          {
            posts.map((post) => (
              user.id === post.userId && 
              <div key={post.id} style={{border: '1px solid red'}}>
                <p>{post.body}</p>
              </div>
            ))
          }
        </div>
      ))}
    </div>
  );
}

export default App;
