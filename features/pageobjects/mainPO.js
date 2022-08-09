class MainPage {
    
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