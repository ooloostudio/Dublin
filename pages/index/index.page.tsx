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
import Stats_3col from '../../components/Stats/Stats_3col';


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
      <Stats_3col />
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
