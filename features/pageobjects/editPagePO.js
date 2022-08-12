class EditPage {
    
    get username(){
        return $('[name="username"]');
    }

    get dropdownIcon(){
        return $('//li[@class="dropdown icon"]');
    }

    get logout(){
        return $('//a[@href="/logout"]');
    }

    get uploadBtn(){
        return $('//button[text()="Upload"]');
    }

    get removeBtn(){
        return $('//button[text()="Remove"]');
    }

    get profileImg(){
        return $('//*[@id="main"]/div/div[2]/div[1]/img');
    }

    get saveBtn(){
        return $('//button[text()="Save info"]');
    }

    get alertSuccess(){
        return $('//div[text()="Your personal info has been updated."]');
    }

    get avatar(){
        return $('.fa.fa-user-circle.blank-pic');
    }
    
    async exitPage () {
        await this.dropdownIcon.click();
        await this.logout.click();
    }

}

module.exports = new EditPage();