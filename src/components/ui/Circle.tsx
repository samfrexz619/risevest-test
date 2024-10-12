import React from 'react';
import './ui.scss';

interface CircleProps {
  size: 'medium' | 'small';
  direction?: 'down' | 'up';
}

const Circle: React.FC<CircleProps> = ({ size, direction }) => {
  const animDirection = direction === 'down' ? 'down' : direction === 'up' ? 'up' : '';
  return (
    <div className={`circle ${size === 'medium' ? 'md-size' : 'sm-size'} ${animDirection}`} />
  );
}

export default Circle;
