const express = require("express");
const router = express.Router();
const { converter } = require("./utils/utils");

const routes = {
  convert: async (req, res) => {
    try {
      // Access XML data directly from req.body
      const result = await converter(req.body);

      if (result.success) {
        res.json({
          success: true,
          message: "JSON is valid",
          data: result.data,
        });
      } else {
        res.status(400).json({ success: false, message: "Invalid JSON" });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
  parser: async (req, res) => {
    // Your existing code...
  },
};

router.post("/convert", routes.convert);
router.get("/parser", routes.parser);

module.exports = routes;
