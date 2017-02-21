import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

//Components for routes
import Nav from './components/nav.component'

var App = React.createClass({
  render () {
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={Nav}></Route>
      </Router>
    )
  }
})

ReactDOM.render(
    <App />, document.getElementById('index-wrapper'))

export default App
