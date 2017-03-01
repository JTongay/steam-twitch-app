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
      <div>
        <Router history={browserHistory}>
          <Route path={'/'} component={Nav}><Nav /></Route>
          <Route path={'/body'} component={Body}></Route>
          <Route path={'/home'} component={Home}></Route>
        </Router>
      </div>
    )
  }
})

ReactDOM.render(
    <App />, document.getElementById('index-wrapper'))

export default App
