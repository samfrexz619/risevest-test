import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../components/nav/TopNav';
import MobileNav from '@/components/nav/MobileNav';
import Footer from '@/components/footer/Footer';
import './layout.scss';

const DefaultLayout: React.FC = () => {

  const [showMobile, setShowMobile] = useState(false);

  const handleShowMobileNav = () => {
    setShowMobile(prev => !prev)
  }

  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState<number>(0);
  // let lastScrollPosition = 0;

  useEffect(() => {
    const handleScrollHeader = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > prevScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setPrevScrollY(currentScrollPosition)
    }

    window.addEventListener('scroll', handleScrollHeader);

    return () => window.removeEventListener("scroll", handleScrollHeader);
  }, [prevScrollY])

  return (
    <>
      <nav className={`scroll__header ${isVisible ? 'visible' : 'hidden'}`}>
        <TopNav openMobileNav={handleShowMobileNav} />
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
      {showMobile && <MobileNav closeModal={handleShowMobileNav} />}
    </>
  );
}

export default DefaultLayout;
