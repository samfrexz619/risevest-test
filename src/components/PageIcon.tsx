import React from 'react';

interface PageIconProp {
  iconName: string;
}

const PageIcon: React.FC<PageIconProp> = ({ iconName }) => {
  return (
    <>
      {
        iconName === 'arr-down'
        &&
        <svg width='30' height='30' viewBox='0 0 30 30'>
          <use xlinkHref="/sprite.svg#arr-down" />
        </svg>
      }
    </>
  );
}

export default PageIcon;
