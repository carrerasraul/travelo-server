const supertest = require('supertest');
const app = require('../server');
const { expect } = require('chai');

describe('POSTS Endpoints', function () {
  let db;

  it('POST /api/posts responds with 201', () => {
    const newPost = {
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    };

    return supertest(app)
      .post('/posts')
      .send(newPost)
      .expect(201)
      .expect((res) => {
        expect(res.body.name).to.eql(newPost.id);
      });
  });

  it('GET /api/posts responds with 200', () => {
    return supertest(app)
      .get('/api/posts')
      .send({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      })
      .expect(200);

    return supertest(app)
      .post('/api/posts')
      .send(post.id)
      .expect(201)
      .expect((res) => {
        expect(res.body.name).to.eql(post.id);
      });
  });

  it('DELETE api/posts/:id responds with 200', () => {
    return supertest(app)
      .delete('api/posts/:id')
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
});
