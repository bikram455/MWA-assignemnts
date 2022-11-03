const childProcess = require('child_process');
childProcess.spawn('node', ['fibonacci.js'], {stdio: 'inherit'});