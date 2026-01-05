import { WatchlistCard } from "./WatchlistCard";
// import { Watchlist } from "../../types";
import { StockData, Watchlist as WatchlistType } from "../../types";

// Dummy stock data
const STOCKS: StockData[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 192.32,
    change: 1.2,
    changePercent: 0.63,
    volume: 12000000,
    marketCap: 3000000000000,
    pe: 28.1,
    dividend: 0.92,
    sector: "Technology",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp",
    price: 415.11,
    change: -2.4,
    changePercent: -0.58,
    volume: 8500000,
    marketCap: 3100000000000,
    pe: 32.4,
    dividend: 1.12,
    sector: "Technology",
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 255.4,
    change: 3.8,
    changePercent: 1.51,
    volume: 9800000,
    marketCap: 800000000000,
    pe: 55.6,
    dividend: 0,
    sector: "Automobile",
  },
];

const WATCHLISTS: WatchlistType[] = [
  {
    id: "wl-1",
    name: "Tech Stocks",
    stocks: [STOCKS[0], STOCKS[1]],
  },
  {
    id: "wl-2",
    name: "High Volatility",
    stocks: [STOCKS[2]],
  },
];

export default function Watchlist() {
  return (
    <div className="space-y-4">
      {WATCHLISTS.map((wl) => (
        <WatchlistCard
          key={wl.id}
          watchlist={wl}
          onStockSelect={(symbol) =>
            console.log("Selected:", symbol)
          }
        />
      ))}
    </div>
  );
}

