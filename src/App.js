import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from "react"

import Container from 'react-bootstrap/Container'

import PokeHero from './components/PokeHero'
import PokeList from './components/PokeList'

import { getPokemons } from './utils'


class App extends Component{
  constructor(){
    super()
    this.state = {
      selectedIndex: 0,
      pokemons: []
    }
  }
  async componentDidMount(){
    const pokemons = await getPokemons()
    this.setState({pokemons})
  }
  selectPokemon = function selectPokemon(selectedIndex){
    this.setState({selectedIndex})
  }.bind(this)
  render(){
    const { pokemons, selectedIndex } = this.state
    return (
      <Container fluid>
        {pokemons.length && <PokeHero pokemon={pokemons[selectedIndex]} />}
        <PokeList onClick={this.selectPokemon} pokemons={pokemons} />
      </Container>
    )
  }
}

export default App;
