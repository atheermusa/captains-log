import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../pages/Styles/Dashboard.css'


export class Dashboard extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
}

    render() {
        const { user } = this.props.auth;
        return (
            <Fragment>
                <h1 className="title">Hello {user.username}</h1>
                <h3 id="about">Welcome to your dashboard. From here you can add players to include into your team, or create a team now!</h3>
                <Link to="/players" className="nav-link"><button className="btn-default">
                    View/Add Players</button>
                </Link>
                <Link to="/teambuilder" className="nav-link"><button className="btn-default">
                    Create Team</button>
                </Link>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  export default connect(mapStateToProps)(Dashboard);