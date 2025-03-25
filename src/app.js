// src/app.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// src/app.js
import todoRoutes from './routes/todoRoutes.js';  // ✅ Ensure correct import

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));


app.use('/api/todos', todoRoutes);


app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
