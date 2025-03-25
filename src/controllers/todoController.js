// src/controllers/todoController.js
import Todo from '../models/todo.js';

// Get all todos
export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching todos' });
    }
};

// Create a new todo
export const createTodo = async (req, res) => {
    try {
        const { title } = req.body;
        const newTodo = await Todo.create({ title });
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: 'Invalid input' });
    }
};

// Update a todo
export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTodo) return res.status(404).json({ message: 'Todo not found' });
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(400).json({ message: 'Error updating todo' });
    }
};

// Delete a todo
export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) return res.status(404).json({ message: 'Todo not found' });
        res.status(200).json({ message: 'Todo deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting todo' });
    }
};
