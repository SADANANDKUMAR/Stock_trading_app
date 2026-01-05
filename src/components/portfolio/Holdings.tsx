import { useMemo, useState } from "react";
import { Holding, StockData, TableColumn } from "../../types";
import { Card, CardContent } from "../ui/Card";
import { CustomTable } from "../ui/CustomTable";

const holdingColumns: TableColumn<Holding>[] = [
  {
    key: "symbol",
    label: "Symbol",
    sortable: true,
    render: (h) => <div className="font-semibold text-white">{h.symbol}</div>,
  },
  {
    key: "quantity",
    label: "Qty",
    sortable: true,
    render: (h) => <div className="text-white">{h.quantity}</div>,
  },
  {
    key: "avgBuyPrice",
    label: "Avg Price",
    sortable: true,
    render: (h) => (
      <div className="text-white">${h.avgBuyPrice.toFixed(2)}</div>
    ),
  },
  {
    key: "price",
    label: "LTP",
    sortable: true,
    render: (h) => <div className="text-white">${h.price.toFixed(2)}</div>,
  },
  {
    key: "pnl",
    label: "P&L",
    sortable: true,
    render: (h) => (
      <span className={h.pnl >= 0 ? "text-green-400" : "text-red-400"}>
        {h.pnl >= 0 ? "+" : ""}
        {h.pnl.toFixed(2)}
      </span>
    ),
  },
];

// 🔹 Dummy holdings data (replace with API later)
const HOLDINGS_DATA: Holding[] = [
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

    quantity: 10,
    avgBuyPrice: 165,
    investedValue: 1650,
    currentValue: 1923.2,
    pnl: 273.2,
    pnlPercent: 16.55,
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

    quantity: 5,
    avgBuyPrice: 390,
    investedValue: 1950,
    currentValue: 2075.55,
    pnl: 125.55,
    pnlPercent: 6.44,
  },
];

export default function Holdings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStock, setSelectedStock] = useState<string>("");

  const filteredHoldings = useMemo(() => {
    if (!searchTerm) return HOLDINGS_DATA;

    const term = searchTerm.toLowerCase();

    return HOLDINGS_DATA.filter(
      (s) =>
        s.symbol.toLowerCase().includes(term) ||
        s.name.toLowerCase().includes(term) ||
        s.sector.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <Card className="mb-6 bg-white/10 border-white/20 text-white">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Holdings</h2>

          <input
            type="text"
            placeholder="Search holdings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg
                       text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        <CustomTable
          data={filteredHoldings}
          columns={holdingColumns}
          rowKey={(h) => h.symbol}
          selectedRowKey={selectedStock}
          onRowClick={(h) => setSelectedStock(h.symbol)}
        />
      </CardContent>
    </Card>
  );
}
