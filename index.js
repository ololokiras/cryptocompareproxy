var http = require('http');
var https = require('https');

http.createServer(onRequest).listen(3000);

function onRequest(client_req, client_res) {
  console.log('serve: ' + client_req.url);
  var hostname = 'https://www.cryptocompare.com/api/data';
  var path = client_req.url;
  console.log('path', hostname+path);
  client_res.setHeader('Access-Control-Allow-Origin', '*');
  client_res.setHeader('Access-Control-Request-Method', '*');
  client_res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  client_res.setHeader('Access-Control-Allow-Headers', '*');
  https.get(hostname + path, (res) => {
    res.pipe(client_res, {end: true});
  })
}

