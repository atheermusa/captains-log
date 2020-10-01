import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { addPlayers } from '../../actions/players';
import './Styles/Players.css'

export class AddPlayerForm extends Component {
    state = {
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        player_notes: ""
    };

    static propTypes = {
        addPlayers: propTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { firstname, lastname, email, player_notes} = this.state;
        const player = { firstname, lastname, email, player_notes };
        this.props.addPlayers(player);
        this.setState({
            firstname: "",
            lastname: "",
            email: "",
            player_notes: ""
        });
    };

    render() {
        const { firstname, lastname, email, player_notes} = this.state;
        return (
            <div className="card-card-body-mt-4-mb-4">
            <h2>Add Player</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="firstname"
                  onChange={this.onChange}
                  value={firstname}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="lastname"
                  onChange={this.onChange}
                  value={lastname}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label>Player Notes</label>
                <input
                  className="form-control"
                  type="text"
                  name="player_notes"
                  onChange={this.onChange}
                  value={player_notes}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <Link to="/teambuilder" className="nav-link">Create Team
                </Link>
              </div>
            </form>
          </div>
        )
    }
}

export default connect(null, { addPlayers })(AddPlayerForm);
