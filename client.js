const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.151', //'192.168.88.151' 'localhost'
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {//taking data from server
    console.log('Server says: ', data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: MGS');
  });
  
  return conn;
}

module.exports = {connect};