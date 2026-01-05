import { Eye, Plus } from "lucide-react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import PortfolioTabs from "./PortfolioTabs";
import { useState } from "react";
import AddFundsDrawer from "../AddFundsDrawer";
import WithdrawDrawer from "../WithdrawDrawer";

interface PortfolioPageProps {
  onClose: () => void;
}

export default function PortfolioPage({ onClose }: PortfolioPageProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-6 text-white">
        <h1 className="text-2xl font-semibold">Portfolio</h1>

        {/* BACK BUTTON */}
        <button
          onClick={onClose}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm"
        >
          ← Back
        </button>
      </header>

      {/* Wallet Card */}

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* 1️⃣ Stocks Summary Card */}
        <Card className="bg-white/10 border-white/20 text-white">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              📊 Stocks
            </h3>

            <div className="flex justify-between text-sm opacity-80">
              <span>Current Value</span>
              <span className="font-semibold text-white">₹ 2,58,420</span>
            </div>

            <div className="flex justify-between text-sm opacity-80">
              <span>Invested</span>
              <span className="font-semibold text-white">₹ 2,40,000</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="opacity-80">P&amp;L</span>
              <span className="font-semibold text-green-400">
                +₹ 18,420 (+7.6%)
              </span>
            </div>
          </CardContent>
        </Card>

        {/* 2️⃣ Wallet Card */}
        <Card className="bg-white/10 border-white/20 text-white">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              💼 Wallet
            </h3>

            <div className="flex justify-between text-sm opacity-80">
              <span>Available Funds</span>
              <span className="font-semibold text-white">₹ 2,400</span>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                className="bg-green-500 hover:bg-green-600 flex items-center justify-center gap-2 flex-1"
                onClick={() => setDrawerOpen(true)}
              >
                <Plus className="w-4 h-4" />
                <span>Add Funds</span>
              </Button>

              <Button
                variant="outline"
                className="flex-1 border-red-400 text-red-400 hover:bg-red-500/10"
                onClick={() => setWithdrawOpen(true)}
              >
                Withdraw
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <AddFundsDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      <WithdrawDrawer
        isOpen={withdrawOpen}
        onClose={() => setWithdrawOpen(false)}
      />

      <section>
        <PortfolioTabs />
      </section>
    </div>
  );
}
