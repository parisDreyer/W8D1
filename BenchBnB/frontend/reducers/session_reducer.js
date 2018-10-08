import * as SessionActions from '../actions/session_actions';

const SessionReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SessionActions.RECEIVE_CURRENT_USER:
      return merge({}, action.currentUser)
    case SessionActions.LOGOUT_CURRENT_USER:
      let newState = merge({}, oldState);
      delete newState[action.currentUser.id]
      return newState;
    default:
      return oldState;
  }
}

export default SessionReducer;
