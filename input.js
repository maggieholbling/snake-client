// Stores the active TCP connection object.
// let connection;
const { ARROWS } = require('./constants');

const setupInput = function(conn) {
  // connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin, conn);
  return stdin;
 }

const handleUserInput = (stdin, conn) => {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (ARROWS[key]) {
      conn.write(ARROWS[key]);
    }
  });
}

module.exports = {setupInput};