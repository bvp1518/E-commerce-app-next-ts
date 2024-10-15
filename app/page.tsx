import React from 'react';
import Nav from './component/Nav'
import NewCollection from './component/NewCollection';
import Card from './component/Card';
import SlideShow from './component/SlideShow';
import Footer from './component/Footer';

const Homepage = () => {
  return (
    <div>
      <Nav />
      <NewCollection />
      <Card/>
      <SlideShow />
      <Footer />
    </div>
  );
}

export default Homepage;