const pool = require ('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');

/* CREATE TESTS FOR ALL CRUD ROUTES*/

describe('word api test routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('GET', async () => {
    const controller = await model.insert(something);
    return request(app)
      .get(`/`)
      .then((res) => {
        expect(res.body).toEqual(controller);
      })
  })
});
