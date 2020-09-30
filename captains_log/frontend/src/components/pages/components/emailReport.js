import React, { Component, Fragment } from 'react';

export class EmailReport extends Component {

  sendEmail = e => {
    e.preventDefault();
    console.log('i want to send an email')
  }

    render() {
        return (
            <Fragment>
              <button onClick={this.sendEmail} className="btn btn-success btn-sm"> Email </button>
            </Fragment>
        )
    }
}

export default (EmailReport);
