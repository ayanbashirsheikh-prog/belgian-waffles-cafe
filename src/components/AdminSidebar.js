import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  ClipboardDocumentListIcon, 
  TagIcon, 
  UsersIcon, 
  ChartBarIcon, 
  Cog6ToothIcon 
} from '@heroicons/react/24/outline';

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Overview', path: '/admin', icon: HomeIcon },
    { name: 'Orders', path: '/admin/orders', icon: ClipboardDocumentListIcon },
    { name: 'Menu Management', path: '/admin/menu', icon: TagIcon },
    { name: 'Offers', path: '/admin/offers', icon: TagIcon },
    { name: 'Customers', path: '/admin/customers', icon: UsersIcon },
    { name: 'Analytics', path: '/admin/analytics', icon: ChartBarIcon },
    { name: 'Settings', path: '/admin/settings', icon: Cog6ToothIcon },
  ];

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default AdminSidebar;