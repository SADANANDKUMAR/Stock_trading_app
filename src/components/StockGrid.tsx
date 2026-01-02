import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ArrowUpDown, Search } from 'lucide-react';
import { StockData } from '../types';

interface StockGridProps {
  stocks: StockData[];
  onStockSelect: (symbol: string) => void;
  selectedStock: string;
}

const StockGrid: React.FC<StockGridProps> = ({ stocks, onStockSelect, selectedStock }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof StockData>('symbol');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: keyof StockData) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredAndSortedStocks = stocks
    .filter(stock => 
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.sector.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      return 0;
    });

  const formatNumber = (num: number) => {
    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toFixed(2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Market Overview</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search stocks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/20">
              {[
                { key: 'symbol', label: 'Symbol' },
                { key: 'name', label: 'Company' },
                { key: 'price', label: 'Price' },
                { key: 'change', label: 'Change' },
                { key: 'changePercent', label: 'Change %' },
                { key: 'volume', label: 'Volume' },
                { key: 'marketCap', label: 'Market Cap' },
                { key: 'pe', label: 'P/E' },
                { key: 'sector', label: 'Sector' }
              ].map(({ key, label }) => (
                <th
                  key={key}
                  className="px-4 py-3 text-left text-sm font-medium text-gray-300 cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort(key as keyof StockData)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{label}</span>
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedStocks.map((stock, index) => (
              <motion.tr
                key={stock.symbol}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer ${
                  selectedStock === stock.symbol ? 'bg-blue-500/20' : ''
                }`}
                onClick={() => onStockSelect(stock.symbol)}
              >
                <td className="px-4 py-4">
                  <div className="font-semibold text-white">{stock.symbol}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="text-white">{stock.name}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="font-semibold text-white">${stock.price.toFixed(2)}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center space-x-1">
                    {stock.change >= 0 ? (
                      <TrendingUp className="h-4 w-4 text-green-400" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-400" />
                    )}
                    <span className={`font-medium ${
                      stock.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className={`font-medium ${
                    stock.changePercent >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="text-gray-300">{formatNumber(stock.volume)}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="text-gray-300">${formatNumber(stock.marketCap)}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="text-gray-300">{stock.pe.toFixed(1)}</div>
                </td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                    {stock.sector}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default StockGrid; 