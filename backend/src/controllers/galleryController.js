import GalleryItem from '../models/GalleryItem.js';

export const listGalleryItems = async (req, res) => {
  try {
    const { type, tag } = req.query;
    const filter = {};
    if (type) filter.type = type;
    if (tag) filter.tags = tag;
    const items = await GalleryItem.find(filter).sort({ order: 1, createdAt: -1 });
    return res.json(items);
  } catch (err) {
    console.error('List gallery error', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const createGalleryItem = async (req, res) => {
  try {
    const item = await GalleryItem.create(req.body);
    return res.status(201).json(item);
  } catch (err) {
    console.error('Create gallery item error', err);
    return res.status(400).json({ message: 'Invalid gallery data', details: err.message });
  }
};

export const updateGalleryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await GalleryItem.findByIdAndUpdate(id, req.body, { new: true });
    if (!item) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    return res.json(item);
  } catch (err) {
    console.error('Update gallery item error', err);
    return res.status(400).json({ message: 'Invalid gallery data', details: err.message });
  }
};

export const deleteGalleryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await GalleryItem.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    return res.json({ message: 'Gallery item deleted' });
  } catch (err) {
    console.error('Delete gallery item error', err);
    return res.status(400).json({ message: 'Invalid gallery data', details: err.message });
  }
};

