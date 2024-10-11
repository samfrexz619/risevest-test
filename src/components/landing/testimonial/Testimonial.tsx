import React, { useEffect, useState } from 'react';
import TestifyCard from '@/components/ui/TestifyCard';
import './testimonial.scss';


interface Props {

}

const Testimonial: React.FC<Props> = (props) => {

  const testifiers = [
    {
      id: '1',
      text: 'I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.',
      image: 'image1',
      name: 'Lade'
    },
    {
      id: '2',
      text: 'I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.',
      image: 'image2',
      name: 'Jesse'
    },
    {
      id: '3',
      text: 'I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.',
      image: 'image3',
      name: 'Raye'
    },
  ];

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className='testify'>
      <header className='desktop'>
        <h2>From The People Who Use Rise</h2>
        <p>Our mission at Risevest is to empower more people just like you to achieve your personal financial goals.</p>
      </header>
      <header className='mobile-text'>
        <h2>What our customers <br /> are saying</h2>
        <p>We serve over 80,000 amazing users.</p>
      </header>
      <section className='testify__card-container reset'>
        {
          isMobile ?
            (
              <TestifyCard item={testifiers[0]} />
            )
            :
            (
              testifiers.map(item => (
                <TestifyCard item={item} key={item.id} />
              ))
            )
        }
      </section>
    </section>
  );
}

export default Testimonial;
