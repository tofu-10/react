import React, { Suspense, useState } from "react";
import Spinner from "../components/Spinner";
const Profile = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("../components/Profile"));
    }, 1500); // 1.5 seconds delay
  });
});

function LazyLoadingExample() {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div>
      <h1>LAzy Loading Example</h1>
      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide" : "Show"} Profile
      </button>
      {showProfile && (
        <Suspense
          fallback={   <Spinner/>       }
        >
          <Profile />
        </Suspense>
      )}
    </div>
  );
}

export default LazyLoadingExample;
