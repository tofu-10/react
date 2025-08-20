import React from "react";
import { Link } from "react-router-dom";
export default function Post() {
  const posts = [
    { id: 1, title: "This is post 1" },
    { id: 2, title: "This is post 2" },
  ];
  return (
    <div>
      <ul>
        {posts.map((post) => 
          <li key={post.id}>
            <Link to={`${post.id}`}>{post.title}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
