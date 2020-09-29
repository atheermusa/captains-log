import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { addPlayers } from '../../actions/players';

export class AddPlayerForm extends Component {
    state = {
        id: "",
        firstname: "",
        lastname: "",
        email: ""
    };

    static propTypes = {
        addPlayers: propTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { firstname, lastname, email} = this.state;
        const player = { firstname, lastname, email };
        this.props.addPlayers(player);
        this.setState({
            firstname: "",
            lastname: "",
            email: ""
        });
    };

    render() {
        const { firstname, lastname, email} = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
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
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )
    }
}

export default connect(null, { addPlayers })(AddPlayerForm);
