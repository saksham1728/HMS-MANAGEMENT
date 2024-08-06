import React from 'react';
import Hero from '../components/Hero';
import Biography from '../components/Biography';
import Departments from '../components/Departments';
import MessageForm from '../components/MessageForm';

const Home = () => {
  return (
    <div>
      <Hero title={"Welcome to CANS Multi Specialty Hospital"} imageUrl={"./hero.png"} />
      <Biography 
        imageUrl={"./feature.png"} 
        className="home-biography" 
      />
      <Departments />
      <MessageForm />
    </div>
  );
};

export default Home;
