Meteor.startup(function () {
    /*UploadServer.init({
        tmpDir: 'c:\\Users\\rozehp01\\simple-todos-react\\uploads\\tmp\\',
        uploadDir: 'c:\\Users\\rozehp01\\simple-todos-react\\uploads\\',
        checkCreateDirectories: true,
        getDirectory: function(fileInfo, formData) {
            // create a sub-directory in the uploadDir based on the content type (e.g. 'images')
            return formData.contentType;
        },
        finished: function(file, folder, formFields) {
            // perform a disk operation
            console.log('Write to database: ' + folder + '/' + file);
            console.log(folder);
            console.log(file);
            console.log(formFields);
        },
        cacheTime: 100,
        mimeTypes: {
            "jpeg": "image/jpeg",
            "jpg": "image/jpeg"
        }
    })*/
});

Meteor.methods({
    getRole: function(url){
        var params = Parameters.find({}).fetch();
        for(var i = 0; i<params.length; i++) {
            if (url.indexOf(params[i].value) !== -1) {
                return params[i].name
            }
        }
        return 'user';
    },
    getIP: function(){
        var ip = this.connection.clientAddress;
        return ip;
    }
});
