import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subject: { type: String },
    audienceSegment: { type: String },
    content: { type: String },
    schedule: { type: Date },
    status: {
      type: String,
      enum: ['draft', 'scheduled', 'sent'],
      default: 'draft'
    },
    stats: {
      sent: { type: Number, default: 0 },
      opened: { type: Number, default: 0 },
      clicked: { type: Number, default: 0 }
    }
  },
  { timestamps: true }
);

const Campaign = mongoose.model('Campaign', campaignSchema);

export default Campaign;

