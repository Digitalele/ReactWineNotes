import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'


import Main from 'Main'
import Wine from 'Wine'
import About from 'About'
import User from 'User'
import WineFields from 'WineFields'
import AppCrud from 'AppCrud'
import WineFieldsEdit from 'WineFieldsEdit'





//Load foundation css! loader inject
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css');

$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

//Main component
ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}>//if / then IndexRout else about 
    <Route path="about" component={About}/>
    <Route path="user" component={User}/>
    <Route path="appcrud" component={AppCrud}/>
    <Route path="winefields(/:id)" component={WineFields} />
    <Route path="winefieldsedit(/:id)(/:userKey)" component={WineFieldsEdit} />
    <IndexRoute component={Wine}/>
  </Route>
</Router>,
  document.getElementById('app')
);



//state can be change, props cant

//container components have states
//presentation component don't

//container components maintain stats black
//form and message are presentation components
//nested components