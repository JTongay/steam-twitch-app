import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, Link} from 'react-router';

//Components for routes
import Nav from './components/nav.component'
import Home from './components/home.component'
import Body from './components/body.component'

var App = React.createClass({
  render () {
    return (
        <Router history={browserHistory}>
          <Route path={'/'} component={Home}></Route>
          <Route path={'/body'} component={Body}></Route>
        </Router>
    )
  }
})

export default App
