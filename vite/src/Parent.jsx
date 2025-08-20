import React, { useEffect, useState } from "react";

const Parent = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error fetching data:', error));
  }, [count]);

  return <div></div>;
};

export default Parent;
