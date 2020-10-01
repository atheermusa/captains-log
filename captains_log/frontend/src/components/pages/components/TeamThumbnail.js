import React, { Component } from 'react'
import { PlayerCard } from '.'
import '../Styles/playerThumbnail.css'

export default class TeamThumbnail extends Component {

    state = {
        id: `player${this.props.id}`
    }

    render() {
        return (
            <div className='player-thumbnail-container'>
                {/* <img className="player-thumbnail-photo" src={this.props.photo} alt="football shirt icon"></img> */}
                <h2 className= 'player-thumbnail-name' >{this.props.team_name} {this.props.lastName}</h2>
                <p className= 'player-thumbnail-notes'>Formation: {this.props.formation}</p>
            </div>
        )
    }
}
