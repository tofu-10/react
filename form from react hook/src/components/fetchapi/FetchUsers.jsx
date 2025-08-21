import React from "react";
import { useState, useEffect } from "react";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error("error fetching users:", error);
      });
  }, []);
  return (
    <>
      <div>
        <h1>Fetch Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              My name is {user.name}, my email is {user.email} and I live in{" "}
              {user.address.street}, Phone no: {user.phone}, and Company:{" "}
              {user.company.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FetchUsers;
