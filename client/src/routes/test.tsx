import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

const FileUploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:3000/upload", formData)
      .then((response) => {
        console.log("File upload successful");
        console.log(response.data.xml);
      })
      .catch((error) => {
        console.log("File upload error: " + error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileUploadForm;
