import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    client: { type: String },
    location: { type: String },
    description: { type: String },
    status: { type: String, enum: ['planned', 'ongoing', 'completed'], default: 'planned' },
    startDate: { type: Date },
    endDate: { type: Date },
    featured: { type: Boolean, default: false },
    images: [{ type: String }],
    tags: [{ type: String }]
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);

export default Project;

