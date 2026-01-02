import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MarketData } from '../types';

interface MarketOverviewProps {
  data: MarketData | null;
}

const MarketOverview: React.FC<MarketOverviewProps> = ({ data }) => {
  if (!data) return null;

  const indices = [
    { name: 'S&P 500', data: data.sp500, color: 'from-blue-500 to-blue-600' },
    { name: 'NASDAQ', data: data.nasdaq, color: 'from-purple-500 to-purple-600' },
    { name: 'DOW', data: data.dow, color: 'from-green-500 to-green-600' },
    { name: 'VIX', data: data.vix, color: 'from-red-500 to-red-600' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {indices.map((index, i) => (
        <motion.div
          key={index.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-300">{index.name}</h3>
            <div className={`p-1 rounded-full bg-gradient-to-r ${index.color}`}>
              {index.data.change >= 0 ? (
                <TrendingUp className="h-3 w-3 text-white" />
              ) : (
                <TrendingDown className="h-3 w-3 text-white" />
              )}
            </div>
          </div>
          
          <div className="space-y-1">
            <p className="text-2xl font-bold text-white">
              {index.data.value.toLocaleString()}
            </p>
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-medium ${
                index.data.change >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {index.data.change >= 0 ? '+' : ''}{index.data.change.toFixed(2)}
              </span>
              <span className={`text-sm ${
                index.data.changePercent >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                ({index.data.changePercent >= 0 ? '+' : ''}{index.data.changePercent.toFixed(2)}%)
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MarketOverview; 