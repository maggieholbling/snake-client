const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
 }

const handleUserInput = (stdin) => {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
}

module.exports = {setupInput};