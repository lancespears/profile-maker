import axios from 'axios';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
  FETCH_PROFILES,
  CREATE_PROFILE,
  FETCH_PROFILE,
  UPDATE_PROFILE,
  DELETE_PROFILE,
} from './types';


function fetchProfiles() {
  return dispatch => axios.get('/profiles')
    .then(
      payload => dispatch({
        type: FETCH_PROFILES,
        payload
      })
    );
}

function createProfile(props) {
  return dispatch => axios.post('/profiles', props)
    .then(
      payload => dispatch({
        type: CREATE_PROFILE,
        payload
      })
    );
}

function fetchProfile(id) {
  return dispatch => axios.get('/profiles?id=' + id)
    .then(
      payload => dispatch({
        type: FETCH_PROFILE,
        payload
      })
    );
}

function updateProfile(id, props) {
  return dispatch => axios.post('/profiles?id=' + id, props)
    .then(
      payload => dispatch({
        type: UPDATE_PROFILE,
        payload
      })
    );
}

function deleteProfile(id) {
  return dispatch => axios.delete('/profiles?id=' + id)
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
  updateProfile,
  deleteProfile,
};
