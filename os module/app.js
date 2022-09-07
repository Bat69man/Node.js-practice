/**
 * Ref: https://nodejs.org/api/os.html#oshostname
 */
const os = require('os')

console.log('Platform:', os.platform());
console.log('OS type:', os.type());
console.log('Version:', os.version());
console.log('Total memory:', Math.round(os.totalmem()/1024/1024), 'MB')
console.log('Free memory:', Math.round(os.freemem()/1024/1024), 'MB')
console.log('Hostname:', os.hostname());
console.log('Uptime:',  (os.uptime()/60/60).toFixed(2), 'Hours');
console.log('User info:', os.userInfo());
console.log('Username:', os.userInfo().username);