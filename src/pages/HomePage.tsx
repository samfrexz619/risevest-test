import React from 'react';
// components
import Banner from '@/components/landing/banner/Banner';
import SocialProof from '@/components/landing/SocialProof';
import '@/components/landing/banner/banner.scss'
import AssetCls from '@/components/landing/AssetCls';
import BodySection from '@/components/landing/BodySection';
import SaveForFuture from '@/components/landing/save/SaveForFuture';

const HomePage: React.FC = () => {
  return (
    <section>
      <Banner />
      <SocialProof />
      <BodySection />
      <AssetCls />
      <SaveForFuture />
    </section>
  );
}

export default HomePage;
