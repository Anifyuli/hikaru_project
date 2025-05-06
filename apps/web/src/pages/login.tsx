import { useState } from "react";
import { KeyRound, UserRound } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    console.log("Login attempt with:", { username, password });

    // Simulasi validasi login (ganti dengan logika autentikasi sebenarnya)
    const isRegistered = false; // Ganti dengan logika pengecekan akun terdaftar

    if (!isRegistered) {
      setErrorMessage(
        "Account not registered. Please contact your proctor for assistance.",
      );
      setShowError(true);
    } else {
      setShowError(false);
      // Proses login berhasil
    }
  };

  return (
    <div className="relative flex flex-row h-screen w-full">
      <div className="bg-primary w-1/2 h-full flex flex-col gap-2 items-center justify-center">
        <div className="text-center text-white p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
          <p className="text-xl max-w-md">
            Log in to your account to access your exam :)
          </p>
        </div>
      </div>

      <div className="bg-base-300 w-1/2 h-full flex flex-col items-center justify-center gap-1">
        <div className="bg-white p-8 rounded-lg shadow-lg w-4/5 max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Login
          </h2>

          {showError && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {errorMessage}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="input w-full validator" htmlFor="username">
                <UserRound className="opacity-50 w-5 h-5" />
                <input
                  type="text"
                  required
                  placeholder="Username"
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  title="Only letters, numbers or dash"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <p className="validator-hint text-xs text-gray-500 mt-1">
                Must be 3 to 30 characters containing only letters, numbers or
                dash
              </p>
            </div>

            <div>
              <label className="input w-full validator">
                <KeyRound className="opacity-50 w-5 h-5" />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <p className="validator-hint text-xs text-gray-500 mt-1">
                Must be more than 8 characters with number, lowercase and
                uppercase letter
              </p>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-500" />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-700"
                href="#"
              >
                Forgot Password?
              </a>
            </div>

            <div className="flex items-center justify-center pt-2">
              <button
                className="btn btn-primary font-bold py-2 px-4 rounded-2xl w-full"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </div>
          </div>

          <p className="text-center mt-6 text-sm text-gray-600">
            Don't have an account?{" "}
            <span className="text-blue-500 font-bold">
              <a href="#">Please contact your proctor.</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
