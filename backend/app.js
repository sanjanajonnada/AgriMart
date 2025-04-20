const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary");

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
  exposedHeaders: ["set-cookie"]
}));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// import routes
const test = require("./controller/test");
const user = require("./controller/user");
const shop = require("./controller/shop");
const product = require("./controller/product");
const event = require("./controller/event");
const coupon = require("./controller/coupounCode");
const payment = require("./controller/payment");
const order = require("./controller/order");
const conversation = require("./controller/conversation");
const message = require("./controller/message");
const withdraw = require("./controller/withdraw");

// API Routes
app.use("/api/v2", test);
app.use("/api/v2/user", user);
app.use("/api/v2/shop", shop);
app.use("/api/v2/product", product);
app.use("/api/v2/event", event);
app.use("/api/v2/coupon", coupon);
app.use("/api/v2/payment", payment);
app.use("/api/v2/order", order);
app.use("/api/v2/conversation", conversation);
app.use("/api/v2/message", message);
app.use("/api/v2/withdraw", withdraw);

// Test routes - Move these BEFORE the catch-all route
app.get("/api/v2/test", (req, res) => {
  res.json({ 
    message: "Backend is working!",
    status: "success",
    timestamp: new Date()
  });
});

app.get("/api/v2/test-db", (req, res) => {
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

app.get("/api/v2/test-cloudinary", (req, res) => {
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

// Add this after your test routes
app.get("/api/v2/test-cors", (req, res) => {
  res.json({
    message: "CORS is working",
    timestamp: new Date()
  });
});

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "E-Shop API is running",
    status: "active",
    timestamp: new Date()
  });
});

// Static files
app.use("/uploads", express.static("uploads"));

// This should be LAST - Handle undefined routes
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl
  });
});

// Error Handling
app.use(ErrorHandler);

module.exports = app;
