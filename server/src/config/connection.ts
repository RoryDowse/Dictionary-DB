import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || '';

console.log('MONGODB_URI:', process.env.MONGODB_URI || '');

const db = async (): Promise<typeof mongoose.connection> => {
  try {
    if (!MONGODB_URI) {
      throw new Error('MongoDB URI is not defined. Please check your .env file.');
    }
    await mongoose.connect(MONGODB_URI);
    console.log('Database connected.');
    return mongoose.connection;
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Database connection failed.');
  }
};

export default db;
