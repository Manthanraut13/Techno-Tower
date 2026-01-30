import Project from '../models/Project.js';

export const listProjects = async (req, res) => {
  try {
    const { status, featured, search } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (featured === 'true') filter.featured = true;
    if (search) filter.title = { $regex: search, $options: 'i' };

    const projects = await Project.find(filter).sort({ createdAt: -1 });
    return res.json(projects);
  } catch (err) {
    console.error('List projects error', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getProjectBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const project = await Project.findOne({ slug });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    return res.json(project);
  } catch (err) {
    console.error('Get project error', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    return res.status(201).json(project);
  } catch (err) {
    console.error('Create project error', err);
    return res.status(400).json({ message: 'Invalid project data', details: err.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(id, req.body, { new: true });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    return res.json(project);
  } catch (err) {
    console.error('Update project error', err);
    return res.status(400).json({ message: 'Invalid project data', details: err.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    return res.json({ message: 'Project deleted' });
  } catch (err) {
    console.error('Delete project error', err);
    return res.status(400).json({ message: 'Invalid project data', details: err.message });
  }
};

