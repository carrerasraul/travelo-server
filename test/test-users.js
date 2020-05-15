const supertest = require('supertest');
const app = require('../server');
const { expect } = require('chai');

describe(`POST /api/users`, () => {
  beforeEach('insert users', () => helpers.seedUsers(db, testUsers));

  const requiredFields = ['name', 'email', 'password'];

  requiredFields.forEach((field) => {
    const registerAttemptBody = {
      name: 'test name',
      email: 'test password',
      password: 'tes password',
    };

    it(`responds with 400 required error when '${field}' is missing`, () => {
      delete registerAttemptBody[field];

      return supertest(app)
        .post('/api/users')
        .send(registerAttemptBody)
        .expect(400, {
          error: `Missing '${field}' in request body`,
        });
    });
  });

  it(`responds 400 'Password be longer than 6 characters' when empty password`, () => {
    const userShortPassword = {
      user_name: 'test username',
      user_password: '12345',
    };
    return supertest(app)
      .post('/api/users')
      .send(userShortPassword)
      .expect(400, { error: `Password be longer than 6 characters` });
  });

  it(`responds 400 'See if user exists`, () => {
    const duplicateUser = {
      user_name: testUser.user_name,
      user_password: '11AAaa!!',
    };
    return supertest(app)
      .post('/api/users')
      .send(duplicateUser)
      .expect(400, { error: `Username already taken` });
  });

  describe(`Given a valid user`, () => {
    it(`responds 201, serialized user with no password`, () => {
      const newUser = {
        user_name: 'test username',
        user_password: '11AAaa!!',
      };
      return supertest(app)
        .post('/api/auth/users')
        .send(newUser)
        .expect(201)
        .expect((res) => {
          expect(res.body).to.have.property('id');
          expect(res.body.user_name).to.eql(newUser.user_name);

          expect(res.body).to.not.have.property('password');
          expect(res.headers.location).to.eql(`/api/users/${res.body.id}`);
        });
    });

    it(`stores the new user in db with bcryped password`, () => {
      const newUser = {
        user_name: 'test username',
        user_password: '11AAaa!!',
      };
      return supertest(app)
        .post('/api/users')
        .send(newUser)
        .expect((res) =>
          db
            .from('overlays_users')
            .select('*')
            .where({ id: res.body.id })
            .first()
            .then((row) => {
              expect(row.user_name).to.eql(newUser.user_name);

              return bcrypt.compare(newUser.user_password, row.user_password);
            })
            .then((compareMatch) => {
              expect(compareMatch).to.be.true;
            })
        );
    });
  });
});
