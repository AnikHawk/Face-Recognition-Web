import React, {Component} from 'react';
import './FaceRecognition.css';
class FaceRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.box);

    return (
      <div className="Center ma">
        <div className="absolute mt2 mb3 ImageBox">
          <img
            id="displayImg"
            src={this.props.imageUrl}
            alt="URL"
            width="700px"
            heigth="auto"
          />
        </div>

        <div
          className="bounding-box"
          style={{
            top: this.props.box.topRow,
            right: this.props.box.rightCol,
            bottom: this.props.box.bottomRow,
            left: this.props.box.leftCol,
          }}
        />
      </div>
    );
  }
}

export default FaceRecognition;
