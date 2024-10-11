import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './layout.scss';
import TopNav from '../components/nav/TopNav';
import MobileNav from '@/components/nav/MobileNav';
import Footer from '@/components/footer/Footer';

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
      <Footer />
      {showMobile && <MobileNav closeModal={handleShowMobileNav} />}
    </>
  );
}

export default DefaultLayout;
