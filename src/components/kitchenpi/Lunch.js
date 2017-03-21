import React from 'react';

class Lunch extends React.Component {
  render() {
    return (
      <h1>Lunch</h1>
    );
  }
}

Lunch.contextTypes = {
  router: React.PropTypes.object
}

export default Lunch;
