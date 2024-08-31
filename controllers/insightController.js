const Insight = require('../models/Insight');

// @desc    Get all insights
// @route   GET /api/insights
// @access  Public
exports.getAllInsights = async (req, res) => {
  try {
    const insights = await Insight.find();
    res.status(200).json(insights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Get insights by category
// @route   GET /api/insights/category/:category
// @access  Public
exports.getInsightsByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const insights = await Insight.find({ category });
    res.status(200).json(insights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Create a new insight
// @route   POST /api/insights
// @access  Private
exports.createInsight = async (req, res) => {
  try {
    const newInsight = new Insight(req.body);
    await newInsight.save();
    res.status(201).json(newInsight);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Update an existing insight
// @route   PUT /api/insights/:id
// @access  Private
exports.updateInsight = async (req, res) => {
  try {
    const updatedInsight = await Insight.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedInsight);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Delete an insight
// @route   DELETE /api/insights/:id
// @access  Private
exports.deleteInsight = async (req, res) => {
  try {
    await Insight.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Insight deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
