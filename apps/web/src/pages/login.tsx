import { useState } from 'react';
import { KeyRound, UserRound } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    console.log('Login attempt with:', { username, password });

    // Simulasi validasi login (ganti dengan logika autentikasi sebenarnya)
    const isRegistered = false; // Ganti dengan logika pengecekan akun terdaftar

    if (!isRegistered) {
      setErrorMessage('Account not registered. Please contact your proctor for assistance.');
      setShowError(true);
    } else {
      setShowError(false);
      // Proses login berhasil
    }
  };

  return (
    <div className="relative flex h-screen w-full flex-row">
      <div className="bg-primary flex h-full w-1/2 flex-col items-center justify-center gap-2">
        <div className="p-8 text-center text-primary-content">
          <h1 className="text-primary-content mb-4 text-4xl font-bold">Welcome!</h1>
          <p className="max-w-md text-xl">Log in to your account to access your exam :)</p>
        </div>
      </div>

      <div className="bg-base-300 flex h-full w-1/2 flex-col items-center justify-center gap-1">
        <div className="w-4/5 max-w-md rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold text-primary">Login</h2>

          {showError && (
            <div className="mb-4 rounded border border-warning bg-red-100 p-3 text-warning">{errorMessage}</div>
          )}

          <div className="space-y-4">
            <div>
              <label className="input validator w-full" htmlFor="username">
                <UserRound className="h-5 w-5 opacity-50" />
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
              <p className="validator-hint mt-1 text-xs text-primary-content">
                Must be 3 to 30 characters containing only letters, numbers or dash
              </p>
            </div>

            <div>
              <label className="input validator w-full">
                <KeyRound className="h-5 w-5 opacity-50" />
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
              <p className="validator-hint mt-1 text-xs text-gray-500">
                Must be more than 8 characters with number, lowercase and uppercase letter
              </p>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-primary" />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <a className="inline-block align-baseline text-sm font-bold text-primary hover:text-blue-700" href="#">
                Forgot Password?
              </a>
            </div>

            <div className="flex items-center justify-center pt-2">
              <button className="btn btn-primary w-full rounded-2xl px-4 py-2 font-bold" onClick={handleSubmit}>
                Sign In
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <span className="font-bold text-blue-500">
              <a href="#">Please contact your proctor.</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
