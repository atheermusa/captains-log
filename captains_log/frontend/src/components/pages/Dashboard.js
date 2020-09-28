import React, { Fragment } from 'react';
import Form from './Form';
import PlayerList from './PlayerList';

export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <PlayerList />
        </Fragment>
    )
}
