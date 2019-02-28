/* require statements */
import serveIndexer = require('./injectHTML/serveIndex');
import http = require('http');
import fs = require('fs');
import { join } from 'path';

/* global variables */
const port = 3000;
// const cardData = JSON.parse(fs.readFileSync('data/recipes.json').toString());
import cardData from './data/recipes.json';

/** @function serveImage
 * Serves the specified image as an HTTP response.
 * @param {string} filename - the file to serve
 * @param {http.IncomingMessage} req - the HTTP request object
 * @param {http.ServerResponse} res - the HTTP response object
 */
function serveImage(filename: string, req: http.IncomingMessage, res: http.ServerResponse) {
  const imagePath = join(__dirname, 'public', 'images', filename);
  fs.readFile(imagePath, function(err, data) {
    if (err) {
      res.statusCode = 404;
      res.statusMessage = 'Not Found';
      res.end('Not Found');
      return;
    }
    res.setHeader('Content-Type', 'image/jpeg');
    res.end(data);
  });
}

/** @function serveStylesheet
 */
function serveStylesheet(filename: string, req: http.IncomingMessage, res: http.ServerResponse): void {
  const stylePath = join(__dirname, 'css', filename);
  fs.readFile(stylePath, function(err, data) {
    if (err) {
      console.error(err); // write our error to the log
      res.statusCode = 500;
      res.statusMessage = 'Server Error';
      res.end('Server Error'); // serve the error status
      return; // stop executing the function
    }
    res.setHeader('Content-Type', 'text/css'); // set our content type
    res.end(data); // serve the file
  });
}

/* Create a new HTTP server */
const server = http.createServer(function(req: http.IncomingMessage , res: http.ServerResponse) {
  switch (req.url) {
    case '/':
    case '/index.html':
      serveIndexer.serveIndex(req, res);
      break;
    case '/main.css':
      serveStylesheet('main.css', req, res);
      break;
    default:
      serveImage(req.url || '', req, res);
  }
});
/* Listen for incoming HTTP requests */
server.listen(port, function() {
  console.log('Listening on port ' + port);
});
