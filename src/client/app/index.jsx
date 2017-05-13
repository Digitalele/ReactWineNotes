var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Wine = require('Wine');
var About = require('About');
var Examples = require('Examples');

//Load foundation css! loader inject
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

//Main component
ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}>//if / then IndexRout else about 
    <Route path="about" component={About}/>
    <Route path="examples" component={Examples}/>
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