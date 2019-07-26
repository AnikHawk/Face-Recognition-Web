import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './Logo/Logo';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import Rank from './Rank/Rank';
import Particles from 'react-particles-js';

const particleParam = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
  },
};

function App() {
  return (
    <div className="App">
      <Particles className="Particles" params={particleParam} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
