import React, { useEffect, useState } from "react";

const Parent = () => {
  let [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))

      // .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  if (posts === null) return <div>Loading.........</div>;

  return (
    <div>
      <h1>posts list</h1>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Parent;
