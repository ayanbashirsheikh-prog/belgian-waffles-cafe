import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

const Overview = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-6">Overview</h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900">Total Orders</h3>
        <p className="text-3xl font-bold text-orange-500">1,234</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900">Revenue</h3>
        <p className="text-3xl font-bold text-green-500">₹45,678</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900">Customers</h3>
        <p className="text-3xl font-bold text-blue-500">567</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900">Avg. Order Value</h3>
        <p className="text-3xl font-bold text-purple-500">₹37</p>
      </div>
    </div>
  </div>
);

const Orders = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-6">Orders</h1>
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#1234</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 Waffles, 1 Shake</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹310</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Completed
              </span>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  </div>
);

const MenuManagement = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-6">Menu Management</h1>
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <p className="text-gray-600">Menu management interface would go here.</p>
    </div>
  </div>
);

const Offers = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-6">Offers</h1>
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <p className="text-gray-600">Offers management interface would go here.</p>
    </div>
  </div>
);

const Customers = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-6">Customers</h1>
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <p className="text-gray-600">Customer management interface would go here.</p>
    </div>
  </div>
);

const Analytics = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-6">Analytics</h1>
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <p className="text-gray-600">Analytics dashboard would go here.</p>
    </div>
  </div>
);

const Settings = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-6">Settings</h1>
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <p className="text-gray-600">Settings interface would go here.</p>
    </div>
  </div>
);

const AdminDashboard = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 bg-gray-100">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/menu" element={<MenuManagement />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;