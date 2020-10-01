import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { addReports } from '../../../actions/reports';

export class AddReport extends Component {
    state = {
        id: "",
        date: "",
        opposition: "",
        message: "",
        final_score: "",
        result:"",
        team_id:""
    };

    static propTypes = {
        addReports: propTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { date, opposition, message, final_score, result, team_id} = this.state;
        const report = { date, opposition, message, final_score, result, team_id };
        this.props.addReports(report);
        this.setState({
            date: "",
            opposition: "",
            message: "",
            final_score: "",
            result:"",
            team_id:""
        });
    };

    render() {
        const { date, opposition, message, final_score, result, team_id} = this.state;
        return (
            <div className="card-card-body-mt-4-mb-4">
            <h2>Add Report</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Date</label>
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  onChange={this.onChange}
                  value={date}
                />
              </div>
              <div className="form-group">
                <label>Opposition</label>
                <input
                  className="form-control"
                  type="text"
                  name="opposition"
                  onChange={this.onChange}
                  value={opposition}
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <input
                  className="form-control"
                  type="text"
                  name="message"
                  onChange={this.onChange}
                  value={message}
                />
              </div>
              <div className="form-group">
                <label>Final Score</label>
                <input
                  className="form-control"
                  type="text"
                  name="final_score"
                  onChange={this.onChange}
                  value={final_score}
                />
              </div>
              <div className="form-group">
                <label>Result</label>
                <input
                  className="form-control"
                  type="text"
                  name="result"
                  onChange={this.onChange}
                  value={result}
                />
              </div>
              <div className="form-group">
                <label>Team id</label>
                <input
                  className="form-control"
                  type="number"
                  name="team_id"
                  onChange={this.onChange}
                  value={team_id}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )
    }
}

export default connect(null, { addReports })(AddReport);
