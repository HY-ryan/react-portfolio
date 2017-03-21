import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

//import './css/bootstrap.min.css';

import App from './components/App';

import KitchenPiHome from './components/kitchenpi/KitchenPiHome';
import Breakfast from './components/kitchenpi/Breakfast';
import Lunch from './components/kitchenpi/Lunch';
import Dinner from './components/kitchenpi/Dinner';
import Blog from './components/blog/Blog';

import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={App} />
      <Match exactly pattern="/kitchenpi" component={KitchenPiHome} />
      <Match exactly pattern="/kitchenpi/breakfast" component={Breakfast} />
      <Match exactly pattern="/kitchenpi/lunch" component={Lunch} />
      <Match exactly pattern="/kitchenpi/dinner" component={Dinner} />
      <Match exactly pattern="/blog" component={Blog} />
      <Miss component={NotFound} />
    </div>
    </BrowserRouter>
  )
}


render(<Root />, document.querySelector('#main'));
