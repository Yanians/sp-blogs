import React, { useEffect } from "react";

const UniversalButton: React.FC = () => {
  useEffect(() => {
    const btn = document.getElementById("universal-btn");

    const handleClick = () => {
      console.log("✅ Manual DOM Button Clicked");
      alert("The button is alive!");
    };

    if (btn) {
      btn.addEventListener("click", handleClick);
    } else {
      console.warn("❌ Button element not found!");
    }

    return () => {
      if (btn) {
        btn.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <button id="universal-btn" style={{ fontSize: "20px", padding: "10px" }}>
      Click Me
    </button>
  );
};

export default UniversalButton;
