import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Drivers from './pages/Drivers';
import Stores from './pages/Stores';
import Settings from './pages/Settings';
import './styles.css';

const Sidebar = () => (
  <nav className="sidebar">
    <h2>Kuyenza</h2>
    <ul>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/orders">Orders</Link></li>
      <li><Link to="/customers">Customers</Link></li>
      <li><Link to="/drivers">Drivers</Link></li>
      <li><Link to="/stores">Stores</Link></li>
      <li><Link to="/settings">Settings</Link></li>
      {/* Quick Links and Marketplace could be sub-menus or pages */}
    </ul>
  </nav>
);

const Dashboard = () => (
  <div>
    <h1 className="admin-panel-header">Dashboard</h1>
    <p>Welcome to the Kuyenza Delivery Admin Panel. Here you can see a quick overview of your business.</p>
    {/* Add cards for quick stats here, e.g., total orders, new customers, active drivers. */}
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
