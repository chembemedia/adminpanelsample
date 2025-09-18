import React from 'react';

const Orders = () => {
  return (
    <div>
      <h1 className="admin-panel-header">Orders</h1>
      <p>View, manage, and track all customer orders. Filter by status, date, or customer.</p>
      {/* Example table for displaying orders */}
      <table className="data-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Total Amount (ZMW)</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#12345</td>
            <td>Jane Doe</td>
            <td>K150.00</td>
            <td>Pending</td>
            <td><button>View</button></td>
          </tr>
          {/* More rows will be added dynamically from the backend */}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
