// import { useState } from "react";

// interface AuthPageProps {
//   onAuthSuccess: () => void;
// }

// export default function AuthPage({ onAuthSuccess }: AuthPageProps) {
//   const [mode, setMode] = useState<"login" | "signup">("login");
//   const [error, setError] = useState("");

//   // COMMON
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // SIGN UP FIELDS
//   const [fullName, setFullName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [panNumber, setPanNumber] = useState("");
//   const [aadhaar, setAadhaar] = useState("");

//   // STATIC USER DATA
//   const STATIC_USER = {
//     email: "admin@demo.com",
//     password: "admin123",
//     fullName: "Anja Chary",
//     phoneNumber: "9381294577",
//     panNumber: "BBBPC4880D",
//     aadhaar: "368404752636",
//   };

//   const handleLogin = () => {
//     setError("");

//     if (
//       email === STATIC_USER.email &&
//       password === STATIC_USER.password
//     ) {
//       onAuthSuccess();
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   const handleSignup = () => {
//     setError("");

//     if (
//       email &&
//       password &&
//       fullName &&
//       phoneNumber &&
//       panNumber &&
//       aadhaar
//     ) {
//       // Static success
//       onAuthSuccess();
//     } else {
//       setError("Please fill all fields");
//     }
//   };

//   return (
//     <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600">

//       {/* LEFT — ILLUSTRATION */}
//       <div className="hidden md:flex items-center justify-center p-12">
//         <img
//           src="/auth-illustration.jpg"
//           alt="Stock analytics"
//           className="max-w-full h-auto"
//         />
//       </div>

//       {/* RIGHT — AUTH */}
//       <div className="flex items-center justify-center p-6">
//         <div className="w-full max-w-md bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8 text-white">

//           {/* Toggle */}
//           <div className="flex mb-6 border-b border-white/20">
//             <button
//               onClick={() => setMode("login")}
//               className={`flex-1 py-2 font-medium transition ${
//                 mode === "login"
//                   ? "border-b-2 border-green-400 text-white"
//                   : "text-white/60"
//               }`}
//             >
//               Sign In
//             </button>
//             <button
//               onClick={() => setMode("signup")}
//               className={`flex-1 py-2 font-medium transition ${
//                 mode === "signup"
//                   ? "border-b-2 border-blue-400 text-white"
//                   : "text-white/60"
//               }`}
//             >
//               Sign Up
//             </button>
//           </div>

//           {/* ERROR */}
//           {error && (
//             <p className="text-red-400 text-sm mb-4">{error}</p>
//           )}

//           {/* LOGIN */}
//           {mode === "login" && (
//             <>
//               <h2 className="text-2xl font-semibold mb-6">
//                 Welcome Back
//               </h2>

//               <input
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full mb-4 px-4 py-3 rounded bg-white/10 border border-white/20"
//               />

//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full mb-6 px-4 py-3 rounded bg-white/10 border border-white/20"
//               />

//               <button
//                 onClick={handleLogin}
//                 className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold"
//               >
//                 Sign In
//               </button>
//             </>
//           )}

//           {/* SIGN UP */}
//           {mode === "signup" && (
//             <>
//               <h2 className="text-2xl font-semibold mb-6">
//                 Create Account
//               </h2>

//               <input
//                 placeholder="Full Name"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 className="w-full mb-3 px-4 py-3 rounded bg-white/10 border border-white/20"
//               />

//               <input
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full mb-3 px-4 py-3 rounded bg-white/10 border border-white/20"
//               />

//               <input
//                 placeholder="Phone Number"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 className="w-full mb-3 px-4 py-3 rounded bg-white/10 border border-white/20"
//               />

//               <input
//                 placeholder="PAN Number"
//                 value={panNumber}
//                 onChange={(e) => setPanNumber(e.target.value)}
//                 className="w-full mb-3 px-4 py-3 rounded bg-white/10 border border-white/20"
//               />

//               <input
//                 placeholder="Aadhaar Number"
//                 value={aadhaar}
//                 onChange={(e) => setAadhaar(e.target.value)}
//                 className="w-full mb-3 px-4 py-3 rounded bg-white/10 border border-white/20"
//               />

//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full mb-6 px-4 py-3 rounded bg-white/10 border border-white/20"
//               />

//               <button
//                 onClick={handleSignup}
//                 className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold"
//               >
//                 Create Account
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { useToast } from "./ui/ToastProvider";

interface AuthPageProps {
  onAuthSuccess: () => void;
}

export default function AuthPage({ onAuthSuccess }: AuthPageProps) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [aadhaar, setAadhaar] = useState("");

  const STATIC_USER = {
    email: "abc",
    password: "12345",
  };

    const { showToast } = useToast();
  
  const handleLogin = () => {
    if (email === STATIC_USER.email && password === STATIC_USER.password) {
      showToast("Login successful", "success");
      onAuthSuccess();
    } else {
      showToast("Invalid email or password", "error");
    }
  };

//   const handleLogin = () => {
//     setError("");
//     if (email === STATIC_USER.email && password === STATIC_USER.password) {
//       onAuthSuccess();
//     } else {
//       setError("Invalid email or password");
//     }
//   };

  const handleSignup = () => {
    if (email && password && fullName && phoneNumber && panNumber && aadhaar) {
      onAuthSuccess();
    } else {
      setError("Please fill all fields");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 px-4">

      {/* OUTER CARD */}
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-xl 
                      border border-white/20 rounded-3xl overflow-hidden 
                      grid grid-cols-1 md:grid-cols-2 h-[600px]">

        {/* LEFT – IMAGE */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500">
          <img
            src="/auth-illustration.jpg"
            alt="Analytics Illustration"
            className="max-h-[85%] w-auto"
          />
        </div>

        {/* RIGHT – AUTH */}
        <div className="flex flex-col justify-center px-10 text-white">

          {/* TOGGLE */}
          <div className="flex mb-8 border-b border-white/20">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2 font-semibold ${
                mode === "login"
                  ? "border-b-2 border-green-400"
                  : "opacity-60"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-2 font-semibold ${
                mode === "signup"
                  ? "border-b-2 border-blue-400"
                  : "opacity-60"
              }`}
            >
              Sign Up
            </button>
          </div>

          {error && (
            <p className="text-red-400 text-sm mb-4">{error}</p>
          )}

          {/* LOGIN */}
          {mode === "login" && (
            <>
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 px-4 py-3 rounded-full bg-white/10 border border-white/20 focus:outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-6 px-4 py-3 rounded-full bg-white/10 border border-white/20 focus:outline-none"
              />

              <button
                onClick={handleLogin}
                className="bg-green-500 hover:bg-green-600 py-3 rounded-full font-semibold"
              >
                Sign In
              </button>
            </>
          )}

          {/* SIGN UP */}
          {mode === "signup" && (
            <>
              <input
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mb-3 px-4 py-3 rounded-full bg-white/10 border border-white/20"
              />

              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-3 px-4 py-3 rounded-full bg-white/10 border border-white/20"
              />

              <input
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mb-3 px-4 py-3 rounded-full bg-white/10 border border-white/20"
              />

              <input
                placeholder="PAN Number"
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value)}
                className="mb-3 px-4 py-3 rounded-full bg-white/10 border border-white/20"
              />

              <input
                placeholder="Aadhaar Number"
                value={aadhaar}
                onChange={(e) => setAadhaar(e.target.value)}
                className="mb-3 px-4 py-3 rounded-full bg-white/10 border border-white/20"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-6 px-4 py-3 rounded-full bg-white/10 border border-white/20"
              />

              <button
                onClick={handleSignup}
                className="bg-blue-500 hover:bg-blue-600 py-3 rounded-full font-semibold"
              >
                Create Account
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
