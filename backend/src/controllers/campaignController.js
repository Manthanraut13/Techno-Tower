import Campaign from '../models/Campaign.js';

export const listCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find().sort({ createdAt: -1 });
    return res.json(campaigns);
  } catch (err) {
    console.error('List campaigns error', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const campaign = await Campaign.findById(id);
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found' });
    }
    return res.json(campaign);
  } catch (err) {
    console.error('Get campaign error', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const createCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.create(req.body);
    return res.status(201).json(campaign);
  } catch (err) {
    console.error('Create campaign error', err);
    return res.status(400).json({ message: 'Invalid campaign data', details: err.message });
  }
};

export const updateCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const campaign = await Campaign.findByIdAndUpdate(id, req.body, { new: true });
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found' });
    }
    return res.json(campaign);
  } catch (err) {
    console.error('Update campaign error', err);
    return res.status(400).json({ message: 'Invalid campaign data', details: err.message });
  }
};

