import React, {Component} from 'react';

class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="mb4">
        <div className="f3 light-gray">Altamas, Your rank is</div>
        <div className="f1 white">#1</div>
      </div>
    );
  }
}

export default Rank;
