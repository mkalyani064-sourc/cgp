const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Career = require('./models/Career');
const Resource = require('./models/Resource');
const Counsellor = require('./models/Counsellor');

dotenv.config({ path: path.join(__dirname, '.env') });

const checkStats = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { family: 4 });
        console.log('Connected to DB');

        const careerCount = await Career.countDocuments();
        const resourceCount = await Resource.countDocuments();
        const counsellorCount = await Counsellor.countDocuments();

        console.log(`Careers: ${careerCount}`);
        console.log(`Resources: ${resourceCount}`);
        console.log(`Counsellors: ${counsellorCount}`);

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

checkStats();
