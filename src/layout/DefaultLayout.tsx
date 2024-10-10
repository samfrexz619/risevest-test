import React from 'react';
import { Outlet } from 'react-router-dom';
import './layout.scss';
import TopNav from '../components/nav/TopNav';

const DefaultLayout: React.FC = () => {
  return (
    <>
      <TopNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default DefaultLayout;
