import axios from 'axios';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
  CREATE_CONTACT,
} from './types';

const ROOT_URL = 'http://localhost:3000';

function createContact(props) {
  return dispatch => axios.post(`${ROOT_URL}`, props)
    .then( response => dispatch({
      type: CREATE_CONTACT,
      payload: {
        user: response.data.data,
        message: response.data.message,
        error: response.data.error
      }
    })
    );
}

module.exports = {
  createContact,
};


import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const CREATE_USER = 'CREATE_USER';
export const FETCH_USER = 'FETCH_USER';
export const DELETE_USER = 'DELETE_USER';


const ROOT_URL = 'http://localhost:3000';



export function fetchUsers() {
  //action creator to fetch our list of users
  const request = axios.get(`${ROOT_URL}/users`);

  return {
    type: FETCH_USERS,
    payload: request
  };
}


export function createUser(props) {
  const request = axios.post(`${ROOT_URL}/users`, props);

  return {
    type: CREATE_USER,
    payload: request
  };
}


export function fetchUser(id) {
  const request = axios.get(`${ROOT_URL}/users/${id}`);

  return {
    type: FETCH_USER,
    payload: request
  };
}


export function deleteUser(id) {
  const request = axios.delete(`${ROOT_URL}/users/${id}`);

  return {
    type: DELETE_USER,
    payload: request
  };
}
