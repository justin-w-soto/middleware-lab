
// CREATE ALL CRUD ROUTES HERE

// POST (create)

module.exports = Router()
.post('/', async (req, res, next) => {
    try {
        const order = await OrderService.createOrder(req.body);
        res.send(order);
    } catch (err) {
        next(err);
    }
})

// GET (index)

.get('/', async (req, res, next) => {
    try {
        const order = await Order.getAll(req.body);
        res.send(order);
    } catch (err) {
        next(err);
    }
})

// GET (id or...)

.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const order = await Order.getId(id);
        res.send(order);
    } catch (err) {
        next(err);
    }})
    
    // PUT(update)

    .put('/:id', async (req, res, next) => {
        try {
          const order = await OrderService.updateTheOrder(req);
          res.send(order);
        } catch (err) {
          next(err);
        }
      })
    
      // DELETE (destroy)

  .delete('/:id', async (req, res, next) => {
    try {
      const order = await OrderService.deleteOrder(req);
      res.send(order);

    } catch(err) {
      next(err);
    }
  })
  
  




