// src/routes/todoRoutes.js
import express from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todoController.js';

const router = express.Router();

router.get('/', getTodos);         // Get all todos
router.post('/', createTodo);      // Create a new todo
router.put('/:id', updateTodo);    // Update a todo by ID
router.delete('/:id', deleteTodo); // Delete a todo by ID

export default router;  // ✅ Ensure this line exists
