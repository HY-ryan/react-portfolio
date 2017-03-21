import React from 'react';

class Breakfast extends React.Component {
  render() {
    return (
      <h1>Breakfast</h1>
    );
  }
}

Breakfast.contextTypes = {
  router: React.PropTypes.object
}

export default Breakfast;
