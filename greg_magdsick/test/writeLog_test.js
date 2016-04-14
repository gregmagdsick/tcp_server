const expect = require('chai').expect;
const writeLog = require(__dirname + '/../lib/writeLog.js');

describe('test writeLog file', () => {
  it('writeLog should be a function', () => {
    expect(typeof writeLog).to.eql('function');
  });
});
