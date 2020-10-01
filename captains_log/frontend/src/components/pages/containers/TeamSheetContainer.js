import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PlayerList, PlayerPosition, TeamList, ShareTeam } from '../components';
import '../Styles/teamBuilder.css';
import propTypes from 'prop-types';
import { addTeamPlayers } from '../../../actions/teamPlayers';


export class TeamSheetContainer extends Component {

  state = {
    formation: 'threeFourThree',
    team_name: null,
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
    playerposition1:null,
    playerposition2:null,
    playerposition3:null,
    playerposition4:null,
    playerposition5:null,
    playerposition6:null,
    playerposition7:null,
    playerposition8:null,
    playerposition9:null,
    playerposition10:null,
    playerposition11:null
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
    const {formation, team_name, position1, position2, position3, position4, position5, position6, position7, position8, position9, position10, position11}=this.state;
    const teamPlayers = {formation, team_name, position1, position2, position3, position4, position5, position6, position7, position8, position9, position10, position11}
    this.props.addTeamPlayers(teamPlayers);
    this.setState({
      formation: 'threeFourThree',
      team_name: null,
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
      playerposition1:null,
      playerposition2:null,
      playerposition3:null,
      playerposition4:null,
      playerposition5:null,
      playerposition6:null,
      playerposition7:null,
      playerposition8:null,
      playerposition9:null,
      playerposition10:null,
      playerposition11:null
  });
  }


  updateState = (player, posit) => {
    let position
    if(posit){
      position = posit.replace('-','').replace('-','')
    } else {
       position = posit
     }
    console.log(position, player)
    console.log(this.state)

    for(let key in this.state) {
      if(this.state[key] === player){
        this.setState({[key]:null})
      }
    }
    this.setState({[position]:player})
  }

  nameChange = (e) => {
    this.setState(
      {
        team_name: e.target.value,
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
          <div>
            <label>Team Name</label>
            <input
              type="text"
              name="team_name"
              onChange={this.nameChange}
            />
          </div>
          <div id="teamGrid" className={this.state.formation}>
            <PlayerPosition updateState={this.updateState} id="player-position-1" className={this.state.playerOne} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState} id="player-position-2" className={this.state.playerTwo} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState} id="player-position-3" className={this.state.playerThree} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState} id="player-position-4" className={this.state.playerFour} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState} id="player-position-5" className={this.state.playerFive} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState} id="player-position-6" className={this.state.playerSix} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState} id="player-position-7" className={this.state.playerSeven} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState} id="player-position-8" className={this.state.playerEight} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState} id="player-position-9" className={this.state.playerNine} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState} id="player-position-10" className={this.state.playerTen} ></PlayerPosition>
            <PlayerPosition updateState={this.updateState} id="player-position-11" className={this.state.playerEleven} ></PlayerPosition>
          </div>
          <button onClick={this.saveTeam}>Save Team</button>
          <ShareTeam></ShareTeam>
        </div>
        <div id='team-builder-players-container'>
            <h1>Players</h1>
            <p>Drag and drop the player image into the desired position</p>
            <div className='team-builder-players-list'>
              <PlayerList
                  updateState={this.updateState}
                  >
              </PlayerList>
            </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { addTeamPlayers })(TeamSheetContainer);
