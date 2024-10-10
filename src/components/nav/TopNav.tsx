import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import menuIcon from '@/assets/images/menu.svg';
import PageIcon from '../PageIcon';
import { navLinks } from '@/constants/navlinks';
import './nav.scss';


interface TopNavProps {
  openMobileNav: () => void;
}

const TopNav: React.FC<TopNavProps> = ({ openMobileNav }) => {

  const { pathname } = useLocation();

  return (
    <>
      <header className='header'>
        <NavLink to='/' className='header-logo'>
          <img src={logo} alt="company logo" />
        </NavLink>
        <nav className={`header__nav`}>
          {
            navLinks.map(link => (
              <NavLink to={link.path} key={link.id} className={`${link.path === pathname && 'active'} header__links`}>
                <span className=''>{link.pathName}</span>
                {link.pathName === 'Products'
                  && <span className='arr'>
                    <PageIcon iconName='arr-down' />
                  </span>}
                {link.path === pathname && <div className='active-circle' />}
              </NavLink>
            ))
          }
        </nav>
        <button onClick={openMobileNav} className='header-menu'>
          <img src={menuIcon} alt="hamburger menu icon" />
        </button>
      </header>
    </>
  );
}

export default TopNav;
