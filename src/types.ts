export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  pe: number;
  dividend: number;
  sector: string;
}

export interface MarketIndex {
  value: number;
  change: number;
  changePercent: number;
}

export interface MarketData {
  sp500: MarketIndex;
  nasdaq: MarketIndex;
  dow: MarketIndex;
  vix: MarketIndex;
}

export interface ChartDataPoint {
  date: string;
  price: number;
  volume: number;
}

export interface ChartData {
  symbol: string;
  data: ChartDataPoint[];
} 