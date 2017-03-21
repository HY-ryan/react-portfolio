import React from 'react';
import Ingredients from './Ingredients';
import Steps from './Steps';
import dinnerRecipes from './dinnerRecipes';

class Dinner extends React.Component {
  constructor() {
    super();
    // get initial state
    this.state = {
      dinners: {dinnerRecipes}
    };

  }


  render() {
    return (
      <div>
      <h1>Dinner</h1>
      {
        Object
        .keys(this.state.dinners.dinnerRecipes)
        .map(key => 
        <div key={`${key}-wrapper`}>
        <h3 key={key}>{this.state.dinners.dinnerRecipes[key].name}</h3>
        <p>{this.state.dinners.dinnerRecipes[key].desc}</p>
        <p><strong>Ingredients</strong></p>
        <ol>
          {this.state.dinners.dinnerRecipes[key].ingredients
          .map(item => <Ingredients key={item} list={item} />)}
        </ol>
        <p><strong>Method</strong></p>
        <ol>
          {this.state.dinners.dinnerRecipes[key].steps
          .map(steps => <Steps key={steps} step={steps} />)}
        </ol>
        </div>
        )}
      </div>
    );
  }
}

Dinner.contextTypes = {
  router: React.PropTypes.object
}

export default Dinner;
