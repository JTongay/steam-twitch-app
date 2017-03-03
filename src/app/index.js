import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, Link, IndexRoute} from 'react-router';

//Components for routes
import Nav from './components/nav.component'
import Home from './components/home.component'
import Body from './components/body.component'

const App = React.createClass({
  render () {
    return (
        <Router history={browserHistory} component={Nav}>
            <Route path="/home" component={Home}></Route>
            <Route path='/body' component={Body}></Route>
        </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('router-outlet'))


export default App
