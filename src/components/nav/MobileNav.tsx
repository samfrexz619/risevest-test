import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import './nav.scss';
import { navLinks } from '@/constants/navlinks';


interface MobileNavProps {
  closeModal: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ closeModal }) => {

  const { pathname } = useLocation();

  return (
    <div onClick={closeModal} className='modal'>
      <div onClick={e => e.stopPropagation()} className='modal__content'>
        <NavLink to='/'>
          <img src={logo} alt="company logo" />
        </NavLink>
        <nav>
          {
            navLinks.map(link => (
              <NavLink onClick={closeModal} to={link.path} key={link.id} className={`${link.path === pathname} && 'active' modal__links `}>
                {link.pathName}
              </NavLink>
            ))
          }
        </nav>
        <button onClick={closeModal} className='modal__close'>
          X
        </button>
      </div>
    </div>
  );
}

export default MobileNav;
