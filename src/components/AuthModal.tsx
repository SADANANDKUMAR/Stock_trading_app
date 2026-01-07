import { useState } from "react";
import { X } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: () => void;
}

export default function AuthModal({
  isOpen,
  onClose,
  onAuthSuccess,
}: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [error, setError] = useState("");

  // LOGIN STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // SIGNUP STATE
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [aadhaar, setAadhaar] = useState("");

  // STATIC USER (REGISTERED)
  const STATIC_USER = {
    email: "abcdefg@gmail.com",
    password: "apexon@trading",
    fullName: "Anja Chary",
    phoneNumber: "9381294577",
    panNumber: "BBBPC4880D",
    aadhaar: "368404752636",
  };

  if (!isOpen) return null;

  const handleLogin = () => {
    setError("");

    if (
      email === STATIC_USER.email &&
      password === STATIC_USER.password
    ) {
      onAuthSuccess();
      onClose();
    } else {
      setError("Invalid email or password");
    }
  };

  const handleSignup = () => {
    setError("");

    if (
      email &&
      password &&
      fullName &&
      phoneNumber &&
      panNumber &&
      aadhaar
    ) {
      // STATIC SUCCESS
      onAuthSuccess();
      onClose();
    } else {
      setError("Please fill all fields");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 w-full max-w-lg text-white relative">

        {/* ❌ CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg"
        >
          <X />
        </button>

        {/* MODE SWITCH */}
        <div className="flex mb-6 border-b border-white/20">
          {["login", "signup"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m as any)}
              className={`flex-1 py-2 font-medium ${
                mode === m
                  ? "text-white border-b-2 border-green-400"
                  : "text-white/60"
              }`}
            >
              {m === "login" ? "Sign In" : "Sign Up"}
            </button>
          ))}
        </div>

        {/* LOGIN */}
        {mode === "login" && (
          <>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 px-4 py-3 rounded bg-white/10 border border-white/20"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-6 px-4 py-3 rounded bg-white/10 border border-white/20"
            />

            {error && (
              <p className="text-red-400 text-sm mb-4">{error}</p>
            )}

            <button
              onClick={handleLogin}
              className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold"
            >
              Sign In
            </button>
          </>
        )}

        {/* SIGNUP */}
        {mode === "signup" && (
          <>
            <input
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full mb-3 px-4 py-3 rounded bg-white/10 border border-white/20"
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-3 px-4 py-3 rounded bg-white/10 border border-white/20"
            />

            <input
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full mb-3 px-4 py-3 rounded bg-white/10 border border-white/20"
            />

            <input
              placeholder="PAN Number"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
              className="w-full mb-3 px-4 py-3 rounded bg-white/10 border border-white/20"
            />

            <input
              placeholder="Aadhaar Number"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value)}
              className="w-full mb-3 px-4 py-3 rounded bg-white/10 border border-white/20"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-6 px-4 py-3 rounded bg-white/10 border border-white/20"
            />

            {error && (
              <p className="text-red-400 text-sm mb-4">{error}</p>
            )}

            <button
              onClick={handleSignup}
              className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold"
            >
              Create Account
            </button>
          </>
        )}
      </div>
    </div>
  );
}
