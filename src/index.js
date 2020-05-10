import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, HashRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//Routing
import ContactUsComponent from './contact-us/contact.us.component'
import HomeComponent from './home/home.component'
import ProductsComponent from './products/products.component'


const routing = (
  <HashRouter basename="/">
    <div>
      <Route extact path="/home" component={HomeComponent} />
      <Route path="/products" component={ProductsComponent} />
      <Route path="/contact" component={ContactUsComponent} />
    </div>
  </HashRouter>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
