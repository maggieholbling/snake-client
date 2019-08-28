const net = require('net');
const { IP, PORT, NAME } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP, //'192.168.88.151' 'localhost'
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {//taking data from server
    console.log('Server says: ', data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(NAME);
  });
  
  return conn;
}

module.exports = {connect};