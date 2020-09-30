//http requests
import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth'

import { GET_TEAMS, DELETE_TEAMS, ADD_TEAMS } from './types';

//GET TEAMS
export const getTeams = () => (dispatch, getState) => {
    axios.get('/api/teams/', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_TEAMS,
            payload: res.data
        });
    })
    .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status)));
}

//DELETE TEAMS
export const deleteTeams = (id) => (dispatch, getState) => {
    axios
      .delete(`/api/teams/${id}/`, tokenConfig(getState))
      .then((res) => {
        dispatch(createMessage({ addTeam: 'Team Deleted' }));
        dispatch({
          type: DELETE_TEAMS,
          payload: id,
        });
      })
      .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
  };

//ADD TEAMS
export const addTeams = (teams) => (dispatch, getState) => {
    axios.post('/api/teams/', teams, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deleteTeam: 'Team Added' }));
        dispatch({
            type: ADD_TEAMS,
            payload: res.data,
        });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};