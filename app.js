require('dotenv').config();
const Server = require('./models/server');


const server = new Server();



//Es lo unico que debo llamar de la clase
console.clear();
server.listen();









