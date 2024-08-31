const mongoose = require('mongoose');
const Patient = require('./models/Patient');
const Specialist = require('./models/Specialist');
const Appointment = require('./models/Appointment');
const Medication = require('./models/Medication');
const Exercise = require('./models/Exercise');
const Diet = require('./models/Diet');
const CommunityPost = require('./models/CommunityPost');
const Blog = require('./models/Blog');
const Story = require('./models/Story');
require('dotenv').config();
const connectDB = require('./config/db');

const seedData = async () => {
  try {
    await connectDB(); // Connect to MongoDB   
    
    // Clear existing data
    await Patient.deleteMany({});
    await Specialist.deleteMany({});
    await Appointment.deleteMany({});
    await Medication.deleteMany({});
    await Exercise.deleteMany({});
    await Diet.deleteMany({});
    await CommunityPost.deleteMany({});
    await Blog.deleteMany({});
    await Story.deleteMany({});

    // seed data
    // Create patients
    const patients = await Patient.create([
      {
        patient_id: new mongoose.Types.ObjectId(),
        name: 'Teresia Omae',
        email: 'teresia.omae@example.com',
        passwordHash: 'Teresia123',
        profile_image: 'https://example.com/profile_img1.jpg',
      },
      {
        patient_id: new mongoose.Types.ObjectId(),
        name: 'Hannah Mwangi',
        email: 'hannah.mwangi@example.com',
        passwordHash: 'Hannah123',
        profile_image: 'https://example.com/profile_img2.jpg',
      },
      {
        patient_id: new mongoose.Types.ObjectId(),
        name: 'Precious Mueni',
        email: 'precious.mueni@example.com',
        passwordHash: 'Precious123',
        profile_image: 'https://example.com/profile_img3.jpg',
      },
      {
        patient_id: new mongoose.Types.ObjectId(),
        name: 'Faith Wambui',
        email: 'faith.wambui@example.com',
        passwordHash: 'faith123',
        profile_image: 'https://example.com/profile_img4.jpg',
      },
      {
        patient_id: new mongoose.Types.ObjectId(),
        name: 'Mary Njeri',
        email: 'mary.njeri@example.com',
        passwordHash: 'hashedpassword202',
        profile_image: 'https://example.com/profile_img5.jpg',
      },
    ]);

    // Create specialists
    const specialists = await Specialist.create([
      {
        specialist_id: new mongoose.Types.ObjectId(),
        name: 'Dr. John Doe',
        specialization: 'Gynecologist',
        description: 'Experienced in endometriosis care.',
        profile_image: 'https://example.com/profile_img1.jpg',
      },
      {
        specialist_id: new mongoose.Types.ObjectId(),
        name: 'Dr. Alice Green',
        specialization: 'Nutritionist',
        description: 'Specializes in dietary plans for chronic conditions.',
        profile_image: 'https://example.com/profile_img2.jpg',
      },
      {
        specialist_id: new mongoose.Types.ObjectId(),
        name: 'Dr. Robert Brown',
        specialization: 'Physical Therapist',
        description: 'Expert in pain management and physical therapy.',
        profile_image: 'https://example.com/profile_img3.jpg',
      },
      {
        specialist_id: new mongoose.Types.ObjectId(),
        name: 'Dr. Jessica White',
        specialization: 'Endocrinologist',
        description: 'Focuses on hormonal disorders and treatments.',
        profile_image: 'https://example.com/profile_img4.jpg',
      },
      {
        specialist_id: new mongoose.Types.ObjectId(),
        name: 'Dr. Michael Black',
        specialization: 'Pain Management Specialist',
        description: 'Offers comprehensive pain management solutions.',
        profile_image: 'https://example.com/profile_img5.jpg',
      },
    ]);

    // Create appointments
// Create appointments
const appointments = await Appointment.create([
  {
    appointment_id: new mongoose.Types.ObjectId(),
    patient_id: patients[0]._id,
    hospital_name: 'City Hospital',
    doctors_name: 'Dr. John Doe',
    appointment_date: new Date(),
    time: '10:00 AM',
    status: 'pending',
    reminder_sent: false,
  },
  {
    appointment_id: new mongoose.Types.ObjectId(),
    patient_id: patients[1]._id,
    hospital_name: 'Health Center',
    doctors_name: 'Dr. Alice Green',
    appointment_date: new Date(),
    time: '11:00 AM',
    status: 'confirmed',
    reminder_sent: true,
  },
  {
    appointment_id: new mongoose.Types.ObjectId(),
    patient_id: patients[2]._id,
    hospital_name: 'General Hospital',
    doctors_name: 'Dr. Robert Brown',
    appointment_date: new Date(),
    time: '01:00 PM',
    status: 'pending',
    reminder_sent: false,
  },
  {
    appointment_id: new mongoose.Types.ObjectId(),
    patient_id: patients[3]._id,
    hospital_name: 'Private Clinic',
    doctors_name: 'Dr. Jessica White',
    appointment_date: new Date(),
    time: '02:00 PM',
    status: 'confirmed',
    reminder_sent: true,
  },
  {
    appointment_id: new mongoose.Types.ObjectId(),
    patient_id: patients[4]._id,
    hospital_name: 'Specialist Care',
    doctors_name: 'Dr. Michael Black',
    appointment_date: new Date(),
    time: '03:00 PM',
    status: 'cancelled',
    reminder_sent: false,
  },
]);


    // // Create medications
    const medications = await Medication.create([
      {
        _id: new mongoose.Types.ObjectId(), // Changed from medication_id to _id
        patientId: patients[0]._id,
        medicationName: 'Pain Relief Med',
        dosage: '200mg',
        startDate: new Date(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        doseTimesPerDay: '1x2',
        time1: '08:00 AM',
        time2: '08:00 PM',
        reminderSent: false,
      },
      {
        _id: new mongoose.Types.ObjectId(), // Changed from medication_id to _id
        patientId: patients[1]._id,
        medicationName: 'Anti-Inflammatory',
        dosage: '400mg',
        startDate: new Date(),
        endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        doseTimesPerDay: '1x3',
        time1: '07:00 AM',
        time2: '01:00 PM',
        time3: '07:00 PM',
        reminderSent: true,
      },
      {
        _id: new mongoose.Types.ObjectId(), // Changed from medication_id to _id
        patientId: patients[2]._id,
        medicationName: 'Antispasmodic',
        dosage: '150mg',
        startDate: new Date(),
        endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        doseTimesPerDay: '1x1',
        time1: '09:00 AM',
        reminderSent: false,
      },
      {
        _id: new mongoose.Types.ObjectId(), // Changed from medication_id to _id
        patientId: patients[3]._id,
        medicationName: 'Hormone Therapy',
        dosage: '250mg',
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        doseTimesPerDay: '1x1',
        time1: '06:00 AM',
        reminderSent: true,
      },
      {
        _id: new mongoose.Types.ObjectId(), // Changed from medication_id to _id
        patientId: patients[4]._id,
        medicationName: 'Vitamins',
        dosage: '100mg',
        startDate: new Date(),
        endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        doseTimesPerDay: '1x2',
        time1: '08:00 AM',
        time2: '08:00 PM',
        reminderSent: false,
      },
    ]);
    

    // // Create exercises
    const exercises = await Exercise.create([
      {
        exercise_id: new mongoose.Types.ObjectId(),
        patient_id: patients[0]._id,
        exercise_name: 'Yoga for Back Pain',
        image_url: 'https://example.com/yoga.jpg',
        duration: 30,
        description: 'A gentle yoga routine to relieve back pain.',
        category: 'Back pain exercises',
      },
      {
        exercise_id: new mongoose.Types.ObjectId(),
        patient_id: patients[1]._id,
        exercise_name: 'Stretching Routine',
        image_url: 'https://example.com/stretching.jpg',
        duration: 20,
        description: 'Daily stretching to improve flexibility.',
        category: 'low-effort',
      },
      {
        exercise_id: new mongoose.Types.ObjectId(),
        patient_id: patients[2]._id,
        exercise_name: 'Strength Training',
        image_url: 'https://example.com/strength.jpg',
        duration: 45,
        description: 'Strength training exercises to build muscle.',
        category: 'joint-pain',
      },
      {
        exercise_id: new mongoose.Types.ObjectId(),
        patient_id: patients[3]._id,
        exercise_name: 'Pilates',
        image_url: 'https://example.com/pilates.jpg',
        duration: 40,
        description: 'Pilates exercises to strengthen core muscles.',
        category: 'Back pain exercises',
      },
      {
        exercise_id: new mongoose.Types.ObjectId(),
        patient_id: patients[4]._id,
        exercise_name: 'Walking Routine',
        image_url: 'https://example.com/walking.jpg',
        duration: 30,
        description: 'A brisk walking routine for overall health.',
        category: 'low-effort',
      },
    ]);

    // // Create diets
      // Create diets
const diets = await Diet.create([
  {
    patientId: patients[0]._id,
    imageUrl: 'https://example.com/healthy_diet1.jpg',
    description: 'Balanced diet plan to manage symptoms.',
  },
  {
    patientId: patients[1]._id,
    imageUrl: 'https://example.com/healthy_diet2.jpg',
    description: 'Diet rich in antioxidants and fiber.',
  },
  {
    patientId: patients[2]._id,
    imageUrl: 'https://example.com/healthy_diet3.jpg',
    description: 'Anti-inflammatory diet plan.',
  },
  {
    patientId: patients[3]._id,
    imageUrl: 'https://example.com/healthy_diet4.jpg',
    description: 'Low-sugar and low-carb diet for better health.',
  },
  {
    patientId: patients[4]._id,
    imageUrl: 'https://example.com/healthy_diet5.jpg',
    description: 'Diet plan focusing on gut health.',
  },
]);


    // Create community posts
    const communityPosts = await CommunityPost.create([
      {
        post_id: new mongoose.Types.ObjectId(),
        patient_id: patients[0]._id,
        title: 'My Journey with Endometriosis',
        content: 'Sharing my personal experience and tips for managing endometriosis.',
      },
      {
        post_id: new mongoose.Types.ObjectId(),
        patient_id: patients[1]._id,
        title: 'Diet Tips for Endometriosis',
        content: 'Discussing dietary changes that have helped me manage symptoms.',
      },
      {
        post_id: new mongoose.Types.ObjectId(),
        patient_id: patients[2]._id,
        title: 'Exercises That Work',
        content: 'List of exercises that have been beneficial in managing my condition.',
      },
      {
        post_id: new mongoose.Types.ObjectId(),
        patient_id: patients[3]._id,
        title: 'Support and Resources',
        content: 'Finding support and resources for endometriosis.',
      },
      {
        post_id: new mongoose.Types.ObjectId(),
        patient_id: patients[4]._id,
        title: 'Living with Endometriosis',
        content: 'Advice on how to live a fulfilling life with endometriosis.',
      },
    ]);

    // // Create blogs
    const blogs = await Blog.create([
      {
        blog_id: new mongoose.Types.ObjectId(),
        title: 'Understanding Endometriosis',
        content: 'An in-depth look into what endometriosis is and how it affects the body.',
        image_url: 'https://example.com/blog1.jpg',
      },
      {
        blog_id: new mongoose.Types.ObjectId(),
        title: 'Treatment Options',
        content: 'Exploring various treatment options for endometriosis.',
        image_url: 'https://example.com/blog2.jpg',
      },
      {
        blog_id: new mongoose.Types.ObjectId(),
        title: 'Living with Chronic Pain',
        content: 'Tips and strategies for managing chronic pain associated with endometriosis.',
        image_url: 'https://example.com/blog3.jpg',
      },
      {
        blog_id: new mongoose.Types.ObjectId(),
        title: 'Nutrition and Endometriosis',
        content: 'How diet can impact endometriosis symptoms and overall health.',
        image_url: 'https://example.com/blog4.jpg',
      },
      {
        blog_id: new mongoose.Types.ObjectId(),
        title: 'Mental Health and Endometriosis',
        content: 'Addressing the mental health challenges that come with endometriosis.',
        image_url: 'https://example.com/blog5.jpg',
      },
    ]);

    // // Create stories
    const stories = await Story.create([
      {
        story_id: new mongoose.Types.ObjectId(),
        patient_id: patients[0]._id,
        title: 'A Day in My Life',
        content: 'Sharing a typical day managing endometriosis and finding balance.',
      },
      {
        story_id: new mongoose.Types.ObjectId(),
        patient_id: patients[1]._id,
        title: 'From Diagnosis to Treatment',
        content: 'My journey from diagnosis to finding effective treatments.',
      },
      {
        story_id: new mongoose.Types.ObjectId(),
        patient_id: patients[2]._id,
        title: 'Finding Support',
        content: 'How I found support from others with similar experiences.',
      },
      {
        story_id: new mongoose.Types.ObjectId(),
        patient_id: patients[3]._id,
        title: 'Dealing with Flare-Ups',
        content: 'Strategies I use to manage flare-ups and keep moving forward.',
      },
      {
        story_id: new mongoose.Types.ObjectId(),
        patient_id: patients[4]._id,
        title: 'Coping Mechanisms',
        content: 'Coping mechanisms and practices that have helped me cope with endometriosis.',
      },
    ]);

    console.log('Seed data successfully inserted!');
  } catch (err) {
    console.error('Error seeding data:', err);
  }  finally {
    mongoose.connection.close();
  }
};

seedData();

