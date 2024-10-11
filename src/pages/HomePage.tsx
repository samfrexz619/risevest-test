import React from 'react';
// components
import Banner from '@/components/landing/banner/Banner';
import SocialProof from '@/components/landing/SocialProof';
import AssetCls from '@/components/landing/AssetCls';
import BodySection from '@/components/landing/BodySection';
import SaveForFuture from '@/components/landing/save/SaveForFuture';
import Regulated from '@/components/landing/Regulated';
import Testimonial from '@/components/landing/testimonial/Testimonial';
import '@/components/landing/banner/banner.scss';
import JoinRise from '@/components/landing/community/JoinRise';

const HomePage: React.FC = () => {
  return (
    <section style={{ overflowX: 'hidden' }}>
      <Banner />
      <SocialProof />
      <BodySection />
      <AssetCls />
      <SaveForFuture />
      <Regulated />
      <Testimonial />
      <JoinRise />
    </section>
  );
}

export default HomePage;
