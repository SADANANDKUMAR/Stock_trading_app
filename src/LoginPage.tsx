import { useState } from "react";

export default function LoginPage() {
  const [step, setStep] = useState<"login" | "otp">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  // STATIC CREDENTIALS
  const STATIC_EMAIL = "admin@demo.com";
  const STATIC_PASSWORD = "admin123";
  const STATIC_OTP = "123456";

  const handleLogin = () => {
    setError("");

    if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
      setStep("otp"); // move to 2FA
    } else {
      setError("Invalid email or password");
    }
  };

  const handleVerifyOtp = () => {
    setError("");

    if (otp === STATIC_OTP) {
      alert("✅ Login Successful");
      // 👉 here you can redirect to dashboard
    } else {
      setError("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600">
      <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8 w-full max-w-md text-white">

        {/* LOGIN STEP */}
        {step === "login" && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Login
            </h2>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-6 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
            />

            {error && (
              <p className="text-red-400 text-sm mb-4">{error}</p>
            )}

            <button
              onClick={handleLogin}
              className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold"
            >
              Login
            </button>

            <p className="text-xs opacity-70 mt-4 text-center">
              Demo: admin@demo.com / admin123
            </p>
          </>
        )}

        {/* OTP STEP */}
        {step === "otp" && (
          <>
            <h2 className="text-2xl font-semibold mb-2 text-center">
              2-Step Verification
            </h2>

            <p className="text-sm opacity-80 mb-6 text-center">
              Enter the 6-digit OTP
            </p>

            <input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="123456"
              className="w-full mb-6 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-center tracking-widest focus:outline-none"
            />

            {error && (
              <p className="text-red-400 text-sm mb-4">{error}</p>
            )}

            <button
              onClick={handleVerifyOtp}
              className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold"
            >
              Verify & Login
            </button>

            <button
              onClick={() => setStep("login")}
              className="mt-4 text-sm text-blue-300 hover:underline block mx-auto"
            >
              ← Back to Login
            </button>

            <p className="text-xs opacity-70 mt-4 text-center">
              Demo OTP: 123456
            </p>
          </>
        )}

      </div>
    </div>
  );
}
