import React, { Component } from 'react'

export default class PokeCard extends Component{
    render(){
        const { pokemon, onClick } = this.props
        return(
            <button className="border-0 bg-white" onClick={onClick}>
                <img src={pokemon.sprites.front_default} alt={`${pokemon.name}'s mugshot`} />
                <p>{pokemon.name}</p>
            </button>
        )
    }
}