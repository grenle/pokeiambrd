import React, { Component } from 'react'

import './PokeHero.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

export default class PokeHero extends Component{
    render(){
        const { pokemon } = this.props
        const { name, types, weight, height } = pokemon
        const displayTypes = types.map( type => type.type.name ).join(', ')
            return(
                <Row className="poke-hero bg-secondary align-items-center">
                    <Col xs={12} md={6}>
                        <Image fluid src={pokemon.sprites.other['official-artwork'].front_default} />
                    </Col>
                    <Col xs={12} md={6}>
                        <ListGroup>
                            <ListGroup.Item variant="secondary">Name: {name}</ListGroup.Item>
                            <ListGroup.Item variant="secondary">Types: {displayTypes}</ListGroup.Item>
                            <ListGroup.Item variant="secondary">Weight: {weight/10} kg</ListGroup.Item>
                            <ListGroup.Item variant="secondary">Height: {height/10} m</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
        )
    }
}