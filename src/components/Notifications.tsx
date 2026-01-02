import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, TrendingUp, TrendingDown, AlertCircle, Info, CheckCircle } from 'lucide-react';

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'info' | 'error';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

interface NotificationsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Notifications: React.FC<NotificationsProps> = ({ isOpen, onClose }) => {
  // Mock notifications data
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'success',
      title: 'Stock Alert',
      message: 'AAPL has reached your target price of $175.00',
      time: '2 minutes ago',
      read: false
    },
    {
      id: '2',
      type: 'warning',
      title: 'Market Update',
      message: 'S&P 500 is down 1.2% today',
      time: '15 minutes ago',
      read: false
    },
    {
      id: '3',
      type: 'info',
      title: 'Portfolio Update',
      message: 'Your portfolio value has increased by 2.3% this week',
      time: '1 hour ago',
      read: true
    },
    {
      id: '4',
      type: 'error',
      title: 'Connection Issue',
      message: 'Temporary connection issue with market data',
      time: '2 hours ago',
      read: true
    },
    {
      id: '5',
      type: 'success',
      title: 'Order Executed',
      message: 'Your buy order for 10 TSLA shares has been executed',
      time: '3 hours ago',
      read: true
    }
  ];

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-emerald-400" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-amber-400" />;
      case 'error':
        return <X className="h-4 w-4 text-red-400" />;
      case 'info':
        return <Info className="h-4 w-4 text-blue-400" />;
      default:
        return <Bell className="h-4 w-4 text-gray-400" />;
    }
  };

  const getTypeColor = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return 'border-l-emerald-400 bg-emerald-400/5';
      case 'warning':
        return 'border-l-amber-400 bg-amber-400/5';
      case 'error':
        return 'border-l-red-400 bg-red-400/5';
      case 'info':
        return 'border-l-blue-400 bg-blue-400/5';
      default:
        return 'border-l-gray-400 bg-gray-400/5';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const notificationsContent = (
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
          
          {/* Notifications Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-4 w-80 glass rounded-xl shadow-2xl z-[9999] border border-white/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <Bell className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Notifications</h3>
                {unreadCount > 0 && (
                  <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full font-medium">
                    {unreadCount}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-6 text-center text-gray-400">
                  <div className="p-3 bg-white/5 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Bell className="h-8 w-8 opacity-50" />
                  </div>
                  <p>No notifications yet</p>
                </div>
              ) : (
                <div className="p-2">
                  {notifications.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`p-3 rounded-lg border-l-4 ${getTypeColor(notification.type)} ${
                        !notification.read ? 'bg-white/5' : ''
                      } hover:bg-white/10 transition-all cursor-pointer mb-2`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {getIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-white">
                              {notification.title}
                            </p>
                            <span className="text-xs text-gray-400">
                              {notification.time}
                            </span>
                          </div>
                          <p className="text-sm text-gray-300 mt-1">
                            {notification.message}
                          </p>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-white/20">
              <button className="w-full text-center text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium">
                Mark all as read
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  // Render to document body using portal
  return createPortal(notificationsContent, document.body);
};

export default Notifications; 