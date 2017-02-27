import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

//Components for routes
import Nav from './components/nav.component'
import Home from './components/home.component'

var App = React.createClass({
  render () {
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={Nav}>
          <Route path={'/home'} component={Home}></Route>
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(
    <App />, document.getElementById('index-wrapper'))

export default App
