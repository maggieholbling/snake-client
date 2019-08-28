const { connect } = require('./client');
const { setupInput } = require('./input');
/**
 * Establishes connection with the game server
 */
console.log('Connecting ...');

setupInput(connect());