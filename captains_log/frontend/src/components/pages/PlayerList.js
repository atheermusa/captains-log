import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getPlayers, deletePlayers } from '../../actions/players'

export class PlayerList extends Component {
    static propTypes = {
        players: propTypes.array.isRequired,
        getPlayers: propTypes.func.isRequired,
        deletePlayers: propTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getPlayers();
    }

    render() {
        return (
            <Fragment>
                <h2>Players</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Second Name</th>
                            <th>Email</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.players.map(player => (
                            <tr key={player.id}>
                                <td>{player.id}</td>
                                <td>{player.firstname}</td>
                                <td>{player.lastname}</td>
                                <td>{player.email}</td>
                                <td><button onClick={this.props.deletePlayers.bind(this, player.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    players: state.players.players
})

export default connect(mapStateToProps, { getPlayers, deletePlayers })(PlayerList);
