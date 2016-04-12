const fs = require('fs');

const writeLog = module.exports = exports = (time) => {
  fs.createWriteStream(__dirname + '/../dat/output' + time + '.txt');
}
