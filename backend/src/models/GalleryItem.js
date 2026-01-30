import mongoose from 'mongoose';

const galleryItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, enum: ['project', 'product', 'event', 'other'], default: 'other' },
    imageUrl: { type: String, required: true },
    description: { type: String },
    associatedEntityType: { type: String },
    associatedEntityId: { type: mongoose.Schema.Types.ObjectId },
    tags: [{ type: String }],
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const GalleryItem = mongoose.model('GalleryItem', galleryItemSchema);

export default GalleryItem;

