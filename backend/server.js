const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRouters = require('./routers/authRouters');

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
  
// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRouters);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start Server
const PORT = process.env.PORT || 5000; // Lấy cổng từ .env hoặc mặc định là 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));