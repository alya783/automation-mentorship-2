class MainPage {
    
    get trendingLinks(){
        return $$('.popular-tags a');
    }

    open(){
        return browser.url(`${browser.config.baseUrl}`);
    }

}

module.exports = new MainPage();