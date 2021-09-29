const pool = require ('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');

/* CREATE TESTS FOR ALL CRUD ROUTES*/

describe('api routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  
  it('POSTS a new character to table', async () => {
    
    return request(app)
    .post('/api/v1/character/1')
    .send({ 
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human"
    })
    .then((res) => {
      expect(res.body).toEqual({ id: '1', name: 'Rick Sanchez', status: 'Alive', species: 'Human' });
    })
  })
});

afterAll(() => {
  pool.end();
});