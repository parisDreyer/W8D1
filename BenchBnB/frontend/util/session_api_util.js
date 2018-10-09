export const signup = user => {
  return $.ajax({
    url: '/api/user',
    type: 'POST',
    data: { user }
  });
};

export const login = user => {
  return $.ajax({
    url: '/api/session',
    type: 'POST',
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    url: '/api/session/',
    type: 'DELETE'
  });
};
