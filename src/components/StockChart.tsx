import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown, Calendar, BarChart3 } from 'lucide-react';

interface StockChartProps {
  symbol: string;
}

const StockChart: React.FC<StockChartProps> = ({ symbol }) => {
  const [timeframe, setTimeframe] = useState<'1D' | '1W' | '1M' | '3M' | '1Y'>('1M');
  const [chartData, setChartData] = useState<any[]>([]);

  // Generate mock chart data
  useEffect(() => {
    const generateData = () => {
      const data = [];
      const basePrice = 150 + Math.random() * 100;
      const days = timeframe === '1D' ? 24 : timeframe === '1W' ? 7 : timeframe === '1M' ? 30 : timeframe === '3M' ? 90 : 365;
      
      for (let i = 0; i < days; i++) {
        const change = (Math.random() - 0.5) * 10;
        const price = basePrice + change;
        data.push({
          date: i,
          price: Math.round(price * 100) / 100,
          volume: Math.floor(Math.random() * 1000000) + 500000
        });
      }
      return data;
    };

    setChartData(generateData());
  }, [timeframe, symbol]);

  const timeframes = [
    { label: '1D', icon: Calendar },
    { label: '1W', icon: Calendar },
    { label: '1M', icon: BarChart3 },
    { label: '3M', icon: BarChart3 },
    { label: '1Y', icon: BarChart3 }
  ];

  const currentPrice = chartData[chartData.length - 1]?.price || 0;
  const previousPrice = chartData[chartData.length - 2]?.price || currentPrice;
  const change = currentPrice - previousPrice;
  const changePercent = ((change / previousPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">{symbol}</h2>
          <div className="flex items-center space-x-4 mt-2">
            <span className="text-3xl font-bold text-white">${currentPrice.toFixed(2)}</span>
            <div className="flex items-center space-x-2">
              {change >= 0 ? (
                <TrendingUp className="h-5 w-5 text-green-400" />
              ) : (
                <TrendingDown className="h-5 w-5 text-red-400" />
              )}
              <span className={`text-lg font-medium ${
                change >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {change >= 0 ? '+' : ''}{change.toFixed(2)} ({changePercent >= 0 ? '+' : ''}{changePercent.toFixed(2)}%)
              </span>
            </div>
          </div>
        </div>

        {/* Timeframe Selector */}
        <div className="flex space-x-1 bg-white/10 rounded-lg p-1">
          {timeframes.map((tf) => {
            const Icon = tf.icon;
            return (
              <button
                key={tf.label}
                onClick={() => setTimeframe(tf.label as any)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  timeframe === tf.label
                    ? 'bg-white text-gray-900'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <Icon className="h-4 w-4 inline mr-1" />
                {tf.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="date" 
              stroke="rgba(255,255,255,0.5)"
              fontSize={12}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.5)"
              fontSize={12}
              domain={['dataMin - 5', 'dataMax + 5']}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(0,0,0,0.8)',
                border: 'none',
                borderRadius: '8px',
                color: 'white'
              }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#colorPrice)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Volume Chart */}
      <div className="mt-6 h-20">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" fontSize={10} />
            <YAxis stroke="rgba(255,255,255,0.5)" fontSize={10} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(0,0,0,0.8)',
                border: 'none',
                borderRadius: '8px',
                color: 'white'
              }}
            />
            <Line
              type="monotone"
              dataKey="volume"
              stroke="#10b981"
              strokeWidth={1}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default StockChart; 