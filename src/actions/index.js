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
