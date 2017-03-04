import React, { PropTypes } from 'react'
import axios from 'axios'

const HomeComponent = React.createClass({

  componentWillMount(){
      axios.get('http://pokeapi.co/api/v2/pokemon/1').then((res)=>{
        console.log(res.data);
      })
  },

  render () {
    return (
      <h1>Welcome to the Home Page</h1>
    )
  }
})

export default HomeComponent
