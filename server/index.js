// Importing required modules
// require("dotenv").config();
const express = require("express");
const libxmljs = require("libxmljs");
const cors = require("cors");
const fs = require("fs");
const fileUpload = require("express-fileupload");

// Initialize modules
const app = express();
app.use(cors());
app.use(fileUpload());

//Initialize AWS
// const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

// const s3Config = {
//   accessKeyId: process.env.AWS_ACCESS_KEY,
//   secretAccessKey: process.env.AWS_ACCESS_SECRET,
//   region: "us-east-2",
// };

// const s3 = new S3Client(s3Config);

// Function to process the XML file to a MAL format
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

// POST endpoint to handle xml file upload
app.post("/upload", async (req, res) => {
  const file = req.files.file;
  const fileName = req.files.file.name;
  // const bucketParams = {
  //   Bucket: process.env.BUCKET,
  //   Key: fileName,
  //   Body: file.data,
  // };
  try {
    //Upload XML file to AWS Bucket
    // const data = await s3.send(new PutObjectCommand(bucketParams));
    // Processing the XML data
    const newXmlData = await processXML(file.data);

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

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
