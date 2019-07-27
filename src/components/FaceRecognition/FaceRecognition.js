import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box, celebName}) => {
  return (
    <div className="center ma">
      <div className="absolute mt2 mb3">
        <img id="inputimage" alt="" src={imageUrl} width="600px" heigh="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        />
        <div className="f3 white shadow-1">{celebName}</div>
      </div>
    </div>
  );
};

export default FaceRecognition;
