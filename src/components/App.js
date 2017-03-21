import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();

    // get initial state
    this.state = {
      
    };

  }


  render() {
    return (
      <div className="text-center home">
      <div className="jumbotron jumbotron-home">
        <h1>Ryan Emmons [dot] Net</h1>
        <div className="logos">
          <img src="./img/logos/nodejs.png" height="75" width="auto" alt="node js logo" />&nbsp;
          <img src="./img/logos/react.png" height="75" width="auto" alt="react logo" />&nbsp;
          <img src="./img/logos/mongodb.png" height="75" width="auto" alt="mongo db logo" />
        </div>
      </div>
        <h3>Projects</h3>
        <div className="col-md-6 col-xs-12">
          <p><button className="btn btn-default" type="button" onClick={() => this.context.router.transitionTo(`/kitchenpi`)}>Raspberry Pi Kitchen Assistant</button></p>
          <p>A web app designed to be used with a Raspberry Pi connected to a touch screen.</p>
        </div>
        <div className="col-md-6 col-xs-12">
        <button className="btn btn-default" type="button" onClick={() => this.context.router.transitionTo(`/blog`)}>Blog</button>
        <p>...</p>
        </div>

      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default App;
