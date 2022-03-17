const router = require('express').Router();
const mongoose = require('mongoose');

const Trip = require('../models/Trip.model');
const Todo = require('../models/Todo.model');

router.post('/thingsTodo', async (req, res, next) => {
  const { todo , tripId } = req.body;

  Todo.create({ todo, trip: tripId })
    .then((newTodo) => {
      return Trip.findByIdAndUpdate(tripId, { $push: { thingsToDo: newTodo._id } }, { new: true });
    })
    .then((response) => res.json(response))
    .catch((err) => next(err));
});


router.get('/thingsTodo', (req, res, next) => {
  Trip.find()
  .populate('thingsToDo')
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

/* router.get('/thingsTodo/:todoId', (req, res, next) => {
  const { todoId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(todoId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Todo.findById(todoId)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
}); */

router.put('/thingsTodo/:todoId', (req, res, next) => {
  const { todoId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(todoId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Todo.findByIdAndUpdate(todoId, req.body, { new: true })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.delete('/thingsTodo/:todoId', (req, res, next) => {
  const { todoId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(todoId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Todo.findByIdAndRemove(todoId)
    .then((deletedTodo) => {
      return Trip.findByIdAndUpdate(deletedTodo.todo, { $pull: { todo: todoId } }).then(() =>
        res.json({ message: `To do  with ${todoId} was removed successfully` })
      );
    })
    .catch((err) => res.json(err));
});

module.exports = router;