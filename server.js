const http = require("http");

const server = http.createServer((req,res) => {
  console.log(req);
  console.log("Hello world");
});

server.listen(process.env.PORT ||3000);
