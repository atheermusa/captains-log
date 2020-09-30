import React, { Component } from 'react'
import { PlayerList, PlayerPosition } from '../components'
import '../Styles/teamBuilder.css'

export default class TeamSheetContainer extends Component {

  state = {
    formation: 'formationOne',
    playerOne: 'threeFourThreePlayerOne',
    playerTwo: 'threeFourThreePlayerTwo',
    playerThree: 'threeFourThreePlayerThree',
    playerFour: 'threeFourThreePlayerFour',
    playerFive: 'threeFourThreePlayerFive',
    playerSix: 'threeFourThreePlayerSix',
    playerSeven: 'threeFourThreePlayerSeven',
    playerEight: 'threeFourThreePlayerEight',
    playerNine: 'threeFourThreePlayerNine',
    playerTen: 'threeFourThreePlayerTen',
    playerEleven: 'threeFourThreePlayerEleven'
  }

  formationPicker = (e) => {
    this.setState(
      {
        formation: e.target.value,
        playerOne: e.target.value + 'PlayerOne',
        playerTwo: e.target.value + 'PlayerTwo',
        playerThree: e.target.value + 'PlayerThree',
        playerFour: e.target.value + 'PlayerFour',
        playerFive: e.target.value + 'PlayerFive',
        playerSix: e.target.value + 'PlayerSix',
        playerSeven: e.target.value + 'PlayerSeven',
        playerEight: e.target.value + 'PlayerEight',
        playerNine: e.target.value + 'PlayerNine',
        playerTen: e.target.value + 'PlayerTen',
        playerEleven: e.target.value + 'PlayerEleven'
      }
      )
      console.log(this.state)
  }
  render() {
    return (
      <div id='team-builder-container'>
        <div id='team-builder-teams-container'>

        </div>
        <div id="team-builder-pitch-container">
          <div className="formation-selector">
            <select onChange = {this.formationPicker} value={this.state.formation}>
              <option value="threeFourThree">3-4-3</option>
              <option value="threeFiveTwo">3-5-2</option>
              <option value="fourFourTwo">4-4-2</option>
              <option value="fourThreeThree">4-3-3</option>
              <option value="fourTwoThree">4-2-3</option>
            </select>
          </div>
          <div id="teamGrid" className={this.state.formation}>
            <PlayerPosition id="player-position-1" className={this.state.playerOne} ></PlayerPosition>
            <PlayerPosition id="player-position-2" className={this.state.playerTwo} ></PlayerPosition>
            <PlayerPosition id="player-position-3" className={this.state.playerThree} ></PlayerPosition>
            <PlayerPosition id="player-position-4" className={this.state.playerFour} ></PlayerPosition>
            <PlayerPosition id="player-position-5" className={this.state.playerFive} ></PlayerPosition>
            <PlayerPosition id="player-position-6" className={this.state.playerSix} ></PlayerPosition>
            <PlayerPosition id="player-position-7" className={this.state.playerSeven} ></PlayerPosition>
            <PlayerPosition id="player-position-8" className={this.state.playerEight} ></PlayerPosition>
            <PlayerPosition id="player-position-9" className={this.state.playerNine} ></PlayerPosition>
            <PlayerPosition id="player-position-10" className={this.state.playerTen} ></PlayerPosition>
            <PlayerPosition id="player-position-11" className={this.state.playerEleven} ></PlayerPosition>
          </div>
        </div>
        <div id='team-builder-players-container'>
            <h1>Players</h1>
            <p>Drag and drop the player image into the desired position</p>
            <div className='team-builder-players-list'>
              <PlayerList></PlayerList>
            </div>
        </div>
      </div>
    )
  }
}
