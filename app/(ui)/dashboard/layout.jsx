'use client';

import MobileNav from '@/app/Components/Sidebar/MobileNav';
import Sidebar from '@/app/Components/Sidebar/Sidebar';
import '@/app/styles/dashboard.css';

const layout = ({ children }) => {
  return (
    <div className="dashboard__container flex h-[100vh] w-[100%] justify-between">
      <div className="sidebar-layout__container w-[25%] border-r-2 sm:hidden md:hidden">
        <Sidebar />
      </div>
      <div className="mobile-nav__container xl:hidden">
        <MobileNav />
      </div>
      <div className="dashboard-children__container flex h-[100%] w-[75%] flex-col">
        {children}
      </div>
    </div>
  );
};

export default layout;
