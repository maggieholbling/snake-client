const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost', //'192.168.88.151' 'localhost'
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {//taking data from server
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = {connect};