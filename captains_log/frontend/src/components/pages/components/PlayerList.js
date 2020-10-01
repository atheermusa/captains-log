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
                idx={idx}
                id={idx}
                key={idx}
                photo={"https://images.vexels.com/media/users/3/132209/isolated/preview/a00fc18d8cd573976f1096054905655b-soccer-player-circle-icon-by-vexels.png"}
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
