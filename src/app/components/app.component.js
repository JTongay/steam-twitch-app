import React, { PropTypes } from 'react'
import Nav from './nav.component'

const App = React.createClass({
  render () {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>

    )
  }
})

export default App
