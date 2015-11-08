var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/', express.static('./dist'));
app.use('/vendor', express.static('./bower_components'));

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});
