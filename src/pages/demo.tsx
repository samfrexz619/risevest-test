import React from 'react';
import Circle from '@/components/ui/Circle';



const DemoPage: React.FC = () => {
  return (
    <div className='demo'>
      <Circle size='medium' />
      <Circle size='small' />
    </div>
  );
}

export default DemoPage;
