import React from 'react';
import phone from '@/assets/images/save/Phone.png';
import { NavLink } from 'react-router-dom';
import PageIcon from '@/components/PageIcon';
import './save.scss';



const SaveForFuture: React.FC = () => {
  return (
    <section className='save'>
      <div className='save__phone'>
        <img src={phone} alt="phone" height={525} style={{ marginLeft: '17px' }} />
        <div className='save__bg'>
          <div className='save__text'>
            <h5>Build Wealth</h5>
            <p>Invest for long-term goals like retirement with this plan. It’s your financial freedom partner.</p>
            <NavLink to='#'>
              <span>Start investing </span>
              <PageIcon iconName='arr-right' />
            </NavLink>
          </div>
        </div>
      </div>

      <aside>
        <h4>The  Rise App</h4>
        <h2>Save for your <span>future</span></h2>
        <p>With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children’s future and more.
        </p>
        <button>
          Start Saving
        </button>
      </aside>
    </section>
  );
}

export default SaveForFuture;
