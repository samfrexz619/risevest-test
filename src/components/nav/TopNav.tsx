import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import menuIcon from '@/assets/images/menu.svg';

interface Props {

}

const TopNav: React.FC<Props> = (props) => {

  // const { pathname }
  const { pathname } = useLocation();

  console.log(pathname)

  const navLinks = [
    {
      id: '1',
      path: '/',
      pathName: 'Home'
    },
    {
      id: '2',
      path: '/products',
      pathName: 'Products'
    },
    {
      id: '3',
      path: '/investment-club',
      pathName: 'Investment Club'
    },
    {
      id: '4',
      path: '/blog',
      pathName: 'Blog'
    },
    {
      id: '5',
      path: '/about-us',
      pathName: 'About Us'
    },
    {
      id: '6',
      path: '/faqs',
      pathName: 'FAQS'
    },
  ];

  return (
    <header className='header'>
      <NavLink to='/' className='header-logo'>
        <img src={logo} alt="company logo" />
      </NavLink>
      <nav className={`header__nav`}>
        {
          navLinks.map(link => (
            <NavLink to={link.path} key={link.id} className={`${link.path === pathname && 'active'} header__links`}>
              <span className=''>{link.pathName}</span>
              {link.path === pathname && <div className='active-circle' />}
            </NavLink>
          ))
        }
      </nav>
      <button className='header-menu'>
        <img src={menuIcon} alt="hamburger menu icon" />
      </button>
    </header>
  );
}

export default TopNav;
