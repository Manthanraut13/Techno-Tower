import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    user.lastLogin = new Date();
    await user.save();

    const payload = { id: user._id, email: user.email, role: user.role, name: user.name };
    const secret = process.env.JWT_SECRET || 'dev_secret_change_me';
    const token = jwt.sign(payload, secret, { expiresIn: '8h' });

    return res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });
  } catch (err) {
    console.error('Login error', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const me = async (req, res) => {
  // Simple endpoint to return current user based on JWT
  return res.json({ user: req.user });
};

export const forgotPassword = async (req, res) => {
  // Stub implementation for now
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }
  console.log('Password reset requested for:', email);
  return res.json({ message: 'If this email exists, a reset link will be sent.' });
};

