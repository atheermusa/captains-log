import React, { Fragment } from 'react';
import AddPlayerForm from './AddPlayerForm';
import PlayerList from './PlayerList';

export default function Dashboard() {
    return (
        <Fragment>
            <AddPlayerForm />
            <PlayerList />
        </Fragment>
    )
}
