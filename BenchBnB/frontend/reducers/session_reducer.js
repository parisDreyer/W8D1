import * as SessionActions from '../actions/session_actions';

const SessionReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SessionActions.RECEIVE_CURRENT_USER:
      return {id: action.currentUser.id };
    case SessionActions.LOGOUT_CURRENT_USER:
      return { id: null };
    default:
      return oldState;
  }
}

export default SessionReducer;
