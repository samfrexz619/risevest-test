import React from 'react';
import phone from '@/assets/images/phone.png';
import BtnImage from '@/components/ui/BtnImage';
import './banner.scss';

interface Props {

}

const Banner: React.FC<Props> = (props) => {
  return (
    <section className='banner'>
      <section className='banner__text'>
        <div className='banner__container'>
          <h1>
            Dollar investments that help you grow
          </h1>
          <p>
            We put your money in high quality assets that help you build wealth and achieve your financial goals.
          </p>
          <div className='banner__btn'>
            <BtnImage btnType='apple' type='banner' />
            <BtnImage btnType='google' type='banner' />
          </div>
        </div>
      </section>
      <aside>
        <img src={phone} alt="" className='banner__image' />
      </aside>
    </section>
  );
}

export default Banner;
