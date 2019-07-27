import React, {Component} from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ma4 mt0">
        <Tilt
          className="Tilt br2 shadow-2"
          options={{max: 25}}
          style={{height: 100, width: 100}}
        >
          <div className="Tilt-inner pa2">
            <img src={brain} alt="Brain Logo" style={{paddingTop: '8px'}} />{' '}
          </div>
        </Tilt>
      </div>
    );
  }
}

export default Logo;
