class LoginPage {
    get username() { return $('hajriansyah577@gmail.com'); }
    get password() { return $('@hajri12345'); }
    get loginButton() { return $('#login'); }

    async login(user, pass) {
        await this.username.setValue(user);
        await this.password.setValue(pass);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();
