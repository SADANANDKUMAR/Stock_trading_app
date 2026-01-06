import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import StockGrid from './components/StockGrid';
import MarketOverview from './components/MarketOverview';
import StockChart from './components/StockChart';
import Watchlist from './components/Watchlist';
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import Profile from './components/Profile';
import { StockData, MarketData } from './types';
import PortfolioPage from './components/portfolio/PortfolioPage'
import LoginModal from './components/ui/LoginModal';
import LoginPage from './LoginPage'
const App: React.FC = () => {
  const [selectedStock, setSelectedStock] = useState<string>('AAPL');
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [marketData, setMarketData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [notificationsOpen, setNotificationsOpen] = useState<boolean>(false);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
const [portfolioOpen, setPortfolioOpen] = useState<boolean>(false);
const [loginOpen, setLoginOpen] = useState(true); // show on load
const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    const mockStockData: StockData[] = [
      {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        price: 175.43,
        change: 2.34,
        changePercent: 1.35,
        volume: 45678900,
        marketCap: 2750000000000,
        pe: 28.5,
        dividend: 0.92,
        sector: 'Technology'
      },
      {
        symbol: 'GOOGL',
        name: 'Alphabet Inc.',
        price: 142.56,
        change: -1.23,
        changePercent: -0.85,
        volume: 23456700,
        marketCap: 1800000000000,
        pe: 25.2,
        dividend: 0.00,
        sector: 'Technology'
      },
      {
        symbol: 'MSFT',
        name: 'Microsoft Corporation',
        price: 378.85,
        change: 5.67,
        changePercent: 1.52,
        volume: 34567800,
        marketCap: 2800000000000,
        pe: 32.1,
        dividend: 2.72,
        sector: 'Technology'
      },
      {
        symbol: 'TSLA',
        name: 'Tesla, Inc.',
        price: 248.42,
        change: -8.91,
        changePercent: -3.46,
        volume: 67890100,
        marketCap: 790000000000,
        pe: 45.8,
        dividend: 0.00,
        sector: 'Automotive'
      },
      {
        symbol: 'AMZN',
        name: 'Amazon.com, Inc.',
        price: 145.24,
        change: 3.21,
        changePercent: 2.26,
        volume: 56789000,
        marketCap: 1500000000000,
        pe: 60.3,
        dividend: 0.00,
        sector: 'Consumer Discretionary'
      },
      {
        symbol: 'NVDA',
        name: 'NVIDIA Corporation',
        price: 485.09,
        change: 12.45,
        changePercent: 2.64,
        volume: 45678900,
        marketCap: 1200000000000,
        pe: 75.2,
        dividend: 0.16,
        sector: 'Technology'
      }
    ];

    const mockMarketData: MarketData = {
      sp500: { value: 4567.89, change: 23.45, changePercent: 0.52 },
      nasdaq: { value: 14234.56, change: -45.67, changePercent: -0.32 },
      dow: { value: 34567.89, change: 123.45, changePercent: 0.36 },
      vix: { value: 18.45, change: -1.23, changePercent: -6.25 }
    };

    // Simulate loading
    setTimeout(() => {
      setStockData(mockStockData);
      setMarketData(mockMarketData);
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading Market Data...</p>
        </motion.div>
      </div>
    );
  }

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
    <Header 
  onNotificationsToggle={() => setNotificationsOpen(!notificationsOpen)}
  onSettingsToggle={() => setSettingsOpen(!settingsOpen)}
  onProfileToggle={() => setProfileOpen(!profileOpen)}
  // onPortfolioClick={() => setPortfolioOpen(true)}
  onPortfolioClick={() => {
  if (!isLoggedIn) {
    setLoginOpen(true); // force login
  } else {
    setPortfolioOpen(true);
  }
}}

    hideActions={portfolioOpen} // 👈 KEY LINE

/>

 <LoginModal
  isOpen={loginOpen}
  onClose={() => setLoginOpen(false)}
  onLoginSuccess={() => {
    setIsLoggedIn(true);
    setPortfolioOpen(true); // ✅ AUTO OPEN PORTFOLIO
  }}
/>

{/* <LoginPage/> */}

<main className="container mx-auto py-6">
  {portfolioOpen ? (
    <PortfolioPage onClose={() => setPortfolioOpen(false)} />
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-4 gap-6"
    >
      {/* Market Overview */}
      <div className="lg:col-span-4">
        <MarketOverview data={marketData} />
      </div>

      {/* Main Content */}
      <div className="lg:col-span-3 space-y-6">
        <StockChart symbol={selectedStock} />
        <StockGrid 
          stocks={stockData} 
          onStockSelect={setSelectedStock}
          selectedStock={selectedStock}
        />
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <Watchlist stocks={stockData} onStockSelect={setSelectedStock} />
      </div>
    </motion.div>
  )}
</main>

      {/* Notifications Panel - Rendered at root level */}
      <Notifications 
        isOpen={notificationsOpen} 
        onClose={() => setNotificationsOpen(false)} 
      />

      {/* Settings Panel - Rendered at root level */}
      <Settings 
        isOpen={settingsOpen} 
        onClose={() => setSettingsOpen(false)} 
      />

      {/* Profile Panel - Rendered at root level */}
      <Profile 
        isOpen={profileOpen} 
        onClose={() => setProfileOpen(false)} 
      />
    </div>
  );
};

export default App; 