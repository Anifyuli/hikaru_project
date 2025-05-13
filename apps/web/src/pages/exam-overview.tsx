import { useState } from 'react';
import OverviewSection from '../components/section/overview-section';
import { ExamsSection } from '../components/section/exams-section';
import { ReviewSection } from '../components/section/review-section';
import { HistorySection } from '../components/section/history-section';

export default function OverviewPage() {
  // Save active menu state
  const [activeMenu, setActiveMenu] = useState('Overview');

  // Menu items
  const menuItems = ['Overview', 'Exams', 'Review', 'History'];

  // Set active menu function
  const handleMenuClick = (menuName: string) => {
    setActiveMenu(menuName);
  };

  // Render content based on active menu
  const renderContent = () => {
    switch (activeMenu) {
      case 'Overview':
        return <OverviewSection />;
      case 'Exams':
        return <ExamsSection />;
      case 'Review':
        return <ReviewSection />;
      case 'History':
        return <HistorySection />;
      default:
        return <OverviewSection />;
    }
  };
  
  return (
    <div className="flex h-screen w-full flex-row">
      <div className="bg-primary flex h-full w-3/12 flex-col items-center justify-between py-10">
        <div className="flex w-full flex-col items-center">
          <h1 className="text-primary-content px-18 text-center font-serif text-3xl">College of Engineering Pati</h1>
          <div className="w-full px-8">
            <ul className="menu menu-lg rounded-box text-secondary-content w-full gap-3 py-6">
              {menuItems.map((menuItem) => (
                <li key={menuItem}>
                  <a
                    onClick={() => handleMenuClick(menuItem)}
                    className={`${activeMenu === menuItem ? 'font-extrabold' : ''} cursor-pointer`}
                  >
                    {menuItem}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-6 flex w-2/3 justify-center px-8">
          <a className="btn btn-error w-full" href="#">
            Logout
          </a>
        </div>
      </div>
      <div className="bg-base-300 flex h-full w-9/12 flex-col items-center justify-start gap-8">{renderContent()}</div>
    </div>
  );
}
