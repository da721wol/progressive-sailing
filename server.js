const express = require('express');
const http = require('http');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, `/build/index.html`))
});

const httpServer = http.createServer(app);

httpServer.listen(4000, () => {
  console.log('HTTP server runnning on port 4000')
});

module.exports = app;
