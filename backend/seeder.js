const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load env vars
dotenv.config({ path: path.join(__dirname, '.env') });

// Load models
const Career = require('./models/Career');
const Resource = require('./models/Resource');
const Counsellor = require('./models/Counsellor');

// Original Data from User's components
const careers = [
    // SCIENCE
    {
        title: 'Engineering',
        stream: 'science',
        description: 'Design, build, and maintain structures, machines, and systems using scientific principles.',
        image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Medicine & Healthcare',
        stream: 'science',
        description: 'Diagnose, treat, and prevent diseases and injuries to improve patient health.',
        image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Pure Sciences',
        stream: 'science',
        description: 'Conduct research and experiments to advance knowledge in physics, chemistry, and biology.',
        image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Agriculture & Forestry',
        stream: 'science',
        description: 'Study and manage agricultural production, conservation, and natural resources.',
        image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
    },

    // COMMERCE
    {
        title: 'Finance & Banking',
        stream: 'commerce',
        description: 'Manage financial operations, investments, and banking services for individuals and organizations.',
        image: 'https://images.pexels.com/photos/544215/pexels-photo-544215.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Accounting & CA',
        stream: 'commerce',
        description: 'Analyze financial records, prepare tax returns, and provide financial advice to clients.',
        image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Business Management',
        stream: 'commerce',
        description: 'Lead organizations, make strategic decisions, and manage business operations.',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Marketing & Sales',
        stream: 'commerce',
        description: 'Promote products and services, build brand awareness, and drive business growth.',
        image: 'https://images.pexels.com/photos/943630/pexels-photo-943630.jpeg?auto=compress&cs=tinysrgb&w=800'
    },

    // ARTS
    {
        title: 'Literature & Languages',
        stream: 'arts',
        description: 'Study written works, develop language skills, and pursue careers in writing and communication.',
        image: 'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Psychology',
        stream: 'arts',
        description: 'Study human behavior and mental processes to help individuals overcome challenges.',
        image: 'https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'History & Archaeology',
        stream: 'arts',
        description: 'Study past events, civilizations, and artifacts to understand human development.',
        image: 'https://images.pexels.com/photos/590549/pexels-photo-590549.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Sociology & Social Work',
        stream: 'arts',
        description: 'Study social behavior, relationships, and institutions to address societal issues.',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    },

    // TECHNOLOGY
    {
        title: 'Software Development',
        stream: 'technology',
        description: 'Design, develop, and maintain software applications and systems for various platforms.',
        image: 'https://images.pexels.com/photos/5380640/pexels-photo-5380640.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Data Science & AI',
        stream: 'technology',
        description: 'Analyze complex data, build machine learning models, and develop AI solutions.',
        image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Cybersecurity',
        stream: 'technology',
        description: 'Protect computer systems, networks, and data from digital attacks and threats.',
        image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Cloud Computing',
        stream: 'technology',
        description: 'Design, implement, and manage cloud infrastructure and services for businesses.',
        image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800'
    },

    // DESIGN
    {
        title: 'Graphic Design',
        stream: 'design',
        description: 'Create visual concepts using computer software to communicate ideas through images and text.',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Fashion Design',
        stream: 'design',
        description: 'Create original clothing, accessories, and footwear designs for the fashion industry.',
        image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Interior Design',
        stream: 'design',
        description: 'Plan and design interior spaces to make them functional, safe, and aesthetically pleasing.',
        image: 'https://images.pexels.com/photos/273222/pexels-photo-273222.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Product Design',
        stream: 'design',
        description: 'Design and develop products that balance aesthetics, functionality, and user experience.',
        image: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
];

const resources = [
    {
        title: 'How to Choose the Right Career Path After 12th',
        category: 'article',
        description: 'A comprehensive guide to help you make informed decisions about your future career options.',
        image: 'https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Top Scholarships for Indian Students in 2024',
        category: 'article',
        description: 'A comprehensive list of scholarships available for Indian students pursuing higher education.',
        image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Mastering College Admission Interviews',
        category: 'guide',
        description: 'Expert tips and strategies to ace your college admission interviews and secure your spot.',
        image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Building a Winning Resume for Freshers',
        category: 'guide',
        description: 'Step-by-step guide to creating an impressive resume that stands out to recruiters.',
        image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Webinar: Emerging Career Opportunities in AI',
        category: 'video',
        description: 'Join industry experts as they discuss the growing field of AI and related career paths.',
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        title: 'Free Skill Assessment Test',
        category: 'tool',
        description: 'Evaluate your strengths and weaknesses across various domains with our free assessment tool.',
        image: 'https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
];

const counsellors = [
    {
        name: 'Dr. Priya',
        title: 'Career Psychologist',
        experience: '15+ years of experience',
        icon: 'fa-user'
    },
    {
        name: 'Gayathri',
        title: 'Industry Expert',
        experience: '20+ years of experience',
        icon: 'fa-user-tie'
    },
    {
        name: 'Anjali',
        title: 'Education Consultant',
        experience: '12+ years of experience',
        icon: 'fa-user-graduate'
    },
    {
        name: 'Narendra',
        title: 'Career Coach',
        experience: '18+ years of experience',
        icon: 'fa-user-cog'
    },
    {
        name: 'Dr. Kalyani',
        title: 'Child Psychologist',
        experience: '10+ years of experience',
        icon: 'fa-user-md'
    },
    {
        name: 'Mahitha Kudaravalli',
        title: 'Tech Industry Expert',
        experience: '14+ years of experience',
        icon: 'fa-user-laptop'
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { family: 4 });
        console.log('Connected for seeding...');

        // Clear existing data
        await Career.deleteMany();
        await Resource.deleteMany();
        await Counsellor.deleteMany();
        console.log('Old data cleared.');

        // Insert new data
        await Career.insertMany(careers);
        await Resource.insertMany(resources);
        await Counsellor.insertMany(counsellors);

        console.log('Database Seeded with ORIGINAL data! 🌱');
        process.exit();
    } catch (err) {
        console.error('Seeding failed:', err);
        process.exit(1);
    }
};

seedDB();
