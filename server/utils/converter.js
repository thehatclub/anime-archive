const libxmljs = require("libxmljs");
const fs = require("fs");

const converter = async (xmlData) => {
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
};

module.exports = { converter };
