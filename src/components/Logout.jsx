const Logout = (dispatchState) => {
  console.log('user logged out')
  const logout = dispatchState();
  const userLogout = logout( {
    type: 'USER_LOGIN_STATUS',
    payload: {
      isLoggedIn: false,
    }
  })
  return userLogout;
}

export default Logout