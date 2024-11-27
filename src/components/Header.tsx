import React from 'react';
import { Search, Menu, Video, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="flex items-center ml-4">
            <Video className="w-8 h-8 text-red-600" />
            <span className="ml-2 text-xl font-semibold">KTube</span>
          </Link>
        </div>
        
        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 pl-10 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Video className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}