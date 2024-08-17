import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function DragDrop() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
      // Call backend API endpoint
    },
  });
  return (
    <div {...getRootProps()} className="dragDrop">
      <input {...getInputProps()} />
      <h2 style={{ paddingBottom: "5px" }}>
        <i className="fa-solid fa-diagram-next"></i>
      </h2>
      <p style={{ marginTop: "0px" }}>
        Drag and drop files here or click to browse.
      </p>
      <ul>
        {uploadedFiles.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}
