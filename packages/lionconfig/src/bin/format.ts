#!/usr/bin/env node

import process from 'node:process';

import { runScript } from '../utils/script.js';

await runScript({
	name: 'format',
	defaultCommandArgs: ['prettier', '--write', ...process.argv.slice(2), '.'],
});
