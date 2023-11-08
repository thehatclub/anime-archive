// Importing required modules
const router = require("./routes.js");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const express = require("express");

// Initialize middleware
const app = express();
app.use(cors());
app.use(fileUpload());

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Server Routes
app.post("/convert", router);
app.get("/parser", router);
