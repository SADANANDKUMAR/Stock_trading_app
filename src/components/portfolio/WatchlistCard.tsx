import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Card, CardContent } from "../ui/Card";
import { CustomTable } from "../ui/CustomTable";
import { Watchlist, StockData, TableColumn } from "../../types";

export const watchlistStockColumns: TableColumn<StockData>[] = [
  {
    key: "symbol",
    label: "Symbol",
    sortable: true,
    render: (s) => (
      <span className="font-semibold text-white">{s.symbol}</span>
    ),
  },
  {
    key: "price",
    label: "LTP",
    sortable: true,
    render: (s) => `$${s.price.toFixed(2)}`,
  },
  {
    key: "changePercent",
    label: "Change %",
    sortable: true,
    render: (s) => (
      <span
        className={
          s.changePercent >= 0
            ? "text-green-400"
            : "text-red-400"
        }
      >
        {s.changePercent >= 0 ? "+" : ""}
        {s.changePercent.toFixed(2)}%
      </span>
    ),
  },
  {
    key: "sector",
    label: "Sector",
    render: (s) => (
      <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
        {s.sector}
      </span>
    ),
  },
];

interface WatchlistCardProps {
  watchlist: Watchlist;
  onStockSelect?: (symbol: string) => void;
}

export function WatchlistCard({
  watchlist,
  onStockSelect,
}: WatchlistCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [selectedStock, setSelectedStock] = useState<string>("");

  const handleRowClick = (stock: StockData) => {
    setSelectedStock(stock.symbol);
    onStockSelect?.(stock.symbol);
  };

  return (
    <Card className="bg-white/10 border-white/20 text-white">
      <CardContent className="p-4">
        {/* Header */}
        <button
          onClick={() => setExpanded((p) => !p)}
          className="w-full flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            {expanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
            <h3 className="text-base font-semibold">
              {watchlist.name}
            </h3>
            <span className="text-sm text-gray-400">
              ({watchlist.stocks.length})
            </span>
          </div>
        </button>

        {/* Expandable Content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-4 overflow-hidden"
            >
              <CustomTable
                data={watchlist.stocks}
                columns={watchlistStockColumns}
                rowKey={(s) => s.symbol}
                selectedRowKey={selectedStock}
                onRowClick={handleRowClick}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
