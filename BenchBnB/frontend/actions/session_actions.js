import * as SessionUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const login = user => dispatch => (
  SessionUtils.login(user)
    .then(user => dispatch(receiveCurrentUser(user))
    , e => dispatch(receiveErrors(e.responseJSON)))
);

export const logout = () => dispatch => ( SessionUtils.logout()
    .then(user => dispatch(logoutCurrentUser()))
);

export const signup = user => dispatch => ( SessionUtils.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      e => dispatch(receiveErrors(e.responseJSON)))
);

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
