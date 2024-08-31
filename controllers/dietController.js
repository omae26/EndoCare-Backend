const Diet = require('../models/Diet');

// @desc    Add a new diet
// @route   POST /api/diets
// @access  Private
exports.addDiet = async (req, res) => {
  const { patientId, imageUrl, description } = req.body;

  try {
    const newDiet = new Diet({
      patientId,
      imageUrl,
      description,
    });

    const diet = await newDiet.save();

    res.status(201).json(diet);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get all diets for a patient
// @route   GET /api/diets/patient/:patientId
// @access  Private
exports.getDietsByPatient = async (req, res) => {
  try {
    const diets = await Diet.find({ patientId: req.params.patientId });
    res.json(diets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Delete a diet
// @route   DELETE /api/diets/:id
// @access  Private
exports.deleteDiet = async (req, res) => {
  try {
    const diet = await Diet.findByIdAndDelete(req.params.id);

    if (!diet) {
      return res.status(404).json({ msg: 'Diet not found' });
    }

    res.json({ msg: 'Diet removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
