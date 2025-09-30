import React, { useState, useEffect } from "react";
import axios from "axios";

const Quote = ({ mood }) => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  console.log(mood);

  useEffect(() => {
    if (!mood) return; // Don't fetch if no mood

    setLoading(true); // Start loading

    axios
      .get(`https://api.quotable.io/random?tags=${mood}`) // Fixed: "tags" not "toags"
      .then((response) => {
        setQuote(response.data.content);
        setLoading(false); // Stop loading on success
      })
      .catch((error) => {
        console.error("error fetching posts:", error);
        setQuote("Stay positive and keep going! 🌟"); // Fallback quote
        setLoading(false); // Stop loading on error
      });
  }, [mood]); // Added mood dependency

  // Show loading state
  if (loading) {
    return (
      <div
        className="glass"
        style={{
          padding: "2rem",
          margin: "2rem",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💭</div>
        <h3>Finding the perfect quote for your {mood?.name || mood} mood...</h3>
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "3px solid rgba(255,255,255,0.3)",
            borderTop: "3px solid #fff",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "1rem auto",
          }}
        ></div>
      </div>
    );
  }

  return (
    <div
      className="glass"
      style={{
        padding: "2rem",
        margin: "2rem",
        borderRadius: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          background: "linear-gradient(45deg, #fff, #ccc)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        💫 Quote For You:
      </h1>
      <p
        style={{
          fontSize: "1.3rem",
          fontStyle: "italic",
          textAlign: "center",
          lineHeight: "1.8",
          fontWeight: "300",
        }}
      >
        "{quote}"
      </p>
      <div
        style={{
          textAlign: "center",
          marginTop: "1.5rem",
          fontSize: "0.9rem",
          opacity: 0.7,
        }}
      >
        Perfect for your {mood?.name || mood} mood ✨
      </div>
    </div>
  );
};

export default Quote;
