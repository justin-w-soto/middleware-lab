const { Router } = require('express');
const ServiceData = require('./service');

module.exports = Router()
   
    .post('/:id', async (req, res, next) => {
        try {
          const newCharData = await ServiceData.postCharData(req.params.id);
          res.json(newCharData);
        } catch (error) {
          next(error);
        }
      })

      .get('/', async (req, res, next) => {
        try {
          const getAllCharacters = await ServiceData.getAll();
          res.send(getAllCharacters);
        } catch (error) {
          next(error);
        }
      })

      .get('/:id', async (req, res, next) => {
        try {
          const { id } = req.params;
          const getIt = await ServiceData.getById(id);
          res.send(getIt);
        } catch (error) {
          next(error);
        }
      })

      .put('/:id', async (req, res, next) => {
        try {
          const { id } = req.params;
          const { name, status, species } = req.body;
          const putIt = await ServiceData.update(id, { name, status, species });
          res.send(putIt);
        } catch (error) {
          next(error);
        }
      })
      .delete('/:id', async (req, res, next) => {
        try {
          const { id } = req.params;
          const deleteIt = await ServiceData.deleteById(id);
          res.send(deleteIt);
        } catch (error) {
          next(error);
        }
      });
    