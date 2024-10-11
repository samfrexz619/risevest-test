import React from 'react';
import image from '@/assets/images/join.png';
import image2 from '@/assets/images/join-sm.png';
import './community.scss';
import { useResize } from '@/hooks/useResize';




const JoinRise: React.FC = () => {

  const { isMobile } = useResize()
  return (
    <section className='community'>
      <section className='community__container'>
        <div className='community__text'>
          <h2>Join The Rise <br /> Community</h2>
          {
            isMobile ?
              (<p>If you want to go far, go together.</p>)
              :
              (
                <p>
                  If you want to go far, go together. Our Telegram community surrounds you with others who can help you along your financial journey with tips, support, advice and learning. It's completely free and open to new and seasoned investors.
                </p>
              )
          }
          <button>
            Join our Community
          </button>
        </div>
        <aside>
          <picture>
            <source
              media='(min-width: 768px)'
              srcSet=''
              className=''
            />
            <source
              media='(max-width: 425px)'
              srcSet={image2}
            />
            <img src={image} alt="community picture" />
          </picture>
        </aside>
      </section>
    </section>
  );
}

export default JoinRise;
