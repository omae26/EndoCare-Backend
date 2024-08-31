const Blog = require('../models/Blog');

// @desc    Create a new blog post
// @route   POST /api/blogs
// @access  Private
exports.createBlog = async (req, res) => {
  const { title, content, image_url } = req.body;

  try {
    const blog = new Blog({
      title,
      content,
      image_url,
    });

    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get all blog posts
// @route   GET /api/blogs
// @access  Public
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get a single blog post by ID
// @route   GET /api/blogs/:id
// @access  Public
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ msg: 'Blog not found' });
    }
    res.json(blog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Update a blog post
// @route   PUT /api/blogs/:id
// @access  Private
exports.updateBlog = async (req, res) => {
  const { title, content, image_url } = req.body;

  try {
    let blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ msg: 'Blog not found' });
    }

    blog.title = title || blog.title;
    blog.content = content || blog.content;

    await blog.save();
    res.json(blog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Delete a blog post
// @route   DELETE /api/blogs/:id
// @access  Private
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ msg: 'Blog not found' });
    }

    await Blog.deleteOne({ _id: req.params.id });
    res.json({ msg: 'Blog removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

