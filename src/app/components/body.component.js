import React, { PropTypes } from 'react'
import axios from 'axios'

const Body = React.createClass({
  getInitialState(){
    return {
      twitchChannel: []
    }
  },

  componentWillMount(){
    axios.get('/getTwitch').then((res)=>{
      console.log(res);
    })
  },

  render () {
    return (
      <div>
        <h1>Booyah</h1>
      </div>
    )
  }
})

export default Body
