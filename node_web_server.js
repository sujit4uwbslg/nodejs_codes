import http from "http"
import fs from 'fs'
import path from 'path'

process.on('uncaughtException', err => console.error('uncaughtException', err))
process.on('unhandledRejection', err => console.error('unhandledRejection', err))

const publicFolder = process.argv.length > 2 ? process.argv[2] : '.'
const port = process.argv.length > 3 ? process.argv[3] : 8080

const mediaTypes = {
  zip: 'application/zip',
  jpg: 'image/jpeg',
  html: 'text/html',
  /* add more media types */
}

const server = http.createServer(function(request, response) {
  console.log(request.method + ' ' + request.url)

  const filepath = path.join(publicFolder, request.url)
  fs.readFile(filepath, function(err, data) {
    if (err) {
      response.statusCode = 404
      return response.end('File not found or you made an invalid request.')
    }

    let mediaType = 'text/html'
    const ext = path.extname(filepath)
    if (ext.length > 0 && mediaTypes.hasOwnProperty(ext.slice(1))) {
      mediaType = mediaTypes[ext.slice(1)]
    }

    response.setHeader('Content-Type', mediaType)
    // Website you wish to allow to connect
    response.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.end(data)
  })
})

server.on('clientError', function onClientError(err, socket) {
  console.log('clientError', err)
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

server.listen(port, '127.0.0.1', function() {
  console.log('👨‍🔧 Development server is online.')
})