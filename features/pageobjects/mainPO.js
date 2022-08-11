class MainPage {
    get username () {
        return $('[name="email"]');
    }

    get password () {
        return $('[name="password"]');
    }

    get btnLogin () {
        return $('button*=Log in');
    }

    get logLink (){
        return $('a*=Log in');
    }

    get modalWin(){
        return $('.modal-body');
    }

    get closeModalSign(){
        return $('//button[@class="close modal-close"]');
    }

    async login (username, password) {
        await this.logLink.click();
        await this.modalWin.waitForDisplayed({ timeout: 5000 });
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.btnLogin.click();
    }
    
    get trendingLinks(){
        return $$('.popular-tags a');
    }

    get dropdownBtn(){
        return $('.dropdown-toggle');
    }

    get dropdownMenu(){
        return $('.dropdown-menu');
    }

    get dropdownMenuItems(){
        return $$('.dropdown-menu a');
    }

    open(){
        return browser.url(`${browser.config.baseUrl}`);
    }

}

module.exports = new MainPage();