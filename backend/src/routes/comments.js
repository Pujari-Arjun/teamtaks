const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();

// Get comments for a task
router.get('/:taskId', async (req, res) => {
  const comments = await Comment.findAll({ where: { taskId: req.params.taskId } });
  res.json(comments);
});

// Add a comment to a task
router.post('/', async (req, res) => {
  const comment = await Comment.create(req.body);
  res.json(comment);
});

module.exports = router;
