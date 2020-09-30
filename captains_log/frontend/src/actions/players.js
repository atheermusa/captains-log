//http requests
import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth'

import { GET_PLAYERS, DELETE_PLAYERS, ADD_PLAYERS } from './types';

//GET PLAYERS
export const getPlayers = () => (dispatch, getState) => {
    axios.get('/api/captains', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_PLAYERS,
            payload: res.data
        });
    })
    .catch(err => 
        dispatch(returnErrors(err.response.data, err.response.status)));
}

//DELETE PLAYERS
export const deletePlayers = (id) => (dispatch, getState) => {
    axios
      .delete(`/api/captains/${id}/`, tokenConfig(getState))
      .then((res) => {
        dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
        dispatch({
          type: DELETE_PLAYERS,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };

//ADD PLAYERS
export const addPlayers = (players) => (dispatch, getState) => {
    axios.post('/api/captains/', players, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addPlayer: 'Player Added' }));
        dispatch({
            type: ADD_PLAYERS,
            payload: res.data,
        });
    }) 
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};