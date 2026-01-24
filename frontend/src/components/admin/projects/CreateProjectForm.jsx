
import { Info, MapPin, Upload } from 'lucide-react';

const CreateProjectForm = () => {
    return (
        <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm sticky top-28">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <h3 className="font-bold text-lg text-text-main dark:text-white">New Project Details</h3>
                <Info size={20} className="text-gray-400 cursor-help" title="Fill all required fields" />
            </div>
            <div className="p-6 space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-text-main dark:text-gray-300 mb-1.5" htmlFor="project-title">Project Title <span className="text-red-500">*</span></label>
                    <input className="w-full rounded-lg border-gray-200 bg-gray-50/50 dark:bg-black/20 dark:border-gray-700 text-sm focus:border-primary focus:ring-primary" id="project-title" placeholder="e.g. NH-44 Smart Highway Lighting" type="text" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-text-main dark:text-gray-300 mb-1.5" htmlFor="location">Location</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MapPin size={18} className="text-gray-400" />
                            </span>
                            <input className="w-full pl-9 rounded-lg border-gray-200 bg-gray-50/50 dark:bg-black/20 dark:border-gray-700 text-sm focus:border-primary focus:ring-primary" id="location" placeholder="City, State" type="text" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-text-main dark:text-gray-300 mb-1.5" htmlFor="category">Category</label>
                        <select className="w-full rounded-lg border-gray-200 bg-gray-50/50 dark:bg-black/20 dark:border-gray-700 text-sm focus:border-primary focus:ring-primary" id="category">
                            <option>Highway</option>
                            <option>Stadium</option>
                            <option>Smart City</option>
                            <option>Industrial</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-text-main dark:text-gray-300 mb-1.5" htmlFor="description">Description</label>
                    <textarea className="w-full rounded-lg border-gray-200 bg-gray-50/50 dark:bg-black/20 dark:border-gray-700 text-sm focus:border-primary focus:ring-primary resize-none" id="description" placeholder="Brief details about the project scope..." rows="3"></textarea>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-text-main dark:text-gray-300 mb-1.5">Project Cover Image</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer dark:bg-black/20 dark:border-gray-600 dark:hover:border-gray-500">
                        <div className="space-y-1 text-center">
                            <div className="flex justify-center">
                                <Upload size={40} className="text-gray-400" />
                            </div>
                            <div className="flex text-sm text-gray-600 dark:text-gray-400 justify-center">
                                <label className="relative cursor-pointer bg-white dark:bg-transparent rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary" htmlFor="file-upload">
                                    <span>Upload a file</span>
                                    <input className="sr-only" id="file-upload" name="file-upload" type="file" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between bg-gray-50/50 dark:bg-black/20 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                    <div>
                        <span className="text-sm font-semibold text-text-main block dark:text-gray-200">Public Visibility</span>
                        <span className="text-xs text-text-muted dark:text-gray-500">Show on website projects page</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                </div>
                <div className="pt-4 flex gap-3">
                    <button className="flex-1 py-2.5 px-4 bg-primary hover:bg-primary-dark text-text-main font-bold rounded-lg shadow-md transition-all">Save Project</button>
                    <button className="flex-1 py-2.5 px-4 bg-white border border-gray-200 hover:bg-gray-50 text-text-muted font-semibold rounded-lg transition-all dark:bg-transparent dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default CreateProjectForm;
