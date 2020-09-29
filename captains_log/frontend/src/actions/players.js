//http requests
import axios from 'axios';
import { createMessage } from './messages';

import { GET_PLAYERS, DELETE_PLAYERS, ADD_PLAYERS, GET_ERRORS } from './types';

//GET PLAYERS
export const getPlayers = () => dispatch => {
    axios.get('/api/captains')
    .then(res => {
        dispatch({
            type: GET_PLAYERS,
            payload: res.data
        });
    }) 
    .catch(err => console.log(err));
}

//DELETE PLAYERS
export const deletePlayers = (id) => dispatch => {
    axios.delete(`/api/captains/${id}`)
    .then(res => {
        dispatch(createMessage({ deletePlayer: 'Player Deleted' }));
        dispatch({
            type: DELETE_PLAYERS,
            payload: id
        });
    })
    .catch(err => console.log(err));
}

//ADD PLAYERS
export const addPlayers = (players) => dispatch => {
    axios.post('/api/captains/', players)
    .then(res => {
        dispatch(createMessage({ addPlayer: 'Player Added' }));
        dispatch({
            type: ADD_PLAYERS,
            payload: res.data,
        });
    }) 
    .catch(err => {
        const errors = {
            msg: err.response.data,
            status: err.response.status
        };
        dispatch({
            type: GET_ERRORS,
            payload: errors
        })
    });
};