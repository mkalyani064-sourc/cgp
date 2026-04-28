const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

const testConnection = async () => {
    try {
        console.log('Connecting to MongoDB...');
        console.log('URI:', process.env.MONGO_URI ? 'URI found' : 'URI NOT FOUND');

        await mongoose.connect(process.env.MONGO_URI);
        console.log('Successfully connected to MongoDB!');

        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log('Collections in database:');
        if (collections.length === 0) {
            console.log('- No collections found (database might be empty)');
        } else {
            collections.forEach(col => console.log(`- ${col.name}`));
        }

        process.exit(0);
    } catch (error) {
        console.error('Failed to connect to MongoDB:');
        console.error(error.message);
        process.exit(1);
    }
};

testConnection();
