const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  priority: DataTypes.ENUM('Low', 'Medium', 'High'),
  assigneeId: DataTypes.INTEGER,
  status: DataTypes.ENUM('Backlog', 'In Progress', 'Review', 'Done'),
  dueDate: DataTypes.DATE,
  created: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Task;
