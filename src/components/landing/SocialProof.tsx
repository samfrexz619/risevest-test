import React from 'react';
import arm from '@/assets/images/social-proof/arm.png';
import image2 from '@/assets/images/social-proof/wunion.png';
import image3 from '@/assets/images/social-proof/tstars.png';
import image4 from '@/assets/images/social-proof/image1.png';


interface Props {

}

const SocialProof: React.FC<Props> = () => {
  return (
    <div className='proof'>
      <p>We are supported by</p>
      <div className='proof__container'>
        <img src={arm} alt="arm logo" />
        <img src={image2} alt="wester union logo" />
        <img src={image3} alt="techstars logo" />
        <img src={image4} alt="logo" />
      </div>
    </div>
  );
}

export default SocialProof;
