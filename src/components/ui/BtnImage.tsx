import React from 'react';
import appBtn from '@/assets/images/apple.svg';
import googleBtn from '@/assets/images/google.svg';
import './ui.scss';

interface BtnImageProps {
  btnType: 'google' | 'apple';
  type: 'banner' | 'download';
}

const BtnImage: React.FC<BtnImageProps> = ({ btnType, type }) => {

  const btnStore = btnType === 'apple' ? appBtn : googleBtn;

  return (
    <button>
      <img src={btnStore} alt="store image" className={`btnImage ${type === 'banner' ? 'bannerBtn' : 'downloadBtn'}`} />
    </button>
  );
}

export default BtnImage;
