const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

const PORT = 3001;

app.use((req, res, next) => {
  req.io = io;
  return next();
});
app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

server.listen(PORT, () => console.log(`🔥 Server started at localhost:${PORT}`));
