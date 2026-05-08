class LoginPage {

  constructor(page) {
    this.page = page;

    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'button[type="submit"]';
  }

  async open() {
    await this.page.goto(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
      {
        waitUntil: 'domcontentloaded',
        timeout: 60000
      }
    );
  }

  async login(username, password) {

    await this.page.waitForSelector(this.usernameInput);

    await this.page.fill(this.usernameInput, username);

    await this.page.fill(this.passwordInput, password);

    await Promise.all([
      this.page.waitForURL(/dashboard/),
      this.page.click(this.loginButton)
    ]);
  }
}

module.exports = { LoginPage };