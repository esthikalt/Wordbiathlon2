const http = require("http");
const https = require('https');
const { loadavg } = require("os");
const { getEnvironmentData } = require("worker_threads");

let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=panda';
let contentUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';

const server = http.createServer((req,res) => {
  console.log(req);
  console.log("Hello world");
});

https.get(searchUrl, (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

server.listen(3000);
