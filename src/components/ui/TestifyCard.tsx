import { Testifiers } from '@/types/types';
import React from 'react';

interface TestifyCardProps {
  item: Testifiers;
}

const TestifyCard: React.FC<TestifyCardProps> = ({ item }) => {
  const imageUrl = new URL(`../../assets/images/testify/${item.image}.png`, import.meta.url);

  return (
    <div className='testify__card'>
      <p>{item.text}</p>

      <div className='footer'>
        <img src={`${imageUrl}`} alt="" className='' />
        <h6>{item.name}</h6>
        <span>UX Researcher</span>
      </div>

    </div>
  );
}

export default TestifyCard;
