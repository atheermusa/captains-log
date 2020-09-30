import React, { Fragment } from 'react';
import AddPlayerForm from '../AddPlayerForm';
import PlayerList from '../PlayerList';

export default function PlayersPage() {
    return (
        <Fragment>
            <AddPlayerForm />
            <PlayerList />
        </Fragment>
    )
}