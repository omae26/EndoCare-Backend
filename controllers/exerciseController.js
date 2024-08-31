const Exercise = require('../models/Exercise');

// @desc    Create a new exercise
// @route   POST /api/exercises
// @access  Private
exports.createExercise = async (req, res) => {
  const { patient_id, exercise_name, image_url, duration, description, category } = req.body;

  try {
    const exercise = new Exercise({
      patient_id,
      exercise_name,
      image_url,
      duration,
      description,
      category,
    });

    await exercise.save();
    res.status(201).json(exercise);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get all exercises for a patient
// @route   GET /api/exercises/patient/:patient_id
// @access  Private
exports.getExercisesByPatientId = async (req, res) => {
  try {
    const exercises = await Exercise.find({ patient_id: req.params.patient_id });
    res.json(exercises);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get a single exercise by ID
// @route   GET /api/exercises/:id
// @access  Private
exports.getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ msg: 'Exercise not found' });
    }
    res.json(exercise);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Update an exercise
// @route   PUT /api/exercises/:id
// @access  Private
exports.updateExercise = async (req, res) => {
  const { exercise_name, image_url, duration, description, category } = req.body;

  try {
    let exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ msg: 'Exercise not found' });
    }

    // Update fields if provided in the request
    if (exercise_name) exercise.exercise_name = exercise_name;
    if (image_url) exercise.image_url = image_url;
    if (duration) exercise.duration = duration;
    if (description) exercise.description = description;
    if (category) exercise.category = category;

    await exercise.save();
    res.json(exercise);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Delete an exercise
// @route   DELETE /api/exercises/:id
// @access  Private
exports.deleteExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);
    
    if (!exercise) {
      return res.status(404).json({ msg: 'Exercise not found' });
    }

    res.json({ msg: 'Exercise removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

