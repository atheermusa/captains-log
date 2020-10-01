import React, { Component } from 'react'
import { PlayerCard } from '.'
import '../Styles/playerThumbnail.css'

export default class TeamThumbnail extends Component {

    state = {
        id: `player${this.props.id}`,
    }


    render() {
        return (
            <div className='player-thumbnail-container'>
                {/*<img className="player-thumbnail-photo" src={this.props.photo} alt="football shirt icon"></img>*/}
                <h2 className= 'player-thumbnail-name' >{this.props.team_id}</h2>
                <h2 className= 'player-thumbnail-name' >{this.props.team_name}</h2>
                <p className= 'player-thumbnail-notes'>Formation: {this.props.formation}</p>
                <button onClick={this.props.deleteTeams} className="btn btn-danger btn-sm">Delete</button>
            </div>
        )
    }
}
