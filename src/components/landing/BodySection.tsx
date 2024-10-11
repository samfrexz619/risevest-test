import React from 'react';
import { NavLink } from 'react-router-dom';
import rightIcon from '@/assets/images/arr-right.svg';
import image1 from '@/assets/images/body/image1.png';
import image2 from '@/assets/images/body/image2.png';
import image3 from '@/assets/images/body/image3.png';
import image4 from '@/assets/images/body/image4.png';

import './landing.scss';


interface Props {

}

const BodySection: React.FC<Props> = (props) => {
  return (
    <section className='body'>
      <div className='body__container body-text1'>
        <div className="body__text1">
          <h3>
            Invest your money in dollars
          </h3>
          <p>By holding your investments in a stable currency, your money grows more over time and retains its value better.</p>
          <NavLink to='#' className='link'>
            <span>Start Investing Now</span>
            <img src={rightIcon} alt="right arrow" height={12} />
          </NavLink>
        </div>
        <div className="body__text1 show">
          <h3>
            Superior Performance
          </h3>
          <p>Rise outperforms your other alternatives in two ways. The first is through our expert, algorithm driven investment approach that picks through over 3,000 data sets to find the perfect investment for you. </p>
        </div>
        <aside>
          <img src={image1} alt="a woman holding a board" />
          <div className='image-top' />
        </aside>
      </div>

      {/* second */}
      <div className='body__container body-text2'>
        <aside>
          <img src={image2} alt="a girl reading a magazine" />
          <div className='image-top' />
        </aside>
        <div className="body__text2">
          <h3>
            Choose what's best <br /> for you
          </h3>
          <p>Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place. </p>
          <NavLink to='#' className='link'>
            <span>Start Investing Now</span>
            <img src={rightIcon} alt="right arrow" height={12} />
          </NavLink>
        </div>
        <div className="body__text2 show">
          <h3>
            Personalization
          </h3>
          <p>No two people are the same, and everyone’s financial goals are different. Rise understands this, which is why we tailor your journey to financial freedom to fit you. </p>
        </div>
      </div>

      {/* third */}
      <div className='body__container body-text3'>

        <div className="body__text2">
          <h3>
            Set goals and reach them
          </h3>
          <p>You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them. </p>
          <NavLink to='#' className='link'>
            <span>Start Investing Now</span>
            <img src={rightIcon} alt="right arrow" height={12} />
          </NavLink>
        </div>
        <div className="body__text2 show">
          <h3>
            Diversification
          </h3>
          <p>Rise offers a choice of three asset classes: US equities, US real estate and fixed income assets to provide stability to your investments and protection from market declines. You can pick one asset class or </p>
        </div>

        <aside>
          <img src={image3} alt="a humaan image with question mark" />
          <div className='image-top' />
        </aside>
      </div>

      {/* fourth */}
      <div className='body__container body-text3 hide'>
        <aside>
          <img src={image4} alt="a man holding a bell" />
        </aside>

        <div className="body__text2">
          <h3>
            We remember so you dont <br /> have to
          </h3>
          <p>
            Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule.
          </p>
          <NavLink to='#' className='link'>
            <span>Start Investing Now</span>
            <img src={rightIcon} alt="right arrow" height={12} />
          </NavLink>
        </div>
        <div className="body__text2 show">
          <h3>
            Personalization
          </h3>
          <p>No two people are the same, and everyone’s financial goals are different. Rise understands this, which is why we tailor your journey to financial freedom to fit you. </p>
        </div>
      </div>
    </section>
  );
}

export default BodySection;
