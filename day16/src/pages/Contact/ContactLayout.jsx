import React from "react";
import { Outlet } from "react-router-dom";
function ContactLayout() {
  return (
    <div>
      <h1>Contact Layout</h1>      
      <Outlet />
    </div>
  );
}

export default ContactLayout;
