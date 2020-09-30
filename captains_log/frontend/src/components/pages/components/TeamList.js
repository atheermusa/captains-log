import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TeamThumbnail } from '.';
import PropTypes from 'prop-types';
import { getTeams, deleteTeams } from '../../../actions/teams'


export class TeamList extends Component {

    static propTypes = {
        teams: PropTypes.array.isRequired,
        getTeams: PropTypes.func.isRequired,
        deleteTeams: PropTypes.func.isRequired
    };


    componentDidMount() {
        this.props.getTeams();
    }

    render() {
        return (
            <div id = 'team-list-container'>
                teamslist
                {this.props.teams.map((teams, idx) => (
              <TeamThumbnail
                idx={idx}
                id={idx}
                key={idx}
                photo={"https://res.cloudinary.com/dl4pcxjxz/image/upload/v1601484399/443251-PFJIKT-956-01_wgpvbl.png"}
                team_name={teams.team_name}
                formation={teams.formation}
              />
              ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    teams: state.teams.teams
})

export default connect(mapStateToProps, { getTeams, deleteTeams })(TeamList);
