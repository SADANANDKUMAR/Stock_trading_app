# Stock Market Dashboard

A beautiful, modern stock market dashboard built with React, TypeScript, and Tailwind CSS. This application provides real-time stock data visualization with an intuitive and responsive user interface.

## Features

- 🎨 **Beautiful UI**: Modern glass morphism design with smooth animations
- 📊 **Interactive Charts**: Real-time stock price charts using Recharts
- 📈 **Market Overview**: Live updates of major market indices (S&P 500, NASDAQ, DOW, VIX)
- 🔍 **Search & Filter**: Advanced search and sorting capabilities for stocks
- ⭐ **Watchlist**: Personal watchlist with favorite stocks
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Real-time Updates**: Simulated real-time data updates
- 🎯 **Quick Actions**: Buy/sell buttons and portfolio management

## Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Recharts** - Beautiful and responsive charts
- **Lucide React** - Modern icon library
- **Headless UI** - Accessible UI components

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stock-market-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── MarketOverview.tsx  # Market indices display
│   ├── StockChart.tsx  # Interactive stock charts
│   ├── StockGrid.tsx   # Stock data table
│   └── Watchlist.tsx   # Sidebar watchlist
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Features in Detail

### Market Overview
- Real-time display of major market indices
- Color-coded indicators for positive/negative changes
- Smooth animations and hover effects

### Stock Charts
- Interactive area charts with gradient fills
- Multiple timeframe options (1D, 1W, 1M, 3M, 1Y)
- Volume indicators
- Responsive design that adapts to screen size

### Stock Grid
- Sortable columns for all stock data
- Search functionality across symbols, names, and sectors
- Real-time price updates with visual indicators
- Click to select stocks for detailed view

### Watchlist
- Personal stock watchlist
- Quick action buttons for trading
- Market news feed
- Starred favorites

## Customization

### Adding Real API Data
To connect to real stock data APIs, replace the mock data in `App.tsx` with actual API calls:

```typescript
// Example with a real API
const fetchStockData = async () => {
  const response = await fetch('https://api.example.com/stocks');
  const data = await response.json();
  setStockData(data);
};
```

### Styling
The application uses Tailwind CSS for styling. You can customize the design by modifying:
- `tailwind.config.js` - Custom colors, animations, and theme
- `src/index.css` - Global styles and custom CSS
- Component-specific Tailwind classes

### Adding New Features
The modular component structure makes it easy to add new features:
1. Create new components in the `components/` directory
2. Add new types to `types.ts`
3. Import and use in `App.tsx`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Recharts](https://recharts.org/) for beautiful chart components
- [Lucide](https://lucide.dev/) for the icon library
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Framer Motion](https://www.framer.com/motion/) for animations 