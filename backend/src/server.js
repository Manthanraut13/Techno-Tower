import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import enquiryRoutes from './routes/enquiryRoutes.js';
import dealerRoutes from './routes/dealerRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';
import tenderRoutes from './routes/tenderRoutes.js';
import campaignRoutes from './routes/campaignRoutes.js';

dotenv.config();

const app = express();

// Database
connectDB();

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true
  })
);
app.use(express.json());
app.use(morgan('dev'));

// Rate limiting for auth and public forms can be added later per-route
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50
});

app.use('/api/auth', authLimiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/dealers', dealerRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/tenders', tenderRoutes);
app.use('/api/campaigns', campaignRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Techno-Tower API listening on port ${PORT}`);
});

