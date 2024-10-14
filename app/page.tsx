import React from 'react';
import Nav from './component/Nav'
import NewCollection from './component/NewCollection';
import Card from './component/Card';

const Homepage = () => {
  return (
    <div>
      <Nav />
      <NewCollection />
      <Card/>
    </div>
  );
}

export default Homepage;