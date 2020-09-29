import React, { Component } from 'react';
import { PlayerThumbnail } from '.';

export default class PlayerList extends Component {

    state = {
        players: [
            {
                id:1,
                photo: "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1601304993/cbWFuY2hlc3Rlci11bml0ZWQtc2hpcnQtMjAyMC0yMS1udW1iZXItNy1iZWNraGFtLTM5NDItMDAxLXNxdWFyZQ_aa_qt8ujn.png",
                firstName: 'Roy',
                lastName: 'Keane',
                email: 'roykeane@gmail.com',
                notes: "what a player, what a man"

            },
            {
                id:2,
                photo: "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1601304993/cbWFuY2hlc3Rlci11bml0ZWQtc2hpcnQtMjAyMC0yMS1udW1iZXItNy1iZWNraGFtLTM5NDItMDAxLXNxdWFyZQ_aa_qt8ujn.png",
                firstName: 'David',
                lastName: 'Beckham',
                email: 'davidbeckham@gmail.com',
                notes: "what a player, what a man"

            },
            {
                id:3,
                photo: "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1601304993/cbWFuY2hlc3Rlci11bml0ZWQtc2hpcnQtMjAyMC0yMS1udW1iZXItNy1iZWNraGFtLTM5NDItMDAxLXNxdWFyZQ_aa_qt8ujn.png",
                firstName: 'Gary',
                lastName: 'Neville',
                email: 'garyneville@gmail.com',
                notes: "what a player, what a man"

            },
            {
                id:4,
                photo: "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1601304993/cbWFuY2hlc3Rlci11bml0ZWQtc2hpcnQtMjAyMC0yMS1udW1iZXItNy1iZWNraGFtLTM5NDItMDAxLXNxdWFyZQ_aa_qt8ujn.png",
                firstName: 'Peter',
                lastName: 'Schmeichel',
                email: 'peterschmeichel@gmail.com',
                notes: "what a player, what a man"

            },
            {
                id:5,
                photo: "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1601304993/cbWFuY2hlc3Rlci11bml0ZWQtc2hpcnQtMjAyMC0yMS1udW1iZXItNy1iZWNraGFtLTM5NDItMDAxLXNxdWFyZQ_aa_qt8ujn.png",
                firstName: 'Phil',
                lastName: 'Neville',
                email: 'philneville@gmail.com',
                notes: "what a player, what a man"

            },
            {
                id:6,
                photo: "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1601304993/cbWFuY2hlc3Rlci11bml0ZWQtc2hpcnQtMjAyMC0yMS1udW1iZXItNy1iZWNraGFtLTM5NDItMDAxLXNxdWFyZQ_aa_qt8ujn.png",
                firstName: 'Ryan',
                lastName: 'Giggs',
                email: 'ryangiggs@gmail.com',
                notes: "what a player, what a man"

            },
            {
                id:7,
                photo: "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1601304993/cbWFuY2hlc3Rlci11bml0ZWQtc2hpcnQtMjAyMC0yMS1udW1iZXItNy1iZWNraGFtLTM5NDItMDAxLXNxdWFyZQ_aa_qt8ujn.png",
                firstName: 'Andy',
                lastName: 'Cole',
                email: 'andycole@gmail.com',
                notes: "what a player, what a man"

            },
            {
                id:8,
                photo: "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1601304993/cbWFuY2hlc3Rlci11bml0ZWQtc2hpcnQtMjAyMC0yMS1udW1iZXItNy1iZWNraGFtLTM5NDItMDAxLXNxdWFyZQ_aa_qt8ujn.png",
                firstName: 'Ronny',
                lastName: 'Johnsen',
                email: 'ronnyjohnsen@gmail.com',
                notes: "what a player, what a man"

            },
            {
                id:9,
                photo: "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1601304993/cbWFuY2hlc3Rlci11bml0ZWQtc2hpcnQtMjAyMC0yMS1udW1iZXItNy1iZWNraGFtLTM5NDItMDAxLXNxdWFyZQ_aa_qt8ujn.png",
                firstName: 'Mikael',
                lastName: 'Silvastre',
                email: 'mikaelsilvastre@gmail.com',
                notes: "what a player, what a man"

            },
            {
                id:10,
                photo: "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1601304993/cbWFuY2hlc3Rlci11bml0ZWQtc2hpcnQtMjAyMC0yMS1udW1iZXItNy1iZWNraGFtLTM5NDItMDAxLXNxdWFyZQ_aa_qt8ujn.png",
                firstName: 'Paul',
                lastName: 'Scholes',
                email: 'paulscholes@gmail.com',
                notes: "what a player, what a man"

            },
            {
                id:11,
                photo: "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1601304993/cbWFuY2hlc3Rlci11bml0ZWQtc2hpcnQtMjAyMC0yMS1udW1iZXItNy1iZWNraGFtLTM5NDItMDAxLXNxdWFyZQ_aa_qt8ujn.png",
                firstName: 'Ole',
                lastName: 'Gunnar Solskjaer',
                email: 'olegunnarsolskjaer@gmail.com',
                notes: "what a player, what a man"

            },

        ]
    }



    render() {
        return (
            <div id = 'player-list-container'>
                {this.state.players.map((player, idx) => (
              <PlayerThumbnail
                idx={idx}
                id={idx}
                key={idx}
                photo={player.photo}
                firstName={player.firstName}
                lastName={player.lastName}
                email={player.email}
                notes={player.notes}
              />))}
            </div>
        )
    }
}
