import React, {Component} from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        className="pa3 ma3 link pointer dim f3 underline mt0"
      >
        Sign Out
      </nav>
    );
  }
}

export default Navigation;
