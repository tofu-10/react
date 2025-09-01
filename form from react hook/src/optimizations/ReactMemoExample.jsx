import React, { useState, useEffect } from "react";

const User = React.memo(({ user }) => {
  console.log(`Rendering user: ${user.name}`); // to see when the component re-renders
  return <div>User name: {user.name}</div>;
});

export const ReactMemoExample = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  const filtererdUsers = user.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>React Memo example</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {filtererdUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
