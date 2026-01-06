// import { X } from "lucide-react";

// interface LoginModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onLoginSuccess: () => void;
// }

// export default function LoginModal({
//   isOpen,
//   onClose,
//   onLoginSuccess,
// }: LoginModalProps) {
//   if (!isOpen) return null;

//   const handleLogin = () => {
//     // STATIC LOGIN
//     onLoginSuccess();
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
//       <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 w-full max-w-md text-white relative">

//         {/* ❌ Close */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded"
//         >
//           <X />
//         </button>

//         <h2 className="text-2xl font-semibold mb-6 text-center">
//           Login Required
//         </h2>

//         <input
//           placeholder="Email"
//           className="w-full mb-4 px-4 py-3 rounded bg-white/10 border border-white/20"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-6 px-4 py-3 rounded bg-white/10 border border-white/20"
//         />

//         <button
//           onClick={handleLogin}
//           className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold"
//         >
//           Login
//         </button>

//         <p className="text-xs opacity-70 mt-4 text-center">
//           Demo login (static)
//         </p>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { X } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export default function LoginModal({
  isOpen,
  onClose,
  onLoginSuccess,
}: LoginModalProps) {
  const [step, setStep] = useState<"login" | "otp">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  // STATIC CREDENTIALS
  const STATIC_EMAIL = "admin@demo.com";
  const STATIC_PASSWORD = "admin123";
  const STATIC_OTP = "123456";

  if (!isOpen) return null;

  const handleLogin = () => {
    setError("");

    if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
      setStep("otp");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleVerifyOtp = () => {
    setError("");

    if (otp === STATIC_OTP) {
      onLoginSuccess(); // ✅ mark logged in
      onClose();        // ✅ close modal
    } else {
      setError("Invalid OTP");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8 w-full max-w-md text-white relative">

        {/* ❌ CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg"
        >
          <X />
        </button>

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
              className="w-full mb-4 px-4 py-3 rounded-lg bg-white/10 border border-white/20"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-6 px-4 py-3 rounded-lg bg-white/10 border border-white/20"
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
              className="w-full mb-6 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-center tracking-widest"
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
