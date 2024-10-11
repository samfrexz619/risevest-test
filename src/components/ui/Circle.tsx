import React from 'react';
import './ui.scss';

interface CircleProps {
  size: 'medium' | 'small';
}

const Circle: React.FC<CircleProps> = ({ size }) => {
  return (
    <div className={`circle ${size === 'medium' ? 'md-size' : 'sm-size'}`} />
  );
}

export default Circle;
