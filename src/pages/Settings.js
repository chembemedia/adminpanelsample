import React, { useState } from 'react';

const Settings = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [provider, setProvider] = useState('airtel');

  const handlePayment = () => {
    // This is where you would make an API call to your backend
    // to initiate the mobile money payment.
    console.log(`Initiating payment of K${amount} to ${mobileNumber} via ${provider}`);
    alert(`Payment request sent to backend for K${amount}`);
    // The backend will then communicate with the mobile money API.
  };

  return (
    <div>
      <h1 className="admin-panel-header">Settings</h1>
      
      <div className="payment-settings">
        <h3>Payment to Drivers via Mobile Money</h3>
        <p>This feature requires a backend API integration with Airtel Money and MTN Money.</p>
        
        <label>Mobile Money Provider:</label>
        <select value={provider} onChange={(e) => setProvider(e.target.value)}>
          <option value="airtel">Airtel Money</option>
          <option value="mtn">MTN Money</option>
        </select>
        
        <label>Driver's Mobile Number:</label>
        <input 
          type="text" 
          value={mobileNumber} 
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="e.g., 0977xxxxxx"
        />
        
        <label>Amount to Pay (ZMW):</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g., 100.00"
        />
        
        <button onClick={handlePayment}>Pay Driver</button>
      </div>
    </div>
  );
};

export default Settings;
