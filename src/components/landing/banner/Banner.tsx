import React from 'react';
import phone from '@/assets/images/phone.png';
import BtnImage from '@/components/ui/BtnImage';
import { useResize } from '@/hooks/useResize';
import Circle from '@/components/ui/Circle';
import './banner.scss';

interface Props {

}

const Banner: React.FC<Props> = (props) => {
  const { isMobile } = useResize()
  return (
    <section className='banner'>
      <div className='banner__wrapper'>
        <section className='banner__text'>
          <div className='banner__container'>
            <div className='text__container'>
              <h1>
                Dollar investments <br /> that help you grow
              </h1>
              <div className='dot' />
            </div>
            {isMobile ?
              (<p> Your personal wealth manager. Get started with a minimum of $10 and</p>)
              :
              (<p>
                We put your money in high quality assets that help you build wealth and achieve your financial goals.
              </p>)
            }
            <div className='banner__btn'>
              <BtnImage btnType='apple' type='banner' />
              <BtnImage btnType='google' type='banner' />
            </div>

          </div>
        </section>
        <aside>
          <img src={phone} alt="" className='banner__image' width={226} />
          <div className='phone-circle'>
            <Circle size='medium' />
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Banner;
