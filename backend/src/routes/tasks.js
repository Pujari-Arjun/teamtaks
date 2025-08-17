const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// Create a task
router.post('/', async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// Update a task
router.put('/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  await task.update(req.body);
  res.json(task);
});

// Delete a task
router.delete('/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  await task.destroy();
  res.json({ success: true });
});

module.exports = router;
