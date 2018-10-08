import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from './session_reducer';


const SessionErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, action.errors)
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, oldState);
      delete newState[action.errors];
      return newState;
    default:
      return oldState;
  }
}

export default SessionErrorsReducer;
