const fs = require('fs');


const writeLog = module.exports = exports = () => {
  const date = new Date();
  var time = date.getTime();
  return fs.createWriteStream(__dirname + '/../dat/output' + time + '.txt');
}
