// TODO test TCP response somehow

const expect = require('chai').expect;
const server = require(__dirname + '/../lib/tcp_server.js');
const request = require('superagent');
const fs = require('fs');

describe('tcp server tests', () => {
  it('dummy test 1 === 1', () => {
    expect(1).to.eql(1);
  });
  it('server should not send a response to requests', (done) => {
    request.get('localhost:7000').end(() => {
      expect(true).to.eql(false);
    });
    done();
  });
  it('server should load expected data to the log files', (done) => {
    fs.readdir(__dirname + '/../dat', (err, files) => {
      if (err) {
        return process.stderr.write(err);
      }
      var file = fs.readFileSync(__dirname + '/../dat/' + files[files.length - 1], 'utf8');
      expect(file).to.contain('GET / HTTP/1.1\r\nHost: localhost:7000');
      done();
    });
  });
  after(() => {
    server.close();
  });
});
