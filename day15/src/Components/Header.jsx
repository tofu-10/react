import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  let [path, setPath] = useState(window.location.pathname);
  console.log(window.location);
  return (
    <nav
      style={{
        height: "8vh",
        width: "100vw",
        display: "flex",
        textAlign: "center",
        justifyContent: "space-evenly",
        backgroundColor: "white",
      }}
    >
      <div style={{ fontSize: "25px", fontWeight: "bold" }}>React_Router</div>
      <div
        style={{
          display: "flex",
          width: "20vw",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          onClick={() => setPath("/")}
          className={`${path == "/" ? "text-orange-500" : "text-blue-500"}`}
          style={{ fontSize: "20px", textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => setPath("/about")}
          className={`${
            path == "/about" ? "text-orange-500" : "text-blue-500"
          }`}
          style={{ fontSize: "20px" }}
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={() => setPath("/contact")}
          className={`${
            path == "/contact" ? "text-orange-500" : "text-blue-500"
          }`}
          style={{ fontSize: "20px" }}
        >
          Contact
        </Link>
      </div>
      <button
        style={{ backgroundColor: "blue", color: "white", height: "45px" }}
      >
        Login
      </button>
    </nav>
  );
}
export default Header;
