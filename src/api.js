import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3001/api/');

      setData(result.data.data.todoList);
    };

    fetchData();
  }, []);
  console.log('data');

  return data;
  // (
  //   <div className='app'>
  //     <h2>All Posts 📫</h2>
  //     <ul>
  //       {data.map((post, index) => {
  //         console.log(post);
  //         return (
  //           <li key={post._id}>
  //             {post.name} Is Completed: {post.completed.toString()}
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );
};
