import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    company: { type: String },
    subject: { type: String },
    message: { type: String, required: true },
    enquiryType: {
      type: String,
      enum: ['product', 'tender', 'dealer', 'general'],
      default: 'general'
    },
    status: {
      type: String,
      enum: ['new', 'in-progress', 'closed'],
      default: 'new'
    },
    sourcePage: { type: String },
    notes: { type: String }
  },
  { timestamps: true }
);

const Enquiry = mongoose.model('Enquiry', enquirySchema);

export default Enquiry;

