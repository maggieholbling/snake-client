// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
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
    if (key === 'w' || key === '\u001b[A') {
      conn.write('Move: up');
    }
    if (key === 'a' || key === '\u001b[D') {
      conn.write('Move: left');
    }
    if (key === 's' || key === '\u001b[B') {
      conn.write('Move: down');
    }
    if (key === 'd' || key === '\u001b[C') {
      conn.write('Move: right');
    }
  });
}

module.exports = {setupInput};