import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
function AxiosPost() {

    const [post,setPost]= useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").
        then((response)=>{
            setPost(response.data);
        })
        .catch((error)=>{
            console.error("error fetching posts:", error);
        })
    },[] )
  return (
    <div>
      <h1>Axios Posts</h1>
      <ul>
        {post.map((item) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>


      <table style={{border: '1px solid #ccc'}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>userId</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody >
          {post.map((item) => (
            <tr key={item.id} style={{borderBottom: '1px solid #ccc'}}>
              <td style={{padding: '8px', border: '1px solid #ccc'}}>{item.id}</td>
              <td style={{padding: '8px', border: '1px solid #ccc'}}>{item.userId}</td>
              <td style={{padding: '8px', border: '1px solid #ccc'}}>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AxiosPost