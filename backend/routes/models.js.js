const express = require('express');
const jwt = require('jsonwebtoken');
const Project = require('../models/Project');
const { generate3DModel } = require('../utils/aiGenerator');
const router = express.Router();

// Middleware to protect routes
const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'hertza-secret-key');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

// @route   POST /api/models/generate
// @desc    Generate 3D model with AI
router.post('/generate', protect, async (req, res) => {
  try {
    const { modelType, description, dimensions, complexity } = req.body;
    
    // Simulate AI generation (in real app, this would call your AI model)
    const modelData = await generate3DModel({
      modelType,
      description,
      dimensions,
      complexity
    });

    res.json({
      success: true,
      modelData,
      previewUrl: `/api/models/preview/${Date.now()}` // Simulated preview
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'AI generation failed' });
  }
});

// @route   POST /api/models/save
// @desc    Save generated model
router.post('/save', protect, async (req, res) => {
  try {
    const { name, description, modelType, dimensions, complexity, modelData } = req.body;
    
    const project = await Project.create({
      userId: req.user.id,
      name,
      description,
      modelType,
      dimensions,
      complexity,
      modelData
    });

    res.status(201).json({
      success: true,
      project
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save project' });
  }
});

// @route   GET /api/models/user
// @desc    Get user's saved projects
router.get('/user', protect, async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json({ success: true, projects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch projects' });
  }
});

module.exports = router;