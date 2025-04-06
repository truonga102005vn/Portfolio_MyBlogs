const express = require('express');
const User = require('../models/User'); // Import model User

const router = express.Router();

// API: Lấy danh sách người dùng
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// API: Thêm người dùng mới
router.post('/', async (req, res) => {
  const { name, title, tagline } = req.body;

  const newUser = new User({
    name,
    title,
    tagline,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;