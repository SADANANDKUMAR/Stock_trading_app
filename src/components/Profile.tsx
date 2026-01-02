import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, X, Mail, Phone, MapPin, Shield, CreditCard, LogOut, Edit, Camera, Settings as SettingsIcon } from 'lucide-react';

interface ProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const Profile: React.FC<ProfileProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'billing' | 'preferences'>('profile');

  // Mock user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    joinDate: 'March 2023',
    subscription: 'Premium',
    lastLogin: '2 hours ago'
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'preferences', label: 'Preferences', icon: SettingsIcon }
  ];

  const renderProfileTab = () => (
    <div className="space-y-6">
      {/* Avatar Section */}
      <div className="text-center">
        <div className="relative inline-block">
          <img
            src={userData.avatar}
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white/20 shadow-lg"
          />
          <button className="absolute bottom-0 right-0 p-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg">
            <Camera className="h-3 w-3 text-white" />
          </button>
        </div>
        <h3 className="text-lg font-semibold text-white mt-3">{userData.name}</h3>
        <p className="text-sm text-gray-400">{userData.subscription} Member</p>
      </div>

      {/* Personal Information */}
      <div>
        <h4 className="text-sm font-medium text-white mb-3">Personal Information</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
            <Mail className="h-4 w-4 text-gray-400" />
            <div className="flex-1">
              <p className="text-sm text-white">{userData.email}</p>
              <p className="text-xs text-gray-400">Email address</p>
            </div>
            <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              <Edit className="h-3 w-3" />
            </button>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
            <Phone className="h-4 w-4 text-gray-400" />
            <div className="flex-1">
              <p className="text-sm text-white">{userData.phone}</p>
              <p className="text-xs text-gray-400">Phone number</p>
            </div>
            <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              <Edit className="h-3 w-3" />
            </button>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
            <MapPin className="h-4 w-4 text-gray-400" />
            <div className="flex-1">
              <p className="text-sm text-white">{userData.location}</p>
              <p className="text-xs text-gray-400">Location</p>
            </div>
            <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              <Edit className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Account Stats */}
      <div>
        <h4 className="text-sm font-medium text-white mb-3">Account Information</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-white/5 rounded-lg text-center border border-white/10">
            <p className="text-lg font-semibold text-white">{userData.joinDate}</p>
            <p className="text-xs text-gray-400">Member since</p>
          </div>
          <div className="p-3 bg-white/5 rounded-lg text-center border border-white/10">
            <p className="text-lg font-semibold text-white">{userData.lastLogin}</p>
            <p className="text-xs text-gray-400">Last login</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-white mb-3">Password & Security</h4>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10">
            <div className="flex items-center space-x-3">
              <Shield className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-white">Change Password</span>
            </div>
            <Edit className="h-4 w-4 text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10">
            <div className="flex items-center space-x-3">
              <Shield className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-white">Two-Factor Authentication</span>
            </div>
            <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
          </button>

          <button className="w-full flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10">
            <div className="flex items-center space-x-3">
              <Shield className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-white">Login History</span>
            </div>
            <Edit className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-white mb-3">Active Sessions</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
            <div>
              <p className="text-sm text-white">Chrome on Windows</p>
              <p className="text-xs text-gray-400">New York, NY • 2 hours ago</p>
            </div>
            <span className="text-xs text-emerald-400 font-medium">Current</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
            <div>
              <p className="text-sm text-white">Safari on iPhone</p>
              <p className="text-xs text-gray-400">New York, NY • 1 day ago</p>
            </div>
            <button className="text-xs text-red-400 hover:text-red-300 font-medium">Sign out</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBillingTab = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-white mb-3">Subscription</h4>
        <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-semibold text-white">{userData.subscription} Plan</span>
            <span className="text-sm text-emerald-400 font-medium">Active</span>
          </div>
          <p className="text-sm text-gray-300 mb-3">Full access to all features and real-time data</p>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all">
            Manage Subscription
          </button>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-white mb-3">Payment Method</h4>
        <div className="p-3 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-center space-x-3">
            <CreditCard className="h-5 w-5 text-gray-400" />
            <div className="flex-1">
              <p className="text-sm text-white">•••• •••• •••• 4242</p>
              <p className="text-xs text-gray-400">Expires 12/25</p>
            </div>
            <button className="text-sm text-blue-400 hover:text-blue-300 font-medium">Edit</button>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-white mb-3">Billing History</h4>
        <div className="space-y-2">
          {[
            { date: 'Dec 1, 2023', amount: '$29.99', status: 'Paid' },
            { date: 'Nov 1, 2023', amount: '$29.99', status: 'Paid' },
            { date: 'Oct 1, 2023', amount: '$29.99', status: 'Paid' }
          ].map((invoice, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
              <div>
                <p className="text-sm text-white">{invoice.date}</p>
                <p className="text-xs text-gray-400">Monthly subscription</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white">{invoice.amount}</p>
                <p className="text-xs text-emerald-400 font-medium">{invoice.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPreferencesTab = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-white mb-3">Display Preferences</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-sm text-white">Default currency</span>
            <select className="bg-white/10 border border-white/20 rounded px-2 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-sm text-white">Time zone</span>
            <select className="bg-white/10 border border-white/20 rounded px-2 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Eastern Time</option>
              <option>Central Time</option>
              <option>Pacific Time</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-white mb-3">Privacy Settings</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-sm text-white">Profile visibility</span>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
              <span className="inline-block h-4 w-4 transform translate-x-6 rounded-full bg-white" />
            </button>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-sm text-white">Email notifications</span>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
              <span className="inline-block h-4 w-4 transform translate-x-6 rounded-full bg-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfileTab();
      case 'security':
        return renderSecurityTab();
      case 'billing':
        return renderBillingTab();
      case 'preferences':
        return renderPreferencesTab();
      default:
        return renderProfileTab();
    }
  };

  const profileContent = (
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
          
          {/* Profile Panel */}
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
                  <User className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Profile</h3>
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
            <div className="p-4 border-t border-white/20">
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-lg text-red-400 hover:from-red-500/30 hover:to-pink-500/30 transition-all">
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  // Render to document body using portal
  return createPortal(profileContent, document.body);
};

export default Profile; 