import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="text-center text-2xl font-semibold p-4">
          <span className="text-yellow-400">Store Name</span>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard/purchase" className={`block p-4 ${location.pathname === '/dashboard/purchase' ? 'bg-gray-700' : 'hover:bg-gray-600'}`}>Purchases</Link>
            </li>
            <li>
              <Link to="/dashboard/stock" className={`block p-4 ${location.pathname === '/dashboard/stock' ? 'bg-gray-700' : 'hover:bg-gray-600'}`}>Stock</Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className={`block p-4 ${location.pathname === '/dashboard/profile' ? 'bg-gray-700' : 'hover:bg-gray-600'}`}>My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/payments" className={`block p-4 ${location.pathname === '/dashboard/payments' ? 'bg-gray-700' : 'hover:bg-gray-600'}`}>Payments</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-grow p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
