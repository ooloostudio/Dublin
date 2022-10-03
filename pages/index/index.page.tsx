import React from 'react';
import CTA from '../../components/CTA/CTA';
import FeaturedContentComp from '../../components/FeaturedContent/FeaturedContentCompHP';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Waves from '../../components/Waves/wave';
import Logos_1 from '../../components/Logos/Logos_1';
import Stats from '../../components/Stats/Stats_3col';
import CallToActionWithLinks from '../../components/CTA/CallToActionWithLinks';
import CallToActionParagraphs from '../../components/CTA/CallToActionParagraphs';
import NavBar from '../../components/Navigation/NavBar';
import { HydratedContentItem } from '@thoughtindustries/content';

import ImageSection from '../../components/ImageSection/ImageSection';


export { Page };
export { documentProps };


const documentProps = {
  title: 'Home Page',
  description: 'The home page'
};

function Page() {
  return (
    <>
      <NavBar />
      <Hero
        headline="Become a cloud expert"
        body="Transform the way you communicate with your customers."
        buttonUrl="/signin"
        buttonText="Get Certified"
        secondButtonUrl="/catalog"
        secondButtonText="Find a Course"
      />
      <Waves />
      <Logos_1 />
      
      <ImageSection />
      <CallToActionWithLinks
        headline="Training and Certifications that Develop Your Skillsets and Fuel Your Success"
        description="Browse our top categories"
        links={[
          { text: 'Webinar', linkUrl: 'https://developer.thoughtindustries.com/' },
          {
            text: 'Leaders',
            linkUrl: 'https://thoughtindustries.github.io/helium/?path=/story/example-cart--base'
          },
          { text: 'Growing your Businness', linkUrl: '/graphiql' },
          {
            text: 'Integrations',
            linkUrl: 'https://thoughtindustries.github.io/helium-graphql/'
          }
        ]}
      />
       <div className='relative bg-surface-100'>
        <svg className='w-full  text-slate-800 fill-current' viewBox="0 0 1358 182" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1358 103L1335.37 89.2883C1312.73 75.3189 1267.47 48.2814 1222.2 54.912C1176.93 61.8002 1131.67 103 1086.4 133.9C1041.13 164.8 995.867 185.4 950.6 171.688C905.333 157.719 860.067 110.081 814.8 106.412C769.533 103 724.267 144.2 679 164.8C633.733 185.4 588.467 185.4 543.2 171.688C497.933 157.719 452.667 130.681 407.4 103C362.133 75.3188 316.867 48.2813 271.6 51.5001C226.333 54.7188 181.067 89.4813 135.8 89.2882C90.5333 89.4813 45.2666 54.7188 22.6333 37.7882L1.40437e-05 20.6001L1.58446e-05 4.91265e-05L22.6333 5.11052e-05C45.2666 5.30839e-05 90.5333 5.70412e-05 135.8 6.09986e-05C181.067 6.49559e-05 226.333 6.89132e-05 271.6 7.28706e-05C316.867 7.68279e-05 362.133 8.07852e-05 407.4 8.47426e-05C452.667 8.86999e-05 497.933 9.26573e-05 543.2 9.66146e-05C588.467 0.000100572 633.733 0.000104529 679 0.000108487C724.267 0.000112444 769.533 0.000116401 814.8 0.000120359C860.067 0.000124316 905.333 0.000128273 950.6 0.000132231C995.867 0.000136188 1041.13 0.000140145 1086.4 0.000144103C1131.67 0.00014806 1176.93 0.000152017 1222.2 0.000155975C1267.47 0.000159932 1312.73 0.000163889 1335.37 0.000165868L1358 0.000167847L1358 103Z"/>
      </svg>

      </div>
      <FeaturedContentComp
        onAddedToQueue={function (item: HydratedContentItem): Promise<boolean | void> {
          throw new Error('Function not implemented.');
        }}
        numberOfContentItems={9}
      />
     

      <CTA
        headline="Certify Your Knowdledge"
        body="Developers of the world's most innovative products and services are learning directly from Cloud Connect."
        buttonUrl="/signin"
        buttonText="Get Certified"
      />
      <Footer />
    </>
  );
}
