const supertest = require('supertest');
const app = require('../server');
const { expect } = require('chai');

it('responds with json', function (done) {
  return supertest(app)
    .post('/api/auth')
    .send({ email: 'someEmail', password: 'somePassword' })
    .then((res) => {
      let token = res.body.token;
      supertest(app)
        .get('/api/auth')
        .set('Accept', 'application/json')
        .set('x-auth-token', token)
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('POST api/auth', function () {
  it('responds with json', function () {
    request(user)
      .get('api/auth')
      .auth('email', 'password')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400);
  });
});
