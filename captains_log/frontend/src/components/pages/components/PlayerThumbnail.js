import React, { Component } from 'react'
import { PlayerCard, PlayerPosition } from '.'
import '../Styles/playerThumbnail.css'

export default class PlayerThumbnail extends Component {

    state = {
        id: `player${this.props.id}`
    }

    render() {
        return (
            <div className='player-thumbnail-container'>
                <PlayerPosition>
                <PlayerCard id = {this.state.id} className="player-thumbnail">
                    <img className="player-thumbnail-photo" src={this.props.photo} alt="football shirt icon"></img>
                    <p className= 'player-thumbnail-name' >{this.props.firstName} {this.props.lastName}</p>
                </PlayerCard>
                </PlayerPosition>
                <p className= 'player-thumbnail-notes'>{this.props.firstName} {this.props.lastName} </p>
            </div>
        )
    }
}
