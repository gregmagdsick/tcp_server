const expect = require('chai').expect;
const writeLog = require(__dirname + '/../lib/writeLog.js')
const fs = require('fs');

describe('test writeLog file', () => {
  it('writeLog should be a function', () => {
    expect(typeof writeLog).to.eql('function');
  });
});
