const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  res.json({ files: ["some xml file", "some more", "and last one"] });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
