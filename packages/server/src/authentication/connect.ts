import mongoose from 'mongoose';
import { MONGOOSE_URI } from '../config';

export const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGOOSE_URI); // bypass TS strictness on connection options
    console.log('✅ MongoDB connected at', MONGOOSE_URI);
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
};
