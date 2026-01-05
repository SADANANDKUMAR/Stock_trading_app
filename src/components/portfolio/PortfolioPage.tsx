import { Eye, Plus } from "lucide-react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";

interface PortfolioPageProps {
    onClose: () => void;
}

export default function PortfolioPage({ onClose }: PortfolioPageProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 p-6">

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
            {/* <Card className="mb-6 bg-white/10 border-white/20 text-white">
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm opacity-80">Available Balance</p>
            <div className="flex items-center gap-2 text-xl font-bold">
              ₹ ****** <Eye className="w-4 h-4" />
            </div>
          </div>

          <div>
            <p className="text-sm opacity-80">Invested</p>
            <p className="text-xl font-bold">₹ 2,40,000</p>
          </div>

          <div>
            <p className="text-sm opacity-80">Total P&L</p>
            <p className="text-xl font-bold text-green-400">
              +₹ 18,420 (+7.6%)
            </p>
          </div>

          <div className="flex gap-3">
            <Button className="bg-green-500 hover:bg-green-600 flex-1">
              <Plus className="w-4 h-4 mr-1" />
              Add Funds
            </Button>
            <Button variant="outline" className="flex-1">
              Withdraw
            </Button>
          </div>
        </CardContent>
      </Card> */}
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

                            <Button className="bg-green-500 hover:bg-green-600 flex items-center justify-center gap-2 flex-1">
                                <Plus className="w-4 h-4" />
                                <span>Add Funds</span>
                            </Button>


                            <Button
                                variant="outline"
                                className="flex-1 border-red-400 text-red-400 hover:bg-red-500/10"
                            >
                                Withdraw
                            </Button>
                        </div>

                    </CardContent>
                </Card>

            </div>

            {/* Watchlists */}
            <section className="mb-6">
                <h2 className="text-white mb-3 font-semibold">Watchlists</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {["Tech Stocks", "Long Term", "Intraday"].map((list) => (
                        <Card key={list} className="bg-white/10 border-white/20 text-white">
                            <CardContent className="p-4">
                                <h3 className="font-semibold mb-2">{list}</h3>
                                <p className="text-sm opacity-80">3 Stocks</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Holdings */}
            <section className="mb-6">
                <h2 className="text-white mb-3 font-semibold">Holdings</h2>
                <div className="grid gap-4">
                    {[{ name: "AAPL", pnl: "+3.2%" }, { name: "GOOGL", pnl: "-1.1%" }].map(
                        (stock) => (
                            <Card
                                key={stock.name}
                                className="bg-white/10 border-white/20 text-white"
                            >
                                <CardContent className="p-4 flex justify-between items-center">
                                    <div>
                                        <h3 className="font-semibold">{stock.name}</h3>
                                        <p className="text-sm opacity-80">
                                            Qty: 10 | Avg: ₹150
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p
                                            className={
                                                stock.pnl.startsWith("+")
                                                    ? "text-green-400"
                                                    : "text-red-400"
                                            }
                                        >
                                            {stock.pnl}
                                        </p>
                                        <div className="flex gap-2 mt-2">
                                            <Button>Buy</Button>
                                            <Button variant="outline">Sell</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    )}
                </div>
            </section>

            {/* Insights */}
            <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-4">
                    <p>
                        📈 Top performer today:{" "}
                        <span className="font-semibold">AAPL (+3.2%)</span>
                    </p>
                    <p className="opacity-80 text-sm">
                        You are heavily invested in Tech stocks
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
