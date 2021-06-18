import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PokeCard from '../PokeCard'

export default class PokeList extends Component{
    render(){
        const { onClick, pokemons } = this.props
        return(
            <Row>
            {pokemons.map( (pokemon, i) => {
                return ( 
                    <Col key={i} xs={2}>
                        <PokeCard onClick={()=>{onClick(i)}} pokemon={pokemon} />
                    </Col>
                )
                })}
            </Row>
        )
    }
}