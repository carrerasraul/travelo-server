const supertest = require('supertest');
const app = require('../server');
const { expect } = require('chai');

describe('FILEUPLOAD Endpoints', function () {
  let db;

  it('POST api/uploads/images responds with 201', () => {
    const MIME_TYPE_MAP = {
      'image/png': 'png',
      'image/jpeg': 'jpeg',
      'image/jpg': 'jpg',
    };

    return supertest(app)
      .post('/uploads/images')
      .send(fileUpload)
      .expect(201)
      .expect((res) => {
        expect(file.mimetype).to.eql(isValid);
      });
  });
});
