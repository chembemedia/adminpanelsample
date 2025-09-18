import React from 'react';
import FileUpload from '../components/FileUpload';

const Drivers = () => {
  const handleFileUpload = (file) => {
    console.log('File selected:', file);
    // Here you would add logic to upload the file to your backend
    // using a library like Axios or the built-in Fetch API.
  };

  return (
    <div>
      <h1 className="admin-panel-header">Drivers</h1>
      <p>Manage driver profiles, verify documents, and process payments.</p>
      
      {/* Example for adding a new driver */}
      <div className="add-driver-form">
        <h3>Add New Driver</h3>
        <label>Driver Name:</label>
        <input type="text" placeholder="John Banda" />
        <label>NRC Number:</label>
        <input type="text" placeholder="NRC number" />
        <label>Licence Number:</label>
        <input type="text" placeholder="Licence number" />

        <FileUpload label="Upload Driver's Licence" onFileSelect={handleFileUpload} />
        <FileUpload label="Upload Driver's NRC" onFileSelect={handleFileUpload} />
        <FileUpload label="Upload Driver's RSTA" onFileSelect={handleFileUpload} />
        
        <button onClick={() => alert('Driver added and files sent for upload!')}>Add Driver</button>
      </div>
      
      {/* Existing drivers table goes here */}
    </div>
  );
};

export default Drivers;
