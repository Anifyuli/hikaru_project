import { Menu } from 'lucide-react';
import HikaruLogo from '../../assets/img/logo.png';

export default function AdminDashboardPage() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay lg:hidden" />
        <aside className="menu bg-base-200 min-h-full w-72 px-6 py-4">
          <div className="my-4 flex items-center gap-3 px-2">
            <img src={HikaruLogo} alt="Hikaru Exam Service logo" className="inline size-14" />
            <h2 className="text-center text-xl font-bold">Hikaru Exam Dashboard</h2>
          </div>
          <ul>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </aside>
      </div>

      <div className="drawer-content flex flex-col">
        {/* Mobile topbar */}
        <div className="navbar bg-base-300 lg:hidden">
          <div className="flex-none">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <Menu />
            </label>
          </div>
          <div className="flex-1 px-2 text-lg font-semibold">Hikaru Dashboard</div>
        </div>

        {/* Main content */}
        <main className="mt-4 px-8 py-4">
          <h1 className="text-2xl font-bold">Hello, Admin!</h1>
          <p className="mt-2 text-gray-500">Welcome to the dashboard.</p>
        </main>
      </div>
    </div>
  );
}
