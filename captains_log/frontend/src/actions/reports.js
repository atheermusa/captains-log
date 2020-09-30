//http requests
import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth'

import { GET_REPORTS, DELETE_REPORTS, ADD_REPORTS } from './types';

//GET REPORTS
export const getReports = () => (dispatch, getState) => {
    axios.get('/api/reports', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_REPORTS,
            payload: res.data
        });
    })
    .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status)));
}

//DELETE REPORTS
export const deleteReports = (id) => (dispatch, getState) => {
    axios
      .delete(`/api/reports/${id}/`, tokenConfig(getState))
      .then((res) => {
        dispatch(createMessage({ addPlayer: 'Report Deleted' }));
        dispatch({
          type: DELETE_REPORTS,
          payload: id,
        });
      })
      .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
  };

//ADD REPORTS
export const addReports = (reports) => (dispatch, getState) => {
    axios.post('/api/reports/', reports, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addPlayer: 'Report Added' }));
        dispatch({
            type: ADD_REPORTS,
            payload: res.data,
        });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
