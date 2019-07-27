import React from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'f0e6c85bfb0644b882f46137893111cb',
});

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    };
  }

  calculateBoundingBox = data => {
    console.log(data);

    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifaiFace);

    const image = document.getElementById('displayImg');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayBoundingBox = box => {
    console.log(box);

    this.setState({box: box});
  };

  onInputChange = event => {
    const url = event.target.value;
    this.setState({input: url});
  };

  onSubmit = event => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        const clarifaiFace =
          response.outputs[0].data.regions[0].region_info.bounding_box;

        const image = document.getElementById('displayImg');
        const width = Number(image.width);
        const height = Number(image.height);

        const boundingBox = {
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - clarifaiFace.right_col * width,
          bottomRow: height - clarifaiFace.bottom_row * height,
        };
        this.displayBoundingBox(boundingBox);
        this.setState({box: boundingBox});
        console.log(this.state);
      },
      function(err) {
        console.log('OoPsIe!');
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Particles className="Particles" params={particleParam} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
