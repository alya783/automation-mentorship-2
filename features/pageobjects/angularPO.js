class Materials {
    
    get form(){
        return $('//span[contains(text(),"Form field")]');
    }

    get firstDropWindow(){
        return $('//div[@id="mat-select-value-1"]');
    }

    get materialExample(){
        return $('//div[@material-docs-example="form-field-overview"]');
    }

    get optionsList(){
        return $('//div[@role="listbox"]');
    }

    get firstOpt(){
        return $('#mat-option-0');
    }

    get firstOptText(){
        return $('.mat-option-text');
    }

    get badgePage(){
        return $('//span[contains(text()," Badge ")]');
    }

    get copyBtn(){
        return $('//button[@aria-label="Copy link to Badge overview example to the clipboard"]');s
    }

    get tooltip(){
        return $('.mat-tooltip.mat-tooltip-show');
    }

    get linkCDK(){
        return $('//a[@href="/cdk"]');
    }

    get dragDrop(){
        return $('//span[contains(text()," Drag and Drop ")]');
    }

    get exampleWindow(){
        return $('#cdk-drag-drop-overview');
    }

    get dragItem(){
        return $('//div[@id="cdk-drop-list-0"]/div[1]');
    }

    get dragDropTarget(){
        return $('//div[@id="cdk-drop-list-1"]/div[1]');
    }

    get examples(){
        return $('#mat-tab-link-2');
    }

    get dragExWindow(){
        return $('//div[text() = "Drag&Drop connected sorting group"]');
    }
    open(){
        return browser.url("https://material.angular.io/components/categories");
    }
}

module.exports = new Materials();