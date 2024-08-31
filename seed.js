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
const Insight = require('./models/Insight')
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
        profile_image: 'https://img.freepik.com/free-photo/smiley-black-teenage-girl-relaxing-outdoors_23-2149012773.jpg?t=st=1725135183~exp=1725138783~hmac=5f1bd1f5fca7cca360b8c164ebaf690834991415e30e5b89b477ef112d73efdb&w=360',
      },
      {
        patient_id: new mongoose.Types.ObjectId(),
        name: 'Hannah Mwangi',
        email: 'hannah.mwangi@example.com',
        passwordHash: 'Hannah123',
        profile_image: 'https://img.freepik.com/free-photo/young-black-woman-with-afro-hair-laughing-enjoying_150588-159.jpg?t=st=1725135142~exp=1725138742~hmac=3964193cd5233981413dadcc53e88e7cfadbbe69b94ebae7a45b03861bde24df&w=740',
      },
      {
        patient_id: new mongoose.Types.ObjectId(),
        name: 'Precious Mueni',
        email: 'precious.mueni@example.com',
        passwordHash: 'Precious123',
        profile_image: 'https://img.freepik.com/free-photo/young-african-american-woman-isolated-yellow-studio-background-facial-expression-beautiful-female-close-up-portrait-concept-human-emotions-facial-expression-smiling-keeping-calm_155003-25193.jpg?t=st=1725135275~exp=1725138875~hmac=b379c53b09ed8ed095029d38abd3ccc1548d143ab7e20fffd72ea287dc20a00b&w=360',
      },
      {
        patient_id: new mongoose.Types.ObjectId(),
        name: 'Faith Wambui',
        email: 'faith.wambui@example.com',
        passwordHash: 'faith123',
        profile_image: 'https://img.freepik.com/free-photo/young-person-portrait-photorealistic-style-with-braids_23-2151570204.jpg?t=st=1725135204~exp=1725138804~hmac=a50432e824705fd76206e0bb45abc7b635bf677abed5e16f74f9c3a69ebbc6fc&w=360',
      },
      {
        patient_id: new mongoose.Types.ObjectId(),
        name: 'Mary Njeri',
        email: 'mary.njeri@example.com',
        passwordHash: 'hashedpassword202',
        profile_image: 'https://img.freepik.com/free-photo/close-up-smiley-woman-outdoors_23-2149002410.jpg?t=st=1725135229~exp=1725138829~hmac=76a7fbb679f279c79a4fd5b5de3d3470e3198aa4c06ddfc027c1a0657725ac45&w=740',
      },
    ]);

    // Create specialists
    const specialists = await Specialist.create([
      {
        specialist_id: new mongoose.Types.ObjectId(),
        name: 'Dr. John Doe',
        specialization: 'Gynecologist',
        description: 'Experienced in endometriosis care.',
        profile_image: 'https://img.freepik.com/free-photo/side-view-patient-doctor-s-appointment_23-2149726946.jpg?t=st=1725120636~exp=1725124236~hmac=fa84fc93efc45ece366be210ea87f0ec1724ca4f6a79b1652f1e5ab9c2b70be2&w=740',
      },
      {
        specialist_id: new mongoose.Types.ObjectId(),
        name: 'Dr. Alice Green',
        specialization: 'Nutritionist',
        description: 'Specializes in dietary plans for chronic conditions.',
        profile_image: 'https://img.freepik.com/free-photo/medium-shot-doctor-patient-with-fruits_23-2148302116.jpg?t=st=1725120424~exp=1725124024~hmac=f39ea3de0bcc738dcc2d945298d18f9793d8c72cf22c5fd56a6a1969415aba2b&w=740',
      },
      {
        specialist_id: new mongoose.Types.ObjectId(),
        name: 'Dr. Robert Brown',
        specialization: 'Physical Therapist',
        description: 'Expert in pain management and physical therapy.',
        profile_image: 'https://img.freepik.com/free-photo/medium-shot-young-woman-talking-about-her-pain_23-2149341524.jpg?t=st=1725131561~exp=1725135161~hmac=a005cb009e41fa7f72cec266dc1e00990c9ccee6120f398ce49f3cbda947f6bb&w=740',
      },
      {
        specialist_id: new mongoose.Types.ObjectId(),
        name: 'Dr. Jessica White',
        specialization: 'Endocrinologist',
        description: 'Focuses on hormonal disorders and treatments.',
        profile_image: 'https://img.freepik.com/free-photo/side-view-doctor-wearing-face-mask_23-2149941532.jpg?t=st=1725131777~exp=1725135377~hmac=ea36ad845c358698fb5486ec1f4398ee00e9d96b313b37a8f9d6265384b3414f&w=740',
      },
      {
        specialist_id: new mongoose.Types.ObjectId(),
        name: 'Dr. Michael Black',
        specialization: 'Pain Management Specialist',
        description: 'Offers comprehensive pain management solutions.',
        profile_image: 'https://img.freepik.com/free-photo/doctor-with-folder-his-hands-looks-camera_1157-41934.jpg?t=st=1725131920~exp=1725135520~hmac=e88361c9f12757db5d1a57b98eec16e658126556d1861715bc63b5c1fb0cf49b&w=740',
      },
    ]);

    // Create appointments
// Create appointments
const appointments = await Appointment.create([
  {
    patient_id: patients[0]._id,
    hospital_name: 'City Hospital',
    doctors_name: 'Dr. John Doe',
    appointment_date: new Date(),
    time: '10:00 AM',
    status: 'pending',
    reminder_sent: false,
  },
  {
   
    patient_id: patients[1]._id,
    hospital_name: 'Health Center',
    doctors_name: 'Dr. Alice Green',
    appointment_date: new Date(),
    time: '11:00 AM',
    status: 'confirmed',
    reminder_sent: true,
  },
  {
   
    patient_id: patients[2]._id,
    hospital_name: 'General Hospital',
    doctors_name: 'Dr. Robert Brown',
    appointment_date: new Date(),
    time: '01:00 PM',
    status: 'pending',
    reminder_sent: false,
  },
  {
    
    patient_id: patients[3]._id,
    hospital_name: 'Private Clinic',
    doctors_name: 'Dr. Jessica White',
    appointment_date: new Date(),
    time: '02:00 PM',
    status: 'confirmed',
    reminder_sent: true,
  },
  {
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
        image_url: 'https://i.pinimg.com/564x/37/b9/c4/37b9c444564785750f84831a5600e00a.jpg',
        duration: 30,
        description: 'A gentle yoga routine to relieve back pain.',
        category: 'Back pain exercises',
      },
      {
        exercise_id: new mongoose.Types.ObjectId(),
        patient_id: patients[1]._id,
        exercise_name: 'Stretching Routine',
        image_url: 'https://i.pinimg.com/564x/1a/57/6b/1a576bc3aa4fea0dcaaa673a3149c681.jpg',
        duration: 20,
        description: 'Daily stretching to improve flexibility.',
        category: 'low-effort',
      },
      {
        exercise_id: new mongoose.Types.ObjectId(),
        patient_id: patients[2]._id,
        exercise_name: 'Strength Training',
        image_url: 'https://i.pinimg.com/564x/08/d7/ed/08d7edfc304455d23596bc1f97447d21.jpg',
        duration: 45,
        description: 'Strength training exercises to build muscle.',
        category: 'joint-pain',
      },
      {
        exercise_id: new mongoose.Types.ObjectId(),
        patient_id: patients[3]._id,
        exercise_name: 'Pilates',
        image_url: 'https://i.pinimg.com/564x/a3/df/27/a3df27835d77256f68154bd1013e6654.jpg',
        duration: 40,
        description: 'Pilates exercises to strengthen core muscles.',
        category: 'Back pain exercises',
      },
      {
        exercise_id: new mongoose.Types.ObjectId(),
        patient_id: patients[4]._id,
        exercise_name: 'Walking Routine',
        image_url: 'https://i.pinimg.com/564x/16/f8/1c/16f81cadd2bab58b39bff5ed9f99b489.jpg',
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
    imageUrl: 'https://img.freepik.com/free-photo/woman-having-sustainable-lifestyle_23-2148999377.jpg?t=st=1725132249~exp=1725135849~hmac=20277bedfbdaf74833a5adaed539f1d8b9d7a09931743ed96b165def5ebb2047&w=360',
    description: 'Balanced diet plan to manage symptoms.',
  },
  {
    patientId: patients[1]._id,
    imageUrl: 'https://img.freepik.com/free-photo/fresh-fruits-bread-milk-white-background_23-2147862993.jpg?t=st=1725132347~exp=1725135947~hmac=7b772b59d371f36a4001ff1ef6d4e650ed846a5439f4a55a9c8ffd026886c486&w=740',
    description: 'Diet rich in antioxidants and fiber.',
  },
  {
    patientId: patients[2]._id,
    imageUrl: 'https://img.freepik.com/free-photo/diet-week-plan-healthy-vegetables-background_23-2147885844.jpg?t=st=1725132484~exp=1725136084~hmac=f2b3fbcbb9755c951698f0b4944a7b6a641691d61a5a51f61706c470ed2a8059&w=740',
    description: 'Anti-inflammatory diet plan.',
  },
  {
    patientId: patients[3]._id,
    imageUrl: 'https://img.freepik.com/free-photo/grilled-salmon-fish-fillet-fresh-green-lettuce-vegetable-tomato-salad-with-avocado-guacamole-balanced-nutrition-concept-clean-eating-flexitarian-mediterranean-diet_1150-44857.jpg?t=st=1725132531~exp=1725136131~hmac=49a7cbd2517e2b45f065b69f4513a4a290310a7f054a76ab89812a0455fb2361&w=740',
    description: 'Low-sugar and low-carb diet for better health.',
  },
  {
    patientId: patients[4]._id,
    imageUrl: 'https://img.freepik.com/free-photo/hands-holding-notebook-vegetables_23-2148332086.jpg?t=st=1725132608~exp=1725136208~hmac=4d625c3598bc734c4bc27167a786a35c81c01b9208a9fb4c323cae1cd9f7614c&w=740',
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
        image_url: 'https://img.freepik.com/free-vector/hand-drawn-endometriosis-illustration_23-2151311306.jpg?t=st=1725132800~exp=1725136400~hmac=a60114dc24ba8a748ebf6193e9db7f9d0034bd58bd0fa8ff8cd9a8022a3e3640&w=740',
      },
      {
        blog_id: new mongoose.Types.ObjectId(),
        title: 'Treatment Options',
        content: 'Exploring various treatment options for endometriosis.',
        image_url: 'https://img.freepik.com/free-vector/hand-drawn-ivf-illustration_23-2149418721.jpg?t=st=1725132880~exp=1725136480~hmac=ef87f77b82d648688390a34f39d4945355198fb31e08b4ac2ac571c42de8f4b8&w=740',
      },
      {
        blog_id: new mongoose.Types.ObjectId(),
        title: 'Living with Chronic Pain',
        content: 'Tips and strategies for managing chronic pain associated with endometriosis.',
        image_url: 'https://img.freepik.com/free-vector/gynecology-consultation-illustration-concept_23-2148648386.jpg?t=st=1725132948~exp=1725136548~hmac=3fc2142607a9118a531ab4d231b51ceeeede4ff76e22d64dfb507c390abf5910&w=740',
      },
      {
        blog_id: new mongoose.Types.ObjectId(),
        title: 'Nutrition and Endometriosis',
        content: 'How diet can impact endometriosis symptoms and overall health.',
        image_url: 'https://img.freepik.com/free-photo/beautiful-flower-still-life-ovary_23-2149344371.jpg?t=st=1725133074~exp=1725136674~hmac=99a041cc11a3c9bda33dc14a16f41d1caec741f772c4611c2bf4c0b0b9362597&w=740',
      },
      {
        blog_id: new mongoose.Types.ObjectId(),
        title: 'Mental Health and Endometriosis',
        content: 'Addressing the mental health challenges that come with endometriosis.',
        image_url: 'https://img.freepik.com/free-photo/young-depressed-adult-home_23-2149563055.jpg?t=st=1725133176~exp=1725136776~hmac=12131a9c3719c91108d95c959496c0616094b4b084498acfb587a749bf508fa5&w=740',
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

    // // Create insights
   
    const insights = await Insight.create([
      {
        category: 'recommended',
        image_url: 'https://img.freepik.com/free-photo/side-view-doctor-talking-patient_23-2149844639.jpg?t=st=1725133961~exp=1725137561~hmac=615da730a3b1c036c6e2001a8d24ccb8b74ea559d828c49208ea92c4810d3553&w=740',
        text: 'Treatment Options',
        slides: [
          'Over-the-counter pain relievers like ibuprofen can help manage pain.',
          'Hormone therapy may reduce or eliminate symptoms.',
          'Surgical options are available for severe cases.',
          'Alternative therapies such as acupuncture can provide relief.',
          'Support groups and counseling can be beneficial.',
        ],
      },
      {
        category: 'recommended',
        image_url: 'https://img.freepik.com/free-photo/portrait-braless-woman-home-eating-checking-journal_23-2150501150.jpg?t=st=1725133830~exp=1725137430~hmac=efa7e12b9487f120a37d534f52da46ca6e3c82828131c418ee92be15ae2b7eef&w=740',
        text: 'Lifestyle Tips',
        slides: [
          'Regular exercise can help alleviate symptoms.',
          'Managing stress through relaxation techniques can be helpful.',
          'Maintaining a balanced diet supports overall health.',
          'Getting adequate rest and sleep is important.',
          'Keeping track of symptoms and triggers can aid in management.',
        ],
      },
      {
        category: 'recommended',
        image_url: 'https://img.freepik.com/free-photo/person-sharing-feelings-emotions-therapy-session_23-2151073987.jpg?t=st=1725133903~exp=1725137503~hmac=20a4b190a07b5da4ee23fd34730198ff3d1a9235640f49c8fe8c72c4c53500ed&w=740',
        text: 'Mental Health Support',
        slides: [
          'Seeking therapy or counseling can be beneficial.',
          'Connecting with others who have endometriosis can provide support.',
          'Practicing mindfulness and stress-reduction techniques may help.',
          'Joining support groups for emotional and practical support.',
          'Maintaining a positive outlook and focusing on self-care.',
        ],
      },
      {
        category: 'symptoms',
        image_url: 'https://img.freepik.com/free-photo/woman-sitting-with-hurting-stomach_23-2147768319.jpg?t=st=1725134116~exp=1725137716~hmac=489f3ec46d7ed8fd76c3fbadba017bfd1c58a25e8e575b9e224bbe4e6a6c8a96&w=360',
        text: 'Pelvic Pain',
        slides: [
          'Pain in the pelvic region often associated with menstrual cycles.',
          'May worsen with physical activity or intercourse.',
          'Can vary from mild to severe and may impact daily life.',
        ],
      },
      {
        category: 'symptoms',
        image_url: 'https://img.freepik.com/free-psd/ovaries-uterus-shape-isolated_23-2151354615.jpg?t=st=1725134169~exp=1725137769~hmac=12d80d83382dc8aab2f97cec32753ef76813c8798f66ba26f12388c793e0172c&w=740',
        text: 'Heavy Menstrual Bleeding',
        slides: [
          'Excessive bleeding during menstruation.',
          'Can lead to anemia and fatigue.',
          'May be accompanied by clotting and prolonged periods.',
        ],
      },
      {
        category: 'symptoms',
        image_url: 'https://img.freepik.com/free-photo/displeased-curly-haired-young-woman-feels-discomfort-belly-has-diarrhea-frowns-face-presses-hands-belly-has-problems-with-health-eating-disorder_273609-43345.jpg?t=st=1725134248~exp=1725137848~hmac=479839f8ca18a145f2def28a86f4707b326a01e5d17dc914b0995e1fd636ed4a&w=740',
        text: 'Digestive Issues',
        slides: [
          'Pain or discomfort during bowel movements.',
          'Diarrhea or constipation may occur.',
          'Symptoms may fluctuate with menstrual cycle.',
        ],
      },
      {
        category: 'food',
        image_url: 'https://img.freepik.com/free-photo/flat-lay-healthy-immunity-boosting-foods_23-2149211601.jpg?t=st=1725134420~exp=1725138020~hmac=e2959620174b02ac56f5093c42a09129b8f6cbca3063858521d739dd57a4a981&w=740',
        text: 'Anti-inflammatory Foods',
        slides: [
          'Incorporate omega-3 rich foods like salmon and walnuts.',
          'Include fruits and vegetables with high antioxidant content.',
          'Avoid processed foods and sugary items.',
        ],
      },
      {
        category: 'food',
        image_url: 'https://img.freepik.com/free-photo/serious-displeased-woman-with-afro-hairstyle-shows-refusal-gesture-holds-croissant-denies-eating-dessert-wears-spectacles-striped-jumper_273609-34522.jpg?t=st=1725134501~exp=1725138101~hmac=36c59ffa97d2db9e87b02bc418fbaf3125b77b8674b6d2bdaee5adcc60a2635c&w=740',
        text: 'Foods to Avoid',
        slides: [
          'Reduce intake of red meat and high-fat dairy products.',
          'Limit consumption of caffeine and alcohol.',
          'Avoid foods high in refined sugars and trans fats.',
        ],
      },
      {
        category: 'food',
        image_url: 'https://img.freepik.com/free-photo/glass-water-macro-shot_53876-65290.jpg?t=st=1725134614~exp=1725138214~hmac=e1de95eac29a8297dc7af15119dfa74dab6575e0e9a88ff8a73fb96ed6b9a606&w=740',
        text: 'Hydration and Nutrition',
        slides: [
          'Drink plenty of water to stay hydrated.',
          'Opt for a balanced diet with whole grains and lean proteins.',
          'Stay mindful of portion sizes and avoid overeating.',
        ],
      },
      {
        category: 'firstAid',
        image_url: 'https://img.freepik.com/free-photo/close-up-woman-exercising-after-online-instructor_23-2149240299.jpg?t=st=1725134751~exp=1725138351~hmac=cea48f0c4f5c07909cf5631cc04c195a9a047ae8df163673868acb32d182f8c6&w=360',
        text: 'Pain Relief Methods',
        slides: [
          'Use heating pads on the lower abdomen for pain relief.',
          'Consider over-the-counter pain medications like ibuprofen.',
          'Practice gentle stretching and relaxation exercises.',
        ],
      },
      {
        category: 'firstAid',
        image_url: 'https://img.freepik.com/free-photo/medic-african-ethnicity-helping-sick-patient-clinic-hospital-ward-doctor-using-medical-equipment-technology-young-woman-healthcare-treatment-black-person-bed_482257-16526.jpg?t=st=1725134901~exp=1725138501~hmac=40be2b40e7c1bc3988866f5d961b30e4d4fe1bd7e5334aa82179cd1db4ae47e9&w=740',
        text: 'Emergency Measures',
        slides: [
          'Seek medical attention if experiencing severe pain or bleeding.',
          'Contact a healthcare provider if symptoms worsen significantly.',
          'Keep a record of symptoms and share with your doctor.',
        ],
      },
      {
        category: 'firstAid',
        image_url: 'https://img.freepik.com/free-photo/education-studying-concept-thoughtful-woman-with-curly-hair-notepad-head-holds-pen-near-temple-thinks-about-what-write-wears-big-round-glasses_273609-34000.jpg?t=st=1725135010~exp=1725138610~hmac=f4af88365c1f4a644e8d4b90272bf3c041f68dce4bcb50c78121813827f17a9a&w=740',
        text: 'Daily Management Tips',
        slides: [
          'Track symptoms in a journal for better management.',
          'Adopt a consistent routine for managing symptoms.',
          'Stay in touch with your healthcare provider for ongoing support.',
        ],
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

