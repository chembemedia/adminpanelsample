import React, { useState } from 'react';

const FileUpload = ({ label, onFileSelect }) => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      // Pass the file object up to the parent component
      onFileSelect(file);
    }
  };

  return (
    <div className="file-upload-container">
      <label>{label}</label>
      <input type="file" onChange={handleFileChange} />
      {fileName && <p>Selected file: {fileName}</p>}
    </div>
  );
};

export default FileUpload;
