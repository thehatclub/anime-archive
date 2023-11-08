const express = require("express");
const router = express.Router();
const { converter, parser } = require("./utils/utils");

router.post("/convert", async (req, res) => {
  try {
    //set required file params
    const file = req.files.file;
    const fileName = req.files.file.name;

    // Convert the XML data
    const newXmlData = await converter(file.data);

    // Sending the new XML data as the response
    res.set("Content-type", "application/xml");
    res.send(newXmlData);
  } catch (error) {
    if (error.code === "NoSuchKey") {
      console.log(`No such key ${fileName}`);
      res.sendStatus(404).end();
    } else {
      console.error(`Error processing file: ${error}`);
      res.status(500).send(`Error processing file: ${error}`);
    }
  }
});

router.get("/parser", async (req, res) => {
  parser();
});

module.exports = router;
