import React from 'react';

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>{this.props.mainText}</h1>
        <p>{this.props.subText}</p>
      </div>
    );
  }
}


export default Jumbotron;
