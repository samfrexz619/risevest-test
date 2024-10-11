import React from 'react';
import Card from '../ui/Card';
import { AssetItem } from '@/types/types';
import './landing.scss';

interface Props {

}

const AssetCls: React.FC<Props> = (props) => {

  const items: AssetItem[] = [
    {
      id: '1',
      type: 'Stocks',
      body: "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.",
      linkText: 'Learn how Stocks work',
      image: 'image1'
    },
    {
      id: '2',
      type: 'Real Estate',
      body: "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
      linkText: 'Learn how Real Estate work',
      image: 'image2'
    },
    {
      id: '3',
      type: 'Fixed Income',
      body: "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.",
      linkText: 'Learn how Fixed Income work',
      image: 'image3'
    },
  ]

  return (
    <section className='asset'>
      <header className='asset__header'>
        <h3>Asset Classes</h3>
        <p>It’s your money, choose where you invest it</p>
      </header>
      <div className='asset__cards'>
        {items.map(item => (
          <Card items={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default AssetCls;
