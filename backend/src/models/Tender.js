import mongoose from 'mongoose';

const tenderSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    referenceNumber: { type: String, index: true },
    description: { type: String },
    status: { type: String, enum: ['upcoming', 'open', 'closed'], default: 'upcoming' },
    submissionDeadline: { type: Date },
    region: { type: String },
    associatedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    documents: [{ label: String, url: String }]
  },
  { timestamps: true }
);

const Tender = mongoose.model('Tender', tenderSchema);

export default Tender;

