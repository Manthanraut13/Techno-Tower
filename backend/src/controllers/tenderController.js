import Tender from '../models/Tender.js';

export const listTenders = async (req, res) => {
  try {
    const { status, region } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (region) filter.region = region;
    const tenders = await Tender.find(filter).sort({ createdAt: -1 });
    return res.json(tenders);
  } catch (err) {
    console.error('List tenders error', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getTender = async (req, res) => {
  try {
    const { id } = req.params;
    const tender = await Tender.findById(id);
    if (!tender) {
      return res.status(404).json({ message: 'Tender not found' });
    }
    return res.json(tender);
  } catch (err) {
    console.error('Get tender error', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const createTender = async (req, res) => {
  try {
    const tender = await Tender.create(req.body);
    return res.status(201).json(tender);
  } catch (err) {
    console.error('Create tender error', err);
    return res.status(400).json({ message: 'Invalid tender data', details: err.message });
  }
};

export const updateTender = async (req, res) => {
  try {
    const { id } = req.params;
    const tender = await Tender.findByIdAndUpdate(id, req.body, { new: true });
    if (!tender) {
      return res.status(404).json({ message: 'Tender not found' });
    }
    return res.json(tender);
  } catch (err) {
    console.error('Update tender error', err);
    return res.status(400).json({ message: 'Invalid tender data', details: err.message });
  }
};

export const deleteTender = async (req, res) => {
  try {
    const { id } = req.params;
    const tender = await Tender.findByIdAndDelete(id);
    if (!tender) {
      return res.status(404).json({ message: 'Tender not found' });
    }
    return res.json({ message: 'Tender deleted' });
  } catch (err) {
    console.error('Delete tender error', err);
    return res.status(400).json({ message: 'Invalid tender data', details: err.message });
  }
};

