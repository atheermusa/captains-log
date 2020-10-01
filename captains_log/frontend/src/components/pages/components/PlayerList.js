import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PlayerThumbnail } from '.';
import PropTypes from 'prop-types';
import { getPlayers, deletePlayers } from '../../../actions/players'


export class PlayerList extends Component {

    static propTypes = {
        players: PropTypes.array.isRequired,
        getPlayers: PropTypes.func.isRequired,
        deletePlayers: PropTypes.func.isRequired
    };


    componentDidMount() {
        this.props.getPlayers();
    }

    render() {
        return (
            <div id = 'player-list-container'>
                {this.props.players.map((player, idx) => (
              <PlayerThumbnail
                updateState={this.props.updateState}
                idx={idx}
                id={idx}
                key={idx}
                photo={"https://res.cloudinary.com/dl4pcxjxz/image/upload/v1601304993/cbWFuY2hlc3Rlci11bml0ZWQtc2hpcnQtMjAyMC0yMS1udW1iZXItNy1iZWNraGFtLTM5NDItMDAxLXNxdWFyZQ_aa_qt8ujn.png"}
                firstName={player.firstname}
                lastName={player.lastname}
                email={player.email}
                notes={player.player_notes}
              />))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    players: state.players.players
})

export default connect(mapStateToProps, { getPlayers, deletePlayers })(PlayerList);
