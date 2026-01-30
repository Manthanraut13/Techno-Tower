import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    category: { type: String },
    shortDescription: { type: String },
    description: { type: String },
    specs: { type: Object },
    images: [{ type: String }],
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    featured: { type: Boolean, default: false },
    applicationAreas: [{ type: String }],
    downloads: [{ label: String, url: String }]
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;

