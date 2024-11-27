import React from 'react';
import { Home, Compass, PlaySquare, Clock, ThumbsUp, Film, Gamepad2, Newspaper, Music2, Radio } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Compass, label: 'Explore', path: '/explore' },
  { icon: PlaySquare, label: 'Subscriptions', path: '/subscriptions' },
  { icon: Clock, label: 'History', path: '/history' },
  { icon: ThumbsUp, label: 'Liked Videos', path: '/liked' },
];

const categories = [
  { icon: Film, label: 'Movies' },
  { icon: Gamepad2, label: 'Gaming' },
  { icon: Newspaper, label: 'News' },
  { icon: Music2, label: 'Music' },
  { icon: Radio, label: 'Live' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 h-screen fixed left-0 top-16 bg-white border-r border-gray-200 overflow-y-auto pt-4">
      <div className="px-3">
        <div className="space-y-1 mb-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5 mr-4" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <h3 className="px-3 text-sm font-semibold text-gray-500 mb-2">Categories</h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.label}
                className="w-full flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <category.icon className="w-5 h-5 mr-4" />
                <span className="text-sm font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}