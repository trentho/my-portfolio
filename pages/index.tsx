import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
        <Navbar />
      <h1>Welcome to My Portfolio</h1>
      <p>This is the homepage of my portfolio website.</p>
    </div>
  );
};

export default Home;
