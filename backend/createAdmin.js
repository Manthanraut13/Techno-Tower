// createAdmin.js
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import User from './src/models/User.js';

dotenv.config();

const run = async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  const passwordHash = await bcrypt.hash('Admin@123', 10);

  await User.create({
    name: 'Admin',
    email: 'admin@technotower.com',
    passwordHash,
    role: 'admin',
  });

  console.log('Admin user created');
  process.exit(0);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});