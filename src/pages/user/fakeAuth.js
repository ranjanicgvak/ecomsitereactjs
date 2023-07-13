export const fakeAuth = {
  isAuthenticated: () => {
    return false; // Return true if authenticated, false otherwise
  },
  login(callBack) {
    fakeAuth.isAuthenticated = true;
    callBack();
  },
  logout(callBack) {
    fakeAuth.isAuthenticated = false;
    callBack();
  },
};