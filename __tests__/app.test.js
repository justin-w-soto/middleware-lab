const pool = require ('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');
const service = require ('../lib/middleware/service.js');

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

  it('GETS all character data', async () => {
    const charChar = await service.getAllCharacterData({
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human"
    })

    const res = await request(app).get('/api/v1/character');
    expect(res.body).toEqual(charChar);
  })
  
  afterAll(() => {
    pool.end();
  });
});
