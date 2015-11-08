var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// todo: move files to dist folder during build and just serve that dir
app.use('/', express.static('./'));

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});
