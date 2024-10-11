import React from 'react';

interface PageIconProp {
  iconName: string;
}

const PageIcon: React.FC<PageIconProp> = ({ iconName }) => {
  return (
    <>
      {
        iconName === 'arr-down'
          ?
          <svg width='30' height='30' viewBox='0 0 30 30'>
            <use xlinkHref="/sprite.svg#arr-down" />
          </svg>
          : iconName === 'arr-right'
            ? <svg width="13" height="10" viewBox="0 0 13 10">
              <use xlinkHref="/sprite.svg#arr-right" />
            </svg>
            :
            <svg width="60" height="19" viewBox="0 0 60 19">
              <use xlinkHref="/sprite.svg#logo" />
            </svg>

      }
    </>
  );
}

export default PageIcon;
