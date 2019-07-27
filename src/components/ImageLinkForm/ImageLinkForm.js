import React, {Component} from 'react';
import './ImageLinkForm.css';

class ImageLinkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p className="f3 light-gray">
          This is a basic Face Recognition App. Paste an image URL to detect
          faces.
        </p>
        <div className="pa3 br3 shadow-5 center Form">
          <input
            type="text"
            className="center f4 pa2 ma2 w-70"
            onChange={this.props.onInputChange}
          />
          <button
            className=" grow w-25 f4 pa2 bg-dark-green hover-bg-dark-blue white dib Button"
            onClick={this.props.onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    );
  }
}

export default ImageLinkForm;
