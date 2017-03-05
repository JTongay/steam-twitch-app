import React, { PropTypes } from 'react'
import axios from 'axios'

const HomeComponent = React.createClass({

  getInitialState(){
    return {
      pokemon: []
    }
  },

  getPokemon(data, cb){
    this.pokemon = data;
    console.log(this.pokemon);
    cb()
  },

  rerender(){
    this.setState({
      pokemon: []
    })
  },

  componentWillMount(){
      axios.get('http://pokeapi.co/api/v2/pokemon/1').then((res)=>{
        console.log(res.data);
        this.setState({
          pokemon: res.data
        })
      })
  },

  render () {
    return (
      <div>
        <h1>Discover your favorite channel on Twitch</h1>
        <p>{this.state.pokemon.name}</p>
        <p>{this.state.pokemon.name}</p>
      </div>
    )
  }
})

export default HomeComponent
