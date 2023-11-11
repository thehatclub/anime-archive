// Importing required modules
const router = require("./routes.js");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

// Initialize middleware
const app = express();
app.use(cors());
app.use(bodyParser.text({ type: "application/xml" }));

// Server Routes
app.post("/convert", router.convert);
app.get("/parser", router.parser);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
