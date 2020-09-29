import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if(error !== prevProps.error) {
            if(error.msg.firstname) alert.error(`First name: ${error.msg.firstname.join()}`);
            if(error.msg.lastname) alert.error(`Last name: ${error.msg.lastname.join()}`);
            if(error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
        }


        if (message !== prevProps.message) {
            if (message.deletePlayer) alert.success(message.deletePlayer);
            if (message.addPlayer) alert.success(message.addPlayer);
        }
    }

    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts)); 
