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


const ROOT_URL = 'http://localhost:3000';

function fetchProfiles() {
  return dispatch => axios.get(`${ROOT_URL}/profiles`)
    .then(
      payload => dispatch({
        type: FETCH_PROFILES,
        payload
      })
    );
}

function createProfile(props) {
  return dispatch => axios.post(`${ROOT_URL}/profiles`, props)
    .then(
      payload => dispatch({
        type: CREATE_PROFILE,
        payload
      })
    );
}

function fetchProfile(id) {
  console.log('IDDD', id);
  return dispatch => axios.get(`${ROOT_URL}/profiles?id=${id}`)
    .then(
      payload => dispatch({
        type: FETCH_PROFILE,
        payload
      })
    );
}

function updateProfile(id, props) {
  return dispatch => axios.post(`${ROOT_URL}/profiles?id=${id}`, props)
    .then(
      payload => dispatch({
        type: UPDATE_PROFILE,
        payload
      })
    );
}

function deleteProfile(id) {
  return dispatch => axios.delete(`${ROOT_URL}/profiles?id=${id}`)
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
