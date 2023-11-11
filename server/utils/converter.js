const xml2js = require("xml2js");
const Ajv = require("ajv");
const ajv = new Ajv();
const schema = require("../schema.json");

const parseXmlToJson = async (xmlData) => {
  return new Promise((resolve, reject) => {
    const parser = new xml2js.Parser();
    parser.parseString(xmlData, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const validateJson = (json) => {
  const validate = ajv.compile(schema);
  return validate(json);
};

const converter = async (xmlData) => {
  try {
    // Ensure xmlData is a string before using replace
    if (typeof xmlData !== "string") {
      throw new Error("XML data is not a string");
    }

    // Remove Byte Order Mark (BOM) if present
    const cleanedString = xmlData.replace("\ufeff", "");

    const json = await parseXmlToJson(cleanedString);
    const isValid = validateJson(json);

    return { success: isValid, data: json };
  } catch (error) {
    console.error(error);
    throw new Error("Error processing XML to JSON");
  }
};

module.exports = { converter };
