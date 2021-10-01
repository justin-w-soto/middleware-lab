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

  
  it('POSTS a new character to table', () => {
    
    return request(app)
    .post('/api/v1/character/')
    .send({ 
      id: "1",
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human"
    })
    .then(res => {
      expect(res.body).toEqual({
         id: "1", 
         name: 'Rick Sanchez', 
         status: 'Alive', 
         species: 'Human' 
        });
    })
  })

  it('GETS all character data from table', () => {
    return request(app)
    .get('/api/v1/character')
    .then(res => {
      expect(res.body).toEqual([{
        id: "1",
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human"
        }])
    })
  });


  it('GETS character by id', () => {
    return request(app)
      .get('/api/v1/character/:id')
      .then(res => {
        expect(res.body).toEqual({
          id: "1",
          name: "Rick Sanchez",
          status: "Alive",
          species: "Human"
        })
      })
  });
  
  it('it updates by id', () => {
    return request(app)
      .put('/api/v1/character/1')
      .send({  
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human"
      
    })
      .then(res => {
        expect(res.body).toEqual({  
        id: "1", 
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human"
      });

      });
  });

  it('it deletes characters by their id', () => {
    return request(app)
      .delete('/api/v1/character/1')
      .then(res => {
        expect(res.body).toEqual({});
      });
  });

  afterAll(() => {
    pool.end();
  });
});
