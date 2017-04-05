import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app = require('../src/server/server.config');

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/data', () => {

  it('responds with JSON array', () => {
    return chai.request(app).get('/data')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
      });
  });

  it('should include temp1', () => {
    return chai.request(app).get('/data')
      .then(res => {
        let temp1 = res.body.find(sensor => sensor.name === 'temp1');
        expect(temp1).to.exist;
        expect(temp1).to.have.all.keys([
          'name',
          'data'
        ]);
      });
  });

});