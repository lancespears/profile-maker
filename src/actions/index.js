import axios from 'axios';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
  FETCH_PROFILES,
  CREATE_PROFILE,
  FETCH_PROFILE,
  DELETE_PROFILE,
} from './types';


const ROOT_URL = 'http://localhost:3000';


export function fetchProfiles() {
  //action creator to fetch our list of profiles
  const request = axios.get(`${ROOT_URL}/profiles`);
  return {
    type: FETCH_PROFILES,
    payload: request
  };
}


export function createProfile(props) {
  const request = axios.post(`${ROOT_URL}/profiles`, props);
  return {
    type: CREATE_PROFILE,
    payload: request
  };
}

export function createProfile(props) {
  return dispatch => axios.post(`${ROOT_URL}`, props)
    .then(response => dispatch({
      type: CREATE_PROFILE,
      payload: {
        profile: response.data.data,
        message: response.data.message,
      }
    }));
}






export function fetchProfile(id) {
  const request = axios.get(`${ROOT_URL}/profiles/${id}`);
  return {
    type: FETCH_PROFILE,
    payload: request
  };
}


export function deleteProfile(id) {
  const request = axios.delete(`${ROOT_URL}/profiles/${id}`);
  return {
    type: DELETE_PROFILE,
    payload: request
  };
}
