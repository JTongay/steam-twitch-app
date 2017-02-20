import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

const IndexComponent = React.createClass({
  render () {
    return (
      <div>
        <p>Booyah</p>
      </div>
    )
  }
})

ReactDOM.render(
    <IndexComponent/>, document.getElementById('index-wrapper'))

export default IndexComponent
