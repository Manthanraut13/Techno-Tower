import Enquiry from '../models/Enquiry.js';

export const createEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.create(req.body);
    return res.status(201).json(enquiry);
  } catch (err) {
    console.error('Create enquiry error', err);
    return res.status(400).json({ message: 'Invalid enquiry data', details: err.message });
  }
};

export const listEnquiries = async (req, res) => {
  try {
    const { status, type } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (type) filter.enquiryType = type;
    const enquiries = await Enquiry.find(filter).sort({ createdAt: -1 });
    return res.json(enquiries);
  } catch (err) {
    console.error('List enquiries error', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getEnquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const enquiry = await Enquiry.findById(id);
    if (!enquiry) {
      return res.status(404).json({ message: 'Enquiry not found' });
    }
    return res.json(enquiry);
  } catch (err) {
    console.error('Get enquiry error', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const updateEnquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const enquiry = await Enquiry.findByIdAndUpdate(id, req.body, { new: true });
    if (!enquiry) {
      return res.status(404).json({ message: 'Enquiry not found' });
    }
    return res.json(enquiry);
  } catch (err) {
    console.error('Update enquiry error', err);
    return res.status(400).json({ message: 'Invalid enquiry data', details: err.message });
  }
};

