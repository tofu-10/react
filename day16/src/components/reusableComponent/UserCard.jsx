import React from 'react'
import "./UserCard.css"
export const UserCard = ({name,age,email}) => {
  return (
    <div className="user-card">
        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
    </div>
  )
}
