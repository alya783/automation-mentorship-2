class Upload{

    get uploadButton(){
       return $('#file-upload');
    }

    get submitButton(){
        return $('#file-submit');
    }

    get message(){
        return $('#uploaded-files');
    }
}

module.exports = new Upload();