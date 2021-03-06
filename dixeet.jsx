Tasks = new Mongo.Collection("tasks");

if (Meteor.isServer) {
  Parameters = new Mongo.Collection("params");

  //Parameters.insert({
  //    name: 'admin',
  //    value: '?admin'
  //});

  //Parameters.insert({
  //  name: 'writer',
  //  value: '?writer'
  //});
  //
  //Parameters.insert({
  //  name: 'user',
  //  value: '?user'
  //});
}

/*var createThumb = function(fileObj, readStream, writeStream) {
  // Transform the image into a 10x10px thumbnail
  gm(readStream, fileObj.name()).resize('10', '10').stream().pipe(writeStream);
};*/

var imageStore = new FS.Store.GridFS("images1", {
  //mongoUrl: 'mongodb://127.0.0.1:27017/test/', // optional, defaults to Meteor's local MongoDB spo
  //mongoOptions: {...},  // optional, see note below
  //transformWrite: myTransformWriteFunction, //optional
  //transformRead: myTransformReadFunction, //optional
  maxTries: 1, // optional, default 5
  chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file).
                        // Default: 2MB. Reasonable range: 512KB - 4MB
});

Images = new FS.Collection("images", {
  stores: [imageStore]
});



FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(App, {
      stream: null
    });
  }
});

FlowRouter.route('/:stream', {
  action: function(params) {
    ReactLayout.render(App, {
      stream: params.stream
    });
  }
});


if (Meteor.isClient) {
  // This code is executed on the client only

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    //React.render(<Layout />, document.getElementById("render-target"));

    lightbox.init();
  });
}
