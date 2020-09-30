import React, { Component, Fragment } from 'react';

export class EmailReport extends Component {

  createPDF = e => {
    window.location.href = `http://127.0.0.1:8000/pdf/${this.props.date}${this.props.opposition}${this.props.message}${this.props.final_score}${this.props.result}`;

  }

    render() {
        return (
            <Fragment>
              <button onClick={this.createPDF} className="btn btn-success btn-sm"> Create PDF </button>
            </Fragment>
        )
    }
}

export default (EmailReport);
