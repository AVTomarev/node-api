// Import modules from node_modules
import http from 'http';
import WebSocket from 'ws';

// Import controllers
import { indicatorsController } from './controllers/indicators.controller';

const port = 80;

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', indicatorsController);

// App 
server.listen(port, () => {
  console.log('App is running at http://localhost:' + port);
});
