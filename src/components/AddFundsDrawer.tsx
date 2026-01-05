import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface AddFundsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddFundsDrawer({
  isOpen,
  onClose,
}: AddFundsDrawerProps) {
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
                <h2 className="text-xl font-semibold">Add Funds</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg"
                >
                  <X />
                </button>
              </div>

              {/* Amount */}
              <div className="mb-6">
                <label className="text-sm opacity-80">Enter Amount</label>
                <input
                  type="number"
                  placeholder="₹ 500"
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
                />
              </div>

              {/* Payment Options */}
              <div className="space-y-3 flex-1">
                {[
                  "UPI (GPay / PhonePe)",
                  "Net Banking",
                  "Debit Card",
                  "Wallets",
                ].map((method) => (
                  <button
                    key={method}
                    className="w-full text-left px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition"
                  >
                    {method}
                  </button>
                ))}
              </div>

              {/* CTA */}
              <button className="mt-6 bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold">
                Proceed to Pay
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
