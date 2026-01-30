import mongoose from 'mongoose';

const dealerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    region: { type: String },
    contactPerson: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    companyDetails: { type: String },
    capabilities: [{ type: String }],
    applicationStatus: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
    },
    comments: { type: String }
  },
  { timestamps: true }
);

const Dealer = mongoose.model('Dealer', dealerSchema);

export default Dealer;

