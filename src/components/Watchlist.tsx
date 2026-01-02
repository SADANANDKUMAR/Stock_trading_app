import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Star, Plus, Trash2 } from 'lucide-react';
import { StockData } from '../types';

interface WatchlistProps {
  stocks: StockData[];
  onStockSelect: (symbol: string) => void;
}

const Watchlist: React.FC<WatchlistProps> = ({ stocks, onStockSelect }) => {
  const watchlistStocks = stocks.slice(0, 5); // Show first 5 stocks as watchlist

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      {/* Watchlist Header */}
      <div className="glass rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Watchlist</h2>
          <button className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-3">
          {watchlistStocks.map((stock, index) => (
            <motion.div
              key={stock.symbol}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => onStockSelect(stock.symbol)}
            >
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-white">{stock.symbol}</span>
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                </div>
                <p className="text-sm text-gray-300">{stock.name}</p>
              </div>
              <div className="text-right">
                <div className="font-semibold text-white">${stock.price.toFixed(2)}</div>
                <div className="flex items-center space-x-1">
                  {stock.change >= 0 ? (
                    <TrendingUp className="h-3 w-3 text-green-400" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-400" />
                  )}
                  <span className={`text-xs ${
                    stock.changePercent >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="glass rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white hover:from-blue-600 hover:to-blue-700 transition-all">
            <Plus className="h-4 w-4" />
            <span>Add to Watchlist</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white hover:from-green-600 hover:to-green-700 transition-all">
            <TrendingUp className="h-4 w-4" />
            <span>Buy Stock</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-lg text-white hover:from-red-600 hover:to-red-700 transition-all">
            <TrendingDown className="h-4 w-4" />
            <span>Sell Stock</span>
          </button>
        </div>
      </div>

      {/* Market News */}
      <div className="glass rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Market News</h3>
        <div className="space-y-3">
          {[
            { title: 'Tech Stocks Rally on Strong Earnings', time: '2h ago' },
            { title: 'Federal Reserve Announces Rate Decision', time: '4h ago' },
            { title: 'Oil Prices Surge on Supply Concerns', time: '6h ago' }
          ].map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <p className="text-sm text-white mb-1">{news.title}</p>
              <p className="text-xs text-gray-400">{news.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Watchlist; 