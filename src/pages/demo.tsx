import Circle from '@/components/ui/Circle';
import React from 'react';

interface Props {

}

const DemoPage: React.FC<Props> = (props) => {
  return (
    <div className='demo'>
      <Circle size='medium' />
      <Circle size='small' />
    </div>
  );
}

export default DemoPage;
