import
    
 React, { Component } from 'react';
import { connect } from 'react-redux';
import { PlayerThumbnail } from '.';
import PropTypes from 'prop-types';
import { getPlayers } from '../../../actions/players'


export class ShareTeam extends Component {

    static propTypes = {
        players: PropTypes.array.isRequired,
        getPlayers: PropTypes.func.isRequired,
    };

    state = {
      playerEmails: []
    }

    getPlayerEmails = () => {
      this.props.players.map((player, idx) => (
        this.state.playerEmails.push([player.email])))
        console.log(this.state.playerEmails) 
    }

    componentDidMount() {
        this.props.getPlayers();
    }

    render() {
        return (
            <div id = 'share-team-container'>
              <button onClick= {this.getPlayerEmails}>
              <a href=  "mailto:emai@email.com?subject=Team Lineup">Send Email</a>
              </button>
              
            </div>
        )
    }
}

const mapStateToProps = state => ({
    players: state.players.players
})

export default connect(mapStateToProps, { getPlayers, })( ShareTeam);