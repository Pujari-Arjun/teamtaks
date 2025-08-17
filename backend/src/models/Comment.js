const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comment = sequelize.define('Comment', {
  taskId: DataTypes.INTEGER,
  authorId: DataTypes.INTEGER,
  body: DataTypes.TEXT,
  created: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Comment;
