import React from 'react';

interface Props {

}

const Regulated: React.FC<Props> = (props) => {
  return (
    <section className='regulated'>
      <div className='regulated__text'>
        <h3>How we are Regulated</h3>
        <p>
          Rise is registered and regulated both in the US and in Nigeria. Our team is made up of US registered investment advisers, our Nigerian users are covered by our SEC licensed trustees, ARM Trustees and all our assets are held with regulated third parties, in all relevant jurisdictions
        </p>
      </div>
    </section>
  );
}

export default Regulated;
