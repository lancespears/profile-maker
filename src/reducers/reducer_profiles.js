import {
  FETCH_PROFILES,
  FETCH_PROFILE
} from '../actions/types';

//set initial state to an empty object...or array
// one for the list of profiles (all) and one for each profile
const INITIAL_STATE = {
  all: [],
  profile: null
};

// always have a single function for each reducer and switch statement for all of the different actions flowing through

//axios and react-promise response from API is action.payload.data
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_PROFILE:
    return {...state,
      profile: action.payload.data
    };
  case FETCH_PROFILES:
    // what does our inital state need to look like?
    // logic for fetching our profile data
    return {...state,
      all: action.payload.data
    };
  default:
    return state;
  }
}
