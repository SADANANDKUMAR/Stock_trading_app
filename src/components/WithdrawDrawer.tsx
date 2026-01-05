import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface WithdrawDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WithdrawDrawer({
  isOpen,
  onClose,
}: WithdrawDrawerProps) {
  const [mode, setMode] = useState<"instant" | "regular">("instant");

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full sm:w-[380px] bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 z-50 text-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
          >
            <div className="p-6 flex flex-col h-full">

              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Withdraw Funds</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg"
                >
                  <X />
                </button>
              </div>

              {/* Withdraw Type */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => setMode("instant")}
                  className={`w-full px-4 py-3 rounded-lg text-left border transition
                    ${
                      mode === "instant"
                        ? "bg-white/20 border-white"
                        : "bg-white/10 border-white/20"
                    }`}
                >
                  <p className="font-semibold">⚡ Instant Withdraw</p>
                  <p className="text-sm opacity-80">
                    Up to ₹2,00,000 • Instant credit
                  </p>
                </button>

                <button
                  onClick={() => setMode("regular")}
                  className={`w-full px-4 py-3 rounded-lg text-left border transition
                    ${
                      mode === "regular"
                        ? "bg-white/20 border-white"
                        : "bg-white/10 border-white/20"
                    }`}
                >
                  <p className="font-semibold">⏳ Regular Withdraw</p>
                  <p className="text-sm opacity-80">
                    Credit in 24–48 hours
                  </p>
                </button>
              </div>

              {/* Amount */}
              <div className="mb-6">
                <label className="text-sm opacity-80">Enter Amount</label>
                <input
                  type="number"
                  placeholder="₹ 1,000"
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
                />
              </div>

              {/* CTA */}
              <button className="mt-auto bg-red-500 hover:bg-red-600 py-3 rounded-lg font-semibold">
                Withdraw
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
