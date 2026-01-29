import React, { useState, useEffect } from 'react';
import { Info, MapPin, Upload, Camera, Save, X, Layers } from 'lucide-react';

const CreateProjectForm = ({ editingProject, onCancel }) => {
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        category: 'Highway',
        description: '',
        visibility: true
    });

    useEffect(() => {
        if (editingProject) {
            setFormData({
                title: editingProject.title || '',
                location: editingProject.location || '',
                category: editingProject.category || 'Highway',
                description: editingProject.description || '',
                visibility: editingProject.status === 'Published'
            });
        } else {
            setFormData({
                title: '',
                location: '',
                category: 'Highway',
                description: '',
                visibility: true
            });
        }
    }, [editingProject]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Project data:', formData);
        // Implement save logic here
    };

    return (
        <div className="bg-white dark:bg-[#2d2418] rounded-2xl border border-gray-100 dark:border-[#3e3223] shadow-sm sticky top-28 overflow-hidden transition-all duration-300">
            <div className="p-6 border-b border-gray-50 dark:border-[#3e3223] flex justify-between items-center bg-gray-50/30 dark:bg-white/5">
                <h3 className="font-black text-sm text-text-main dark:text-white flex items-center gap-2 uppercase tracking-widest">
                    <Layers className="text-primary" size={20} />
                    {editingProject ? 'Modify Instance' : 'Project Definition'}
                </h3>
                {editingProject && (
                    <button onClick={onCancel} className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                        <X size={18} />
                    </button>
                )}
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div>
                    <label className="block text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest mb-2">Project Designation</label>
                    <input
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1c160d] border border-gray-200 dark:border-[#3e3223] rounded-xl text-sm font-bold text-text-main dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                        placeholder="e.g. NH-44 Smart Lighting Alpha"
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest mb-2">Deployment Zone</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <MapPin size={16} />
                            </span>
                            <input
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#1c160d] border border-gray-200 dark:border-[#3e3223] rounded-xl text-sm font-bold text-text-main dark:text-white focus:border-primary transition-all outline-none"
                                placeholder="Region Code"
                                type="text"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest mb-2">Operational Sector</label>
                        <select
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1c160d] border border-gray-200 dark:border-[#3e3223] rounded-xl text-sm font-bold text-text-main dark:text-white focus:border-primary transition-all outline-none appearance-none"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        >
                            <option>Highway</option>
                            <option>Stadium</option>
                            <option>Smart City</option>
                            <option>Industrial</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest mb-2">Technical Overview</label>
                    <textarea
                        className="w-full p-4 bg-gray-50 dark:bg-[#1c160d] border border-gray-200 dark:border-[#3e3223] rounded-xl text-sm font-medium text-text-main dark:text-white focus:border-primary transition-all outline-none resize-none"
                        placeholder="Define system parameters and installation scope..."
                        rows="4"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    ></textarea>
                </div>

                <div>
                    <label className="block text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest mb-2">Visual Documentation</label>
                    <div className="group border-2 border-dashed border-gray-200 dark:border-[#3e3223] rounded-2xl p-6 transition-all hover:border-primary/50 hover:bg-primary/5 cursor-pointer text-center">
                        <Camera size={32} className="mx-auto text-gray-400 group-hover:text-primary transition-colors mb-2" />
                        <span className="text-xs font-black text-text-main dark:text-white uppercase tracking-tighter">Sync Archive Photo</span>
                    </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-[#3e3223]">
                    <span className="text-[10px] font-black text-text-muted dark:text-gray-400 uppercase tracking-widest">Public Broadcast Status</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            className="sr-only peer"
                            type="checkbox"
                            checked={formData.visibility}
                            onChange={(e) => setFormData({ ...formData, visibility: e.target.checked })}
                        />
                        <div className="w-10 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                </div>

                <div className="pt-4 flex gap-4">
                    <button type="submit" className="flex-1 py-4 bg-primary text-text-main font-black uppercase tracking-widest text-[10px] rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                        <Save size={16} />
                        {editingProject ? 'Sync Database' : 'Execute Deploy'}
                    </button>
                    {editingProject && (
                        <button
                            type="button"
                            onClick={onCancel}
                            className="flex-1 py-4 bg-white dark:bg-transparent border border-gray-200 dark:border-[#3e3223] text-text-muted font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                        >
                            Abort
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CreateProjectForm;
