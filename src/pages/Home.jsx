import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        width: "100%",
        backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?nature')", // Replace with my image
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay Layer */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "80%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80%",
          flexDirection: "column",
          textAlign: "center",
          color: "#fff", // Ensure text is visible on dark background
        }}
      >
        <Typography variant="h2" gutterBottom>
          Mentor Link
        </Typography>
        <Typography variant="h6">
          Connect with your mentor and schedule appointments effortlessly
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;

