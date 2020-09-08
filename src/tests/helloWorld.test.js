const request = require('supertest');
const app = require('../server');

/**
 * Testing   Post send Text
 */

describe('/POST /api/hellow', () => {
  it(' respond witch  status 400  ', (done) => {
    const data = {
      text: 'Hellow Word',
    };
    request(app)
      .post('/api/hellow')
      .send(data)
      .set('Acept', 'aplication/json')
      .expect('content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('  respond to an error when some text is not sent ', (done) => {
    const data = {
      text: null,
    };
    request(app)
      .post('/api/hellow')
      .send(data)
      .set('Acept', 'aplication/json')
      .expect('content-Type', /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
