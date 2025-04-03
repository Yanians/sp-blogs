import React, { useState, useEffect } from "react";
import { Button, TextField, Box } from "@mui/material";

const  OnClickHandler: React.FC = () => {
  const [bgColor, setBgColor] = useState<string | false>(false);
  const [showForm, setShowForm] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    console.log("Hydration complete");
    setHydrated(true);
  }, []);

  // const handleBgClick=()=>{
  //    setBgColor((prev)=> (!prev  ? "#ffeb3b":"#ffffff"));
  // }

  // ✅ Optimized click handlers using `useCallback`
  const handleBackgroundClick = React.useCallback(() => {
    if (!hydrated) return;
    console.log("Background clicked!"); // Debugging log
    setBgColor((prevColor) => (prevColor === "#ffffff" ? "#ffeb3b" : "#ffffff"));
  }, [hydrated]);

  const handleShowFormClick = React.useCallback(() => {
    if (!hydrated) return;
    console.log("Show form clicked!"); // Debugging log
    setShowForm(true);
  }, [hydrated]);

  return (
    <Box sx={{ p: 3 }}>
      <div
        onClick={handleBackgroundClick}
        style={{
          backgroundColor:bgColor || "",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          border: "1px solid #000",
        }}
      >
        Click me to change background
      </div>

      <div
        onClick={handleShowFormClick}
        style={{
          marginTop: "20px",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          border: "1px solid #000",
        }}
      >
        Click me to show form
      </div>

      {showForm && (
        <Box sx={{ mt: 3 }}>
          <TextField label="Name" fullWidth sx={{ mb: 2 }} />
          <TextField label="Email" fullWidth sx={{ mb: 2 }} />
          <TextField label="Password" type="password" fullWidth sx={{ mb: 2 }} />
          <Button variant="contained" color="primary">Submit</Button>
        </Box>
      )}
    </Box>
  );
};

export default OnClickHandler;