import Dealer from '../models/Dealer.js';

export const createDealerApplication = async (req, res) => {
  try {
    const dealer = await Dealer.create(req.body);
    return res.status(201).json(dealer);
  } catch (err) {
    console.error('Create dealer application error', err);
    return res.status(400).json({ message: 'Invalid dealer data', details: err.message });
  }
};

export const listDealerApplications = async (req, res) => {
  try {
    const { status, region } = req.query;
    const filter = {};
    if (status) filter.applicationStatus = status;
    if (region) filter.region = region;
    const dealers = await Dealer.find(filter).sort({ createdAt: -1 });
    return res.json(dealers);
  } catch (err) {
    console.error('List dealers error', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const updateDealerApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const dealer = await Dealer.findByIdAndUpdate(id, req.body, { new: true });
    if (!dealer) {
      return res.status(404).json({ message: 'Dealer application not found' });
    }
    return res.json(dealer);
  } catch (err) {
    console.error('Update dealer error', err);
    return res.status(400).json({ message: 'Invalid dealer data', details: err.message });
  }
};

