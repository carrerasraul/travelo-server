const supertest = require('supertest');
const app = require('../server');
const { expect } = require('chai');

describe('PLACES Endpoints', function () {
  let db;

  it('GET api/places/image responds with 201', () => {
    router.get('/:pid', placesControllers.getPlaceById);

    return supertest(app)
      .get('/places/image')
      .expect(201)
      .expect((res) => {
        expect(placesControllers.getPlaceById).to.eql(getPlaceById);
      });
  });

  it('POST /image responds with 200', () => {
    const fileUpload = [
      check('title').not().isEmpty(),
      check('description').isLength({ min: 5 }),
      check('address').not().isEmpty(),
    ];

    return supertest(app)
      .delete('api/image')
      .then((res) => {
        let token = res.body.token;
        supertest(app)
          .get('api/image')
          .set('Accept', 'application/json')
          .set('x-auth-token', token)
          .expect('Content-Type', /json/)
          .expect(200, done);
      });
  });

  it('PATCH /api/places/:pid responds with 200', () => {
    const updatePlace = [
      check('title').not().isEmpty(),
      check('description').isLength({ min: 5 }),
    ];

    return supertest(app)
      .delete('/api/places/:pid')
      .then((res) => {
        let token = res.body.token;
        supertest(app)
          .get('/api/places/:pid')
          .set('Accept', 'application/json')
          .set('x-auth-token', token)
          .expect('Content-Type', /json/)
          .expect(200, done);
      });
  });

  it('DELETE /api/places/:pid responds with 200', () => {
    router.delete('/:pid', placesControllers.deletePlace);

    return supertest(app)
      .delete('/api/places/:pid')
      .then((res) => {
        let token = res.body.token;
        supertest(app)
          .get('/api/places/:pid')
          .set('Accept', 'application/json')
          .set('x-auth-token', token)
          .expect('Content-Type', /json/)
          .expect(200, done);
      });
  });
});
