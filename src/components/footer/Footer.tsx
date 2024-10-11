import React from 'react';
import { NavLink } from 'react-router-dom';
import PageIcon from '../PageIcon';
import { contact, explore, footerLink, products } from '@/constants/navlinks';
import arrow from '@/assets/images/arr.svg';
import './footer.scss';

interface Props {

}

const Footer: React.FC<Props> = (props) => {
  return (
    <footer>
      <nav>
        <ul>
          <NavLink to='/' className='logo'>
            <PageIcon iconName='logo' />
          </NavLink>
          {
            footerLink.map(link => (
              <li key={link.id}>
                <NavLink to={link.path}>
                  {link.pathName}
                </NavLink>
              </li>
            ))
          }
        </ul>

        <ul>
          <h4>Explore</h4>
          {
            explore.map(link => (
              <li key={link.id}>
                <NavLink to={link.path}>
                  <span>{link.pathName}</span>
                  <span className='icon'>
                    <img src={arrow} alt="" />
                  </span>
                </NavLink>
              </li>
            ))
          }
        </ul>

        <ul>
          <h4>Products</h4>
          {
            products.map(link => (
              <li key={link.id}>
                <NavLink to={link.path}>
                  {link.pathName}
                </NavLink>
              </li>
            ))
          }
        </ul>

        <ul>
          <h4>Contact Us</h4>
          <li>
            <a href="tel:+0818 714 7405">
              <span>
                0818 714 7405
              </span>
              <span className='icon'>
                <img src={arrow} alt="" />
              </span>
            </a>
          </li>
          <li>
            <a href="mailto:hello@rise.capital">
              <span>hello@rise.capital</span>
              <span className='icon'>
                <img src={arrow} alt="" />
              </span>
            </a>
          </li>
          {
            contact.map(link => (
              <li key={link.id}>
                <NavLink to={link.path}>
                  <span>{link.pathName}</span>
                  <span className='icon'>
                    <img src={arrow} alt="" />
                  </span>
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
