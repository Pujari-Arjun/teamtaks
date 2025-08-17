# Team Task Board Backend

## How to Run

1. Install dependencies:
   ```
   npm install
   ```
2. Set up your `.env` file in the backend folder:
   ```
   DB_NAME=teamtask
   DB_USER=root
   DB_PASS=your_mysql_password
   DB_HOST=localhost
   PORT=5000
   ```
3. Start the backend server:
   ```
   npm start
   ```

## Environment Variables
- `DB_NAME`: MySQL database name
- `DB_USER`: MySQL username
- `DB_PASS`: MySQL password
- `DB_HOST`: MySQL host (usually `localhost`)
- `PORT`: Port for Express server (default: 5000)

## Database Schema
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  passwordHash VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  priority ENUM('Low', 'Medium', 'High'),
  assigneeId INT,
  status ENUM('Backlog', 'In Progress', 'Review', 'Done'),
  dueDate DATETIME,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  taskId INT,
  authorId INT,
  body TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## API List

### Auth
- `POST /api/auth/signup` — Register new user
- `POST /api/auth/login` — Login and get JWT token

### Tasks
- `GET /api/tasks` — Get all tasks
- `POST /api/tasks` — Create a new task
- `PUT /api/tasks/:id` — Update a task
- `DELETE /api/tasks/:id` — Delete a task

### Comments
- `GET /api/comments/:taskId` — Get comments for a task
- `POST /api/comments` — Add a comment to a task

## Thunder Client API Test Images

Add screenshots of successful API requests (signup, login, get tasks, add comment) here.

---
