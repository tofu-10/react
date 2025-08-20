import React from "react";
import { Outlet } from "react-router-dom";

export const Bloglayout = () => {
  return (
    <div>
      <h1>Blog layout</h1>

      <Outlet />
    </div>
  );
};

export default Bloglayout;
