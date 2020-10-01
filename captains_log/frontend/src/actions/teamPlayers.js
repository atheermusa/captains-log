//http requests
import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth'

import { GET_TEAMPLAYERS, DELETE_TEAMPLAYERS, ADD_TEAMPLAYERS } from './types';

//GET TEAMPLAYERS
export const getTeamPlayers = () => (dispatch, getState) => {
    axios.get('/api/teams', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_TEAMPLAYERS,
            payload: res.data
        });
    })
    .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status)));
}

//DELETE TEAMPLAYERS
export const deleteTeamPlayers = (id) => (dispatch, getState) => {
    axios
      .delete(`/api/teams/${id}/`, tokenConfig(getState))
      .then((res) => {
        dispatch(createMessage({ addReport: 'Team Deleted' }));
        dispatch({
          type: DELETE_TEAMPLAYERS,
          payload: id,
        });
      })
      .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
  };

//ADD TEAMPLAYERS
export const addTeamPlayers = (teamPlayers) => (dispatch, getState) => {
    axios.post('/api/teams/', teamPlayers, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deleteReport: 'Team Added' }));
        dispatch({
            type: ADD_TEAMPLAYERS,
            payload: res.data,
        });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
