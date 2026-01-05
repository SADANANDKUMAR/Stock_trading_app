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

export type TabKey = string;

export interface TabItem<T extends TabKey> {
  key: T;
  label: string;
  disabled?: boolean;
}

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
}

export interface DataTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  rowKey: (row: T) => string;
  onRowClick?: (row: T) => void;
  selectedRowKey?: string;
}

export interface Holding extends StockData {
  quantity: number;
  avgBuyPrice: number;
  investedValue: number;
  currentValue: number;
  pnl: number;
  pnlPercent: number;
}

export type OrderSide = "BUY" | "SELL";
export type OrderStatus = "COMPLETED" | "CANCELLED" | "PENDING";

export interface Order {
  id: string;
  symbol: string;
  side: OrderSide;
  quantity: number;
  price: number;
  status: OrderStatus;
  orderDate: string;
}

export type TransactionType = "CREDIT" | "DEBIT";

export interface Transaction {
  id: string;
  description: string;
  type: TransactionType;
  amount: number;
  date: string;
}

export interface Watchlist {
  id: string;
  name: string;
  stocks: StockData[];
}