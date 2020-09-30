import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Home.css';

export default function PlayersPage() {
    return (
        <Fragment>
            <h1 className="title">Captain’s Log</h1>
            <h3 id="about">The all-in-one management suite to keep track of your team off the pitch so you can make the most of them on it</h3>
            <Link to="/register"><button className="btn-default">Click here to register</button></Link>
        </Fragment>
    )
}