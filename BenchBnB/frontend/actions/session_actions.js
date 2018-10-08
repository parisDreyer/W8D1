import * as SessionUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const login = user => dispatch => {
  return SessionUtils.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .catch(e => dispatch(receiveErrors(e.responseJSON)));
}

export const logout = () => dispatch => {
  return SessionUtils.logout()
    .then(e => dispatch(logoutCurrentUser()))
    .catch(e => dispatch(receiveErrors(e.responseJSON)));
}

export const signup = user => dispatch => {
  return SessionUtils.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .catch(e => dispatch(receiveErrors(e.responseJSON)));
}

const receiveCurrentUser = (currentUser) => {
  type: RECEIVE_CURRENT_USER,
  currentUser
}

const logoutCurrentUser = () => {
  type: LOGOUT_CURRENT_USER
}

const receiveErrors = (errors) => {
  type: RECEIVE_SESSION_ERRORS,
  errors
}
