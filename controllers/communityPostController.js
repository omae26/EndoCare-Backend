const CommunityPost = require('../models/CommunityPost');

// @desc    Create a new community post
// @route   POST /api/community-posts
// @access  Private
exports.createCommunityPost = async (req, res) => {
  const { patient_id, title, content } = req.body;

  try {
    const post = new CommunityPost({
      patient_id,
      title,
      content,
    });

    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get all community posts
// @route   GET /api/community-posts
// @access  Public
exports.getCommunityPosts = async (req, res) => {
  try {
    const posts = await CommunityPost.find();
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get a single community post by ID
// @route   GET /api/community-posts/:id
// @access  Public
exports.getCommunityPostById = async (req, res) => {
  try {
    const post = await CommunityPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Update a community post
// @route   PUT /api/community-posts/:id
// @access  Private
exports.updateCommunityPost = async (req, res) => {
  const { title, content } = req.body;

  try {
    let post = await CommunityPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    post.title = title || post.title;
    post.content = content || post.content;

    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Delete a community post
// @route   DELETE /api/community-posts/:id
// @access  Private
exports.deleteCommunityPost = async (req, res) => {
  try {
    const post = await CommunityPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    await post.remove();
    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
