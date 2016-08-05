import axios from 'axios';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
  FETCH_PROFILES,
  CREATE_PROFILE,
  FETCH_PROFILE,
  DELETE_PROFILE,
} from './types';


const ROOT_URL = 'http://localhost:3000/profiles';

function fetchProfiles() {
  return dispatch => axios.get(`${ROOT_URL}`)
    .then(
      payload => dispatch({
        type: FETCH_PROFILES,
        payload
      })
    );
}

function createProfile(props) {
  return dispatch => axios.post(`${ROOT_URL}`, props)
    .then(
      payload => dispatch({
        type: CREATE_PROFILE,
        payload: {
          description: response.data.descripton,
          name: response.data.name,
          message: response.data.message
        }
      })
    );
}

function fetchProfile(id) {
  return dispatch => axios.get(`${ROOT_URL}/${id}`)
    .then(
      payload => dispatch({
        type: FETCH_PROFILE,
        payload
      })
    );
}

function deleteProfile(id) {
  return dispatch => axios.delete(`${ROOT_URL}?id=${id}`)
    .then(
      payload => dispatch({
        type: DELETE_PROFILE,
        payload
      })
    );
}

module.exports = {
  fetchProfiles,
  createProfile,
  fetchProfile,
  deleteProfile,
};
