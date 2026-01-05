import { useState } from "react";
import { Card, CardContent } from "../ui/Card";
import { CustomTable } from "../ui/CustomTable";
import { Transaction, TableColumn } from "../../types";

const TRANSACTIONS_DATA: Transaction[] = [
  {
    id: "TXN-001",
    description: "Funds Added",
    type: "CREDIT",
    amount: 50000,
    date: "2024-12-01",
  },
  {
    id: "TXN-002",
    description: "Buy AAPL",
    type: "DEBIT",
    amount: 1650,
    date: "2024-12-02",
  },
  {
    id: "TXN-003",
    description: "Brokerage Charges",
    type: "DEBIT",
    amount: 25,
    date: "2024-12-03",
  },
];

const transactionColumns: TableColumn<Transaction>[] = [
  {
    key: "description",
    label: "Description",
    sortable: true,
  },
  {
    key: "type",
    label: "Type",
    sortable: true,
    render: (t) => (
      <span
        className={
          t.type === "CREDIT" ? "text-green-400" : "text-red-400"
        }
      >
        {t.type}
      </span>
    ),
  },
  {
    key: "amount",
    label: "Amount",
    sortable: true,
    render: (t) => (
      <span
        className={
          t.type === "CREDIT" ? "text-green-400" : "text-red-400"
        }
      >
        ₹{t.amount.toFixed(2)}
      </span>
    ),
  },
  {
    key: "date",
    label: "Date",
    sortable: true,
  },
];

export default function Transactions() {
  const [selectedTxn, setSelectedTxn] = useState<string>("");

  return (
    <Card className="mb-6 bg-white/10 border-white/20 text-white">
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-4">Transactions</h2>

        <CustomTable
          data={TRANSACTIONS_DATA}
          columns={transactionColumns}
          rowKey={(t) => t.id}
          selectedRowKey={selectedTxn}
          onRowClick={(t) => setSelectedTxn(t.id)}
        />
      </CardContent>
    </Card>
  );
}
