import http from 'http'
var server = http.createServer(function(request, response) {
response.write("Hello <strong>HTTP</strong>!");
response.end();
});
server.listen(8000);
