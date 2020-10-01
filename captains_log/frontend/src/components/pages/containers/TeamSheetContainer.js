import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PlayerList, PlayerPosition, TeamList } from '../components';
import '../Styles/teamBuilder.css';
import propTypes from 'prop-types';
import { addTeamPlayers } from '../../../actions/teamPlayers';


export class TeamSheetContainer extends Component {

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
    playerEleven: 'threeFourThreePlayerEleven',
    position1:null,
    // player1position:"",
    position2:null,
    // player2position:"",
    position3:null,
    // player3position:"",
    position4:null,
    // player4position:"",
    position5:null,
    // player5position:"",
    position6:null,
    // player6position:"",
    position7:null,
    // player7position:"",
    position8:null,
    // player8position:"",
    position9:null,
    // player9position:"",
    position10:null,
    // player10position:"",
    position11:null
    // player11position:"",
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
  }

  static propTypes = {
      addTeamPlayers: propTypes.func.isRequired
  }

  saveTeam = (e) => {
    e.preventDefault();
    const {formation, position1, position2, position3, position4, position5, position6, position7, position8, position9, position10, position11}=this.state;
    const teamPlayers = {formation, position1, position2, position3, position4, position5, position6, position7, position8, position9, position10, position11}
    console.log(this.props.addTeamPlayers)
    this.props.addTeamPlayers(teamPlayers);
  }

  updateState1 = (player, position) => {
    this.setState(
      {
        position1:player,
        // player1position:position
      }
    )
  }
  updateState2 = (player, position) => {
    this.setState(
      {
        position2:player,
        // player2position:position
      }
    )
  }
  updateState2 = (player, position) => {
    this.setState(
      {
        position2:player,
        // player2position:position
      }
    )
  }
  updateState3 = (player, position) => {
    this.setState(
      {
        position3:player,
        // player3position:position
      }
    )
  }
  updateState4 = (player, position) => {
    this.setState(
      {
        position4:player,
        // player4position:position
      }
    )
  }
  updateState5 = (player, position) => {
    this.setState(
      {
        position5:player,
        // player5position:position
      }
    )
  }
  updateState6 = (player, position) => {
    this.setState(
      {
        position6:player,
        // player6position:position
      }
    )
  }
  updateState7 = (player, position) => {
    this.setState(
      {
        position7:player,
        // player7position:position
      }
    )
  }
  updateState8 = (player, position) => {
    this.setState(
      {
        position8:player,
        // player8position:position
      }
    )
  }
  updateState9 = (player, position) => {
    this.setState(
      {
        position9:player,
        // player9position:position
      }
    )
  }
  updateState10 = (player, position) => {
    this.setState(
      {
        position10:player,
        // player10position:position
      }
    )
  }
  updateState11 = (player, position) => {
    this.setState(
      {
        position11:player,
        // player11position:position
      }
    )
  }


  render() {
    return (
      <div id='team-builder-container'>
        <div id='team-builder-teams-container'>
        <h1>Teams</h1>
        <p>Click to see different team formations</p>
          <TeamList></TeamList>
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
            <PlayerPosition updateState={this.updateState1} id="player-position-1" className={this.state.playerOne} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState2} id="player-position-2" className={this.state.playerTwo} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState3} id="player-position-3" className={this.state.playerThree} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState4} id="player-position-4" className={this.state.playerFour} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState5} id="player-position-5" className={this.state.playerFive} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState6} id="player-position-6" className={this.state.playerSix} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState7} id="player-position-7" className={this.state.playerSeven} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState8} id="player-position-8" className={this.state.playerEight} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState9} id="player-position-9" className={this.state.playerNine} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState10} id="player-position-10" className={this.state.playerTen} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState11} id="player-position-11" className={this.state.playerEleven} ></PlayerPosition>
          </div>
          <button onClick={this.saveTeam}>Save Team</button>
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

export default connect(null, { addTeamPlayers })(TeamSheetContainer);
