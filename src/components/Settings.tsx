import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings as SettingsIcon, X, Moon, Sun, Bell, Eye, Palette, Globe, Shield, Monitor } from 'lucide-react';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'general' | 'appearance' | 'notifications' | 'data'>('general');
  const [darkMode, setDarkMode] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [showVolume, setShowVolume] = useState(true);
  const [currency, setCurrency] = useState('USD');

  const tabs = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'data', label: 'Data', icon: Eye }
  ];

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-white mb-3">Display Settings</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div className="flex items-center space-x-3">
              <Monitor className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-white">Auto-refresh data</span>
            </div>
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                autoRefresh ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoRefresh ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div className="flex items-center space-x-3">
              <Eye className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-white">Show volume data</span>
            </div>
            <button
              onClick={() => setShowVolume(!showVolume)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                showVolume ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  showVolume ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-white mb-3">Currency</h4>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="JPY">JPY - Japanese Yen</option>
        </select>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-white mb-3">Theme</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div className="flex items-center space-x-3">
              <Sun className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-white">Light Mode</span>
            </div>
            <button
              onClick={() => setDarkMode(false)}
              className={`w-4 h-4 rounded-full border-2 transition-colors ${
                !darkMode ? 'border-blue-500 bg-gradient-to-r from-blue-500 to-purple-600' : 'border-gray-400'
              }`}
            />
          </div>
          
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div className="flex items-center space-x-3">
              <Moon className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-white">Dark Mode</span>
            </div>
            <button
              onClick={() => setDarkMode(true)}
              className={`w-4 h-4 rounded-full border-2 transition-colors ${
                darkMode ? 'border-blue-500 bg-gradient-to-r from-blue-500 to-purple-600' : 'border-gray-400'
              }`}
            />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-white mb-3">Chart Colors</h4>
        <div className="grid grid-cols-3 gap-3">
          {['Blue', 'Green', 'Purple', 'Orange', 'Red', 'Teal'].map((color) => (
            <button
              key={color}
              className="p-3 rounded-lg border border-white/20 hover:bg-white/10 transition-all hover:border-white/40"
            >
              <div className={`w-6 h-6 rounded-full mx-auto mb-2 bg-gradient-to-r from-${color.toLowerCase()}-400 to-${color.toLowerCase()}-600`}></div>
              <span className="text-xs text-gray-300">{color}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-white mb-3">Alert Types</h4>
        <div className="space-y-4">
          {[
            { label: 'Price Alerts', description: 'Get notified when stocks reach target prices' },
            { label: 'Market Updates', description: 'Receive daily market summary' },
            { label: 'Portfolio Changes', description: 'Track your portfolio performance' },
            { label: 'News Alerts', description: 'Breaking news about your watchlist' }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <div>
                <div className="text-sm text-white">{item.label}</div>
                <div className="text-xs text-gray-400">{item.description}</div>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                <span className="inline-block h-4 w-4 transform translate-x-6 rounded-full bg-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDataSettings = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-white mb-3">Data Sources</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div className="flex items-center space-x-3">
              <Globe className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-white">Real-time data</span>
            </div>
            <span className="text-xs text-emerald-400 font-medium">Connected</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div className="flex items-center space-x-3">
              <Shield className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-white">Data encryption</span>
            </div>
            <span className="text-xs text-emerald-400 font-medium">Enabled</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-white mb-3">Cache Management</h4>
        <button className="w-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-lg px-4 py-2 text-red-400 hover:from-red-500/30 hover:to-pink-500/30 transition-all">
          Clear Cache
        </button>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return renderGeneralSettings();
      case 'appearance':
        return renderAppearanceSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'data':
        return renderDataSettings();
      default:
        return renderGeneralSettings();
    }
  };

  const settingsContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998]"
            onClick={onClose}
          />
          
          {/* Settings Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-4 w-96 glass rounded-xl shadow-2xl z-[9999] border border-white/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <SettingsIcon className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Settings</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/20">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'text-blue-400 border-b-2 border-blue-400 bg-white/5'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Content */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {renderTabContent()}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/20 flex space-x-3">
              <button className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all border border-white/20">
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all">
                Save Changes
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  // Render to document body using portal
  return createPortal(settingsContent, document.body);
};

export default Settings; 