import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getReports, deleteReports } from '../../../actions/reports'
import EmailReport from './emailReport'
import { ShareTeam } from '../components';

export class ReportsList extends Component {
    static propTypes = {
        reports: propTypes.array.isRequired,
        getReports: propTypes.func.isRequired,
        deleteReports: propTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getReports();
    }

    render() {
        return (
            <Fragment>
                <h2 id="report-title">Reports</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Opposition</th>
                            <th>Message</th>
                            <th>Final Score</th>
                            <th>Result</th>
                            <th>Team</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.reports.map(report => (
                            <tr key={report.id}>
                                <td>{report.date}</td>
                                <td>{report.opposition}</td>
                                <td>{report.message}</td>
                                <td>{report.final_score}</td>
                                <td>{report.result}</td>
                                <td>{report.team_id}</td>
                                <td>
                                <button onClick={this.props.deleteReports.bind(this, report.id)} className="btn btn-danger btn-sm">Delete</button>
                                <EmailReport date={report.date} opposition={report.opposition} message = {report.message} final_score={report.final_score} result={report.result}/>
                                <ShareTeam></ShareTeam>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    reports: state.reports.reports
})

export default connect(mapStateToProps, { getReports, deleteReports })(ReportsList);
