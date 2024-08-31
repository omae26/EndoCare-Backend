const Story = require('../models/Story');

// @desc    Create a new story
// @route   POST /api/stories
// @access  Private
exports.createStory = async (req, res) => {
  const { patient_id, title, content } = req.body;

  try {
    const story = new Story({
      patient_id,
      title,
      content,
    });

    await story.save();
    res.status(201).json(story);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get all stories
// @route   GET /api/stories
// @access  Public
exports.getStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get a single story by ID
// @route   GET /api/stories/:id
// @access  Public
exports.getStoryById = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ msg: 'Story not found' });
    }
    res.json(story);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Update a story
// @route   PUT /api/stories/:id
// @access  Private
exports.updateStory = async (req, res) => {
  const { title, content } = req.body;

  try {
    let story = await Story.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ msg: 'Story not found' });
    }

    story.title = title || story.title;
    story.content = content || story.content;

    await story.save();
    res.json(story);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Delete a story
// @route   DELETE /api/stories/:id
// @access  Private
exports.deleteStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ msg: 'Story not found' });
    }

    await story.remove();
    res.json({ msg: 'Story removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
