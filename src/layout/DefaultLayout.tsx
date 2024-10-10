import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './layout.scss';
import TopNav from '../components/nav/TopNav';
import MobileNav from '@/components/nav/MobileNav';

const DefaultLayout: React.FC = () => {

  const [showMobile, setShowMobile] = useState(false);

  const handleShowMobileNav = () => {
    setShowMobile(prev => !prev)
  }

  return (
    <>
      <TopNav openMobileNav={handleShowMobileNav} />
      <main>
        <Outlet />
      </main>
      {showMobile && <MobileNav closeModal={handleShowMobileNav} />}
    </>
  );
}

export default DefaultLayout;
