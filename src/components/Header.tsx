import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Bell, Settings, User } from 'lucide-react';

interface HeaderProps {
  onNotificationsToggle: () => void;
  onSettingsToggle: () => void;
  onProfileToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNotificationsToggle, onSettingsToggle, onProfileToggle }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass border-b border-white/20 relative"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Stock Dashboard</h1>
              <p className="text-sm text-gray-300">Real-time market insights</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              Markets
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              Watchlist
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              Portfolio
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              News
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={onNotificationsToggle}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors relative"
              >
                <Bell className="h-5 w-5" />
                {/* Notification badge */}
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              </button>
            </div>
            <button 
              onClick={onSettingsToggle}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Settings className="h-5 w-5" />
            </button>
            <button 
              onClick={onProfileToggle}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 