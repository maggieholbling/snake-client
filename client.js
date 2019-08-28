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

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: MGS');

    for (let i = 0; i < 10; i++){
      setTimeout(() => {
        conn.write('Move: up')
      }, 50*i);
    }

    // setTimeout(() => {
    //   conn.write('Move: right')
    // }, 100);
  });
  
  return conn;
}

module.exports = {connect};