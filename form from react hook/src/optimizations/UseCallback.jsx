//memoize the function
//frequently used function lai rerender bhairakhna bata prevent garxa so that app will be fast.

import React, { useState,useCallback } from "react";

const UserButton = React.memo(({ onClick, name }) => {
  console.log(`Rendering button: ${name}`);
  return <button onClick={onClick}>{name}</button>;
});
function UseCallback() {
  const [users] = useState(["User1", "User2", "User3"]);
  const handleCLick = useCallback((name) => {
    alert(`Hello, ${name}`);
  }, []);

  return (
    <>
      <div>
        <h1>Use Callback Example</h1>
        {users.map((user) => (
          <UserButton
            key={user}
            name={user}
            onClick={() => handleCLick(user)}
          />
        ))}
      </div>
    </>
  );
}

export default UseCallback;
