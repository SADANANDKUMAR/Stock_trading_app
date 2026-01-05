import { useMemo, useState } from "react";
import { Card, CardContent } from "../ui/Card";
import { CustomTable } from "../ui/CustomTable";
import { Order, TableColumn } from "../../types";

const ORDER_DATA: Order[] = [
  {
    id: "ORD-001",
    symbol: "AAPL",
    side: "BUY",
    quantity: 10,
    price: 165,
    status: "COMPLETED",
    orderDate: "2024-12-01",
  },
  {
    id: "ORD-002",
    symbol: "MSFT",
    side: "SELL",
    quantity: 5,
    price: 410,
    status: "COMPLETED",
    orderDate: "2024-12-03",
  },
  {
    id: "ORD-003",
    symbol: "TSLA",
    side: "BUY",
    quantity: 3,
    price: 255,
    status: "CANCELLED",
    orderDate: "2024-12-05",
  },
];

const orderColumns: TableColumn<Order>[] = [
  {
    key: "symbol",
    label: "Symbol",
    sortable: true,
    render: (o) => <span className="text-white">{o.symbol}</span>,
  },
  {
    key: "side",
    label: "Side",
    sortable: true,
    render: (o) => (
      <span
        className={
          o.side === "BUY" ? "text-green-400" : "text-red-400"
        }
      >
        {o.side}
      </span>
    ),
  },
  {
    key: "quantity",
    label: "Qty",
    sortable: true,
  },
  {
    key: "price",
    label: "Price",
    sortable: true,
    render: (o) => `$${o.price.toFixed(2)}`,
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
    render: (o) => (
      <span className="px-2 py-1 bg-white/10 rounded text-xs">
        {o.status}
      </span>
    ),
  },
  {
    key: "orderDate",
    label: "Date",
    sortable: true,
  },
];

export default function OrderHistory() {
  const [selectedOrder, setSelectedOrder] = useState<string>("");

  return (
    <Card className="mb-6 bg-white/10 border-white/20 text-white">
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-4">Order History</h2>

        <CustomTable
          data={ORDER_DATA}
          columns={orderColumns}
          rowKey={(o) => o.id}
          selectedRowKey={selectedOrder}
          onRowClick={(o) => setSelectedOrder(o.id)}
        />
      </CardContent>
    </Card>
  );
}
