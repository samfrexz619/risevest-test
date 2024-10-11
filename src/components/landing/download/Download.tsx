import React from 'react';
import phone from '@/assets/images/download-phone.png';
import BtnImage from '@/components/ui/BtnImage';
import './download.scss';

const Download: React.FC = () => {
  return (
    <section className='download'>
      <div className="download__container">
        <aside>
          <h6>Download The Rise App</h6>
          <h2>Join our 100,000 users investing and setting long term goals!</h2>
          <p>Dollar investments that help you grow.</p>
          <div className='download__btn'>
            <BtnImage btnType='apple' type='download' />
            <BtnImage btnType='google' type='download' />
          </div>
        </aside>
        <div className='download__phone'>
          <img src={phone} alt="phone" height={425} width={260} />
        </div>
      </div>
    </section>
  );
}

export default Download;
