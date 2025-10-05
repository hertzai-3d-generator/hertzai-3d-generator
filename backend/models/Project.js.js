const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  modelType: {
    type: String,
    required: true
  },
  dimensions: {
    width: Number,
    height: Number,
    depth: Number
  },
  complexity: {
    type: String,
    required: true
  },
  modelData: {
    type: String, // This would be the actual 3D model data or file path
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', projectSchema);