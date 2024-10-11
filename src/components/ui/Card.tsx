import React from 'react';
import rightIcon from '@/assets/images/arr-right.svg';
import { NavLink } from 'react-router-dom';
import { AssetItem } from '@/types/types';

interface CardProps {
  items: AssetItem;
}

const Card: React.FC<CardProps> = (props) => {

  const { items } = props;

  const imageUrl = new URL(`../../assets/images/card-img/${items.image}.png`, import.meta.url);

  const cardTopBg = items.type === 'Stocks' ? 'stock' : items.type === 'Real Estate' ? 'estate' : 'income';

  return (
    <div className='card'>
      <div className={`card__top ${cardTopBg}`}>
        <div className='card__circle'>
          <div className='card__inner'>
            <img src={`${imageUrl}`} alt="asset image" />
          </div>
        </div>
      </div>

      <div className='card__text'>
        <h5>{items.type}</h5>
        <p>{items.body}
        </p>
        <div>
          <p><span> Historical returns: </span>14% per annum</p>
          <p><span>Risk Level:</span> Medium</p>
        </div>
      </div>

      <div className='card__footer'>
        <NavLink to='#'>
          <h6>{items.linkText}</h6>
          <div className='icon'>
            <img src={rightIcon} alt="right arrow" />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Card;
