const { runScript } = require('../utils/script.cjs');
const process = require('process');

runScript(['eslint', '--cache', '--fix', ...process.argv.slice(2), '.']);