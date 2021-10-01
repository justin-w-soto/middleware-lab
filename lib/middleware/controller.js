const { Router } = require('express');
const ServiceData = require('../middleware/service');


module.exports = Router()
  .get('/character', async (req, res, next) => {
    try {
      const character = await ServiceData.getAll();
      res.send(character);
    } catch (error) {
      next(error);
    }
    
  })
  .post('/character/:id', async(req, res, next) => {
    try {
      const newChar = await ServiceData.postChar(req.params.id);
      res.json(newChar);
    } catch (error) {
      next(error);
    }
  })
  .get('/', async(req, res, next) => {
    try {
      const savedChars = await ServiceData.getSavedChars();
      res.send(savedChars);
    } catch (error) {
      next(error);
    }
  })
  .get('/:id', async(req, res, next) => {
    try {
      const charId = await ServiceData.getById(req.params.id);
      res.send(charId);
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updateChar = await ServiceData.updateCharById(req.params.id, req.body);
      res.send(updateChar);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const deleteChar = await ServiceData.deleteCharById(req.params.id);
      res.send(deleteChar);
    } catch (error) {
      next(error);
    }
  });