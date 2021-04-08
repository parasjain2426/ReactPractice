class AuthManager {
  constructor() {
    this.isLogged = false;
  }

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }
}

export default new AuthManager();
