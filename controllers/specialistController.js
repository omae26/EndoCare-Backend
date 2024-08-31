const Specialist = require('../models/Specialist');

// @desc    Add a new specialist
// @route   POST /api/specialists
// @access  Private (Only accessible by admins)
exports.addSpecialist = async (req, res) => {
  const { specialist_id, name, specialization, description, profile_img } = req.body;

  try {
    let specialist = await Specialist.findOne({ specialist_id });

    if (specialist) {
      return res.status(400).json({ msg: 'Specialist already exists' });
    }

    specialist = new Specialist({
      specialist_id,
      name,
      specialization,
      description,
      profile_img, // Adding the profile image here
    });

    await specialist.save();

    res.status(201).json(specialist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get all specialists
// @route   GET /api/specialists
// @access  Public
exports.getSpecialists = async (req, res) => {
  try {
    const specialists = await Specialist.find();
    res.json(specialists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get a single specialist by ID
// @route   GET /api/specialists/:id
// @access  Public
exports.getSpecialistById = async (req, res) => {
  try {
    const specialist = await Specialist.findById(req.params.id);

    if (!specialist) {
      return res.status(404).json({ msg: 'Specialist not found' });
    }

    res.json(specialist);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Specialist not found' });
    }

    res.status(500).send('Server error');
  }
};

// @desc    Update a specialist
// @route   PUT /api/specialists/:id
// @access  Private (Only accessible by admins)
exports.updateSpecialist = async (req, res) => {
  const { name, specialization, description, profile_img } = req.body;

  const updatedFields = {
    name,
    specialization,
    description,
    profile_img, // Including profile_img in the update
  };

  try {
    let specialist = await Specialist.findById(req.params.id);

    if (!specialist) {
      return res.status(404).json({ msg: 'Specialist not found' });
    }

    specialist = await Specialist.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true }
    );

    res.json(specialist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Delete a specialist
// @route   DELETE /api/specialists/:id
// @access  Private (Only accessible by admins)
exports.deleteSpecialist = async (req, res) => {
  try {
    const specialist = await Specialist.findById(req.params.id);

    if (!specialist) {
      return res.status(404).json({ msg: 'Specialist not found' });
    }

    await specialist.remove();

    res.json({ msg: 'Specialist removed' });
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Specialist not found' });
    }

    res.status(500).send('Server error');
  }
};
