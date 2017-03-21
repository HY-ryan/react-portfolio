import React from 'react';


class KitchenPiHome extends React.Component {
  render() {
    return (
      <div className="text-center container-fluid pi-home">

        <div className="row">

          <h1>What are we making?</h1>

          <div className="col-xs-4">
            <button type="button" className="btn btn-default pi-button" onClick={() => this.context.router.transitionTo(`/kitchenpi/breakfast`)}>Breakfast</button>
          </div>

          <div className="col-xs-4">
            <button type="button" className="btn btn-default pi-button" onClick={() => this.context.router.transitionTo(`/kitchenpi/lunch`)}>Lunch</button>
          </div>

          <div className="col-xs-4">
            <button type="button" className="btn btn-default pi-button" onClick={() => this.context.router.transitionTo(`/kitchenpi/dinner`)}>Dinner</button>
          </div>
        </div>

          <div className="padit">
            <h3>Or, choose from the full list</h3>
            <select className="recipe-full-list">
              <option>Full List</option>
            </select>
          </div>

      </div>
    );
  }
}

KitchenPiHome.contextTypes = {
  router: React.PropTypes.object
}

export default KitchenPiHome;
