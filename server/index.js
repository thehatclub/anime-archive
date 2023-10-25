// Importing required modules
const express = require("express");
const multer = require("multer");
const libxmljs = require("libxmljs");
const cors = require("cors");
const fs = require("fs");

// Initializing Express app and multer with a destination for uploaded files
const app = express();
const upload = multer({ dest: "uploads/" });

// Setting the port to an environment variable or a default value
const port = process.env.PORT || 3000;

// Using CORS middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Starting the server and logging the port it's running on
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Function to process the XML file to a standard format
async function processXML(xmlData) {
  // Parsing the XML data
  const xmlDoc = libxmljs.parseXml(xmlData);

  // Loading the XML schema and validating the XML data against it
  const xmlSchemaDoc = libxmljs.parseXml(fs.readFileSync("./list.xsd", "utf8"));
  const validationResult = xmlDoc.validate(xmlSchemaDoc);

  // If the XML data is valid, reformat it
  if (validationResult) {
    // Creating a new XML document
    const newDoc = new libxmljs.Document();
    newDoc.version = "1.0";
    newDoc.encoding = "UTF-8";

    // Creating root element and other elements
    const root = newDoc.node("myanimelist");
    const myinfo = root.node("myinfo");
    myinfo.node("user_id", "16149719");
    myinfo.node("user_name", "MAL Username");
    myinfo.node("user_export_type", "1");

    // Refactoring the elements of the original XML file to the new format
    const folders = xmlDoc.root().find("//folder");
    folders.forEach((folder) => {
      const status = folder.get("name").text();
      const items = folder.get("data").find("item");

      items.forEach((item) => {
        const anime = root.node("anime");
        const url = item.get("link").text();
        const id = url.split("/").pop();
        anime.node("series_animedb_id", id);
        anime.node("my_status", status);
        anime.node("update_on_import", "1");
      });
    });

    // Serializing the new XML and returning it
    return newDoc.toString();
  } else {
    res.status(400).send(`Validation errors: ${xmlDoc.validationErrors}`);
  }
}

// Function to delete the file after processing
function deleteCache(req) {
  fs.unlink(req.file.path, (err) => {
    if (err) {
      console.error(`Error deleting file: ${err}`);
    } else {
      console.log("File deleted successfully");
    }
  });
}

// POST endpoint to upload the file, process it, and send the response
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    // Reading the uploaded file
    const xmlData = fs.readFileSync(req.file.path, "utf8");

    // Processing the XML data
    const newXmlData = await processXML(xmlData);

    // Sending the new XML data as the response
    res.send(newXmlData);

    // Deleting the file after processing
    deleteCache(req);
  } catch (error) {
    console.error(`Error processing file: ${error}`);
    res.status(500).send(`Error processing file: ${error}`);
    deleteCache(req);
  }
});
