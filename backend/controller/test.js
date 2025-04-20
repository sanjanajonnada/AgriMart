const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Test route
router.get("/test", (req, res) => {
  res.json({ 
    message: "Backend is working!",
    status: "success",
    timestamp: new Date()
  });
});

// DB test route
router.get("/test-db", (req, res) => {
  try {
    const dbStatus = mongoose.connection.readyState;
    res.json({
      message: "Database connection test",
      status: dbStatus === 1 ? "connected" : "not connected",
      readyState: dbStatus,
      dbUrl: process.env.DB_URL ? "DB_URL is set" : "DB_URL is not set",
      timestamp: new Date()
    });
  } catch (error) {
    res.status(500).json({
      message: "Database test failed",
      error: error.message
    });
  }
});

// Cloudinary test route
router.get("/test-cloudinary", (req, res) => {
  try {
    res.json({
      message: "Cloudinary configuration test",
      status: "configured",
      config: {
        hasName: !!process.env.CLOUDINARY_NAME,
        hasApiKey: !!process.env.CLOUDINARY_API_KEY,
        hasSecret: !!process.env.CLOUDINARY_API_SECRET,
        actualName: process.env.CLOUDINARY_NAME
      },
      timestamp: new Date()
    });
  } catch (error) {
    res.status(500).json({
      message: "Cloudinary test failed",
      error: error.message
    });
  }
});

module.exports = router; 