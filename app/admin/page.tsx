"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjects, getPersonalInfo, Project, PersonalInfo } from '@/lib/data';
import { Save, Plus, Trash2, LogOut, ChevronRight, LayoutGrid, List, Image as ImageIcon, Link as LinkIcon, Database, Info, User as UserIcon, FileText } from 'lucide-react';

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [projects, setProjects] = useState<Project[]>(getProjects());
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(getPersonalInfo());
    const [editingId, setEditingId] = useState<string | null>(null);
    const [showPersonalInfo, setShowPersonalInfo] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'Mabish@155') setIsLoggedIn(true);
        else alert('Unauthorized access attempt');
    };

    const handleSave = async () => {
        try {
            const response = await fetch('/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ projects, personalInfo }),
            });
            if (response.ok) alert('Universe Synchronized.');
            else alert('Transmission failed.');
        } catch (error) {
            console.error(error);
            alert('Critical system error.');
        }
    };

    const updateProject = (id: string, updates: Partial<Project>) => {
        setProjects(projects.map(p => p.id === id ? { ...p, ...updates } : p));
    };

    const handleAddProject = () => {
        const newProject: Project = {
            id: `proj-${Date.now()}`,
            title: 'New Mission',
            description: 'Quick summary',
            content: 'Detailed mission technicals...',
            technologies: [],
            features: [],
            screenshots: [],
            links: { view: '#', github: '#', design: '#' },
            role: 'Developer',
            duration: 'Ongoing',
            client: 'Confidential',
            category: 'Software Engineering'
        };
        setProjects([...projects, newProject]);
        setEditingId(newProject.id);
    };

    const handleDelete = (id: string) => {
        if (confirm('Decommission mission?')) {
            const updated = projects.filter(p => p.id !== id);
            setProjects(updated);
            fetch('/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ projects: updated }),
            });
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center relative z-10 px-4">
                <motion.div className="glass-card w-full max-w-md p-10 border-accent/20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-3xl font-black mb-8 uppercase tracking-widest text-center italic text-accent">Command Center</h1>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded p-4 text-white focus:border-accent outline-none"
                            placeholder="ACCESS KEY"
                        />
                        <button type="submit" className="btn w-full font-bold">Initiate Access</button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-20 relative z-10">
            <div className="container px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">Fleet Management</h1>
                        <p className="text-secondary text-sm uppercase tracking-widest mt-2">{projects.length} Active Missions Found</p>
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <button onClick={handleAddProject} className="btn py-2 px-6 flex items-center gap-2 flex-grow md:flex-grow-0"><Plus size={18} /> New</button>
                        <button onClick={handleSave} className="btn py-2 px-6 bg-accent text-black border-accent flex items-center gap-2 flex-grow md:flex-grow-0"><Save size={18} /> Sync</button>
                        <button onClick={() => setIsLoggedIn(false)} className="px-3 border border-white/10 rounded hover:bg-white/5 transition-colors"><LogOut size={18} /></button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-12">
                    <div className={`glass-card p-0 overflow-hidden border-white/5 transition-all duration-300 ${showPersonalInfo ? 'border-accent/40' : ''}`}>
                        <div
                            className="p-6 flex items-center justify-between cursor-pointer hover:bg-white/[0.02]"
                            onClick={() => setShowPersonalInfo(!showPersonalInfo)}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-2 rounded border border-white/10 ${showPersonalInfo ? 'border-accent text-accent' : 'text-secondary'}`}>
                                    <UserIcon size={20} />
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-tight text-white">Identity Core</h3>
                            </div>
                            <ChevronRight size={18} className={`transition-transform duration-300 ${showPersonalInfo ? 'rotate-90 text-accent' : 'text-secondary'}`} />
                        </div>

                        <AnimatePresence>
                            {showPersonalInfo && (
                                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden bg-white/[0.01]">
                                    <div className="p-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputField label="Name" value={personalInfo.name} onChange={(v) => setPersonalInfo({ ...personalInfo, name: v })} />
                                        <InputField label="Role" value={personalInfo.role} onChange={(v) => setPersonalInfo({ ...personalInfo, role: v })} />
                                        <InputField label="Email" value={personalInfo.email} onChange={(v) => setPersonalInfo({ ...personalInfo, email: v })} />
                                        <InputField label="CV URL (PDF)" value={personalInfo.cvUrl} onChange={(v) => setPersonalInfo({ ...personalInfo, cvUrl: v })} />
                                        <InputField label="GitHub" value={personalInfo.socials.github} onChange={(v) => setPersonalInfo({ ...personalInfo, socials: { ...personalInfo.socials, github: v } })} />
                                        <InputField label="LinkedIn" value={personalInfo.socials.linkedin} onChange={(v) => setPersonalInfo({ ...personalInfo, socials: { ...personalInfo.socials, linkedin: v } })} />
                                        <div className="md:col-span-2">
                                            <TextareaField label="Bio" value={personalInfo.bio} onChange={(v) => setPersonalInfo({ ...personalInfo, bio: v })} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {projects.map(project => (
                        <div key={project.id} className={`glass-card p-0 overflow-hidden border-white/5 transition-all duration-300 ${editingId === project.id ? 'border-accent/40 shadow-[0_0_30px_rgba(0,255,255,0.05)]' : ''}`}>
                            <div
                                className="p-6 flex items-center justify-between cursor-pointer hover:bg-white/[0.02]"
                                onClick={() => setEditingId(editingId === project.id ? null : project.id)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded border border-white/10 ${editingId === project.id ? 'border-accent text-accent' : 'text-secondary'}`}>
                                        <LayoutGrid size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold uppercase tracking-tight">{project.title}</h3>
                                        <div className="flex gap-3 mt-1">
                                            <span className="text-[0.6rem] uppercase tracking-widest text-secondary">{project.category}</span>
                                            <span className="text-[0.6rem] uppercase tracking-widest text-accent/60">{project.duration}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button onClick={(e) => { e.stopPropagation(); handleDelete(project.id); }} className="p-2 text-red-500/50 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                                    <ChevronRight size={18} className={`transition-transform duration-300 ${editingId === project.id ? 'rotate-90 text-accent' : 'text-secondary'}`} />
                                </div>
                            </div>

                            <AnimatePresence>
                                {editingId === project.id && (
                                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden bg-white/[0.01]">
                                        <div className="p-8 border-t border-white/5 space-y-10">

                                            {/* Section 1: Basic Info */}
                                            <div className="space-y-6">
                                                <div className="flex items-center gap-2 text-accent border-b border-accent/10 pb-2">
                                                    <Info size={16} /> <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em]">Basic Intel</span>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                    <InputField label="Title" value={project.title} onChange={(v) => updateProject(project.id, { title: v })} />
                                                    <InputField label="ID" value={project.id} onChange={(v) => updateProject(project.id, { id: v })} />
                                                    <InputField label="Category" value={project.category} onChange={(v) => updateProject(project.id, { category: v })} />
                                                    <InputField label="Client" value={project.client} onChange={(v) => updateProject(project.id, { client: v })} />
                                                    <InputField label="Role" value={project.role} onChange={(v) => updateProject(project.id, { role: v })} />
                                                    <InputField label="Duration" value={project.duration} onChange={(v) => updateProject(project.id, { duration: v })} />
                                                </div>
                                                <TextareaField label="Brief Description" value={project.description} onChange={(v) => updateProject(project.id, { description: v })} />
                                                <TextareaField label="Technical Details (Content)" rows={6} value={project.content} onChange={(v) => updateProject(project.id, { content: v })} />
                                            </div>

                                            {/* Section 2: Technicals */}
                                            <div className="space-y-6">
                                                <div className="flex items-center gap-2 text-accent border-b border-accent/10 pb-2">
                                                    <Database size={16} /> <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em]">Technicals & Features</span>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <ListEditField label="Stack" values={project.technologies} onChange={(v) => updateProject(project.id, { technologies: v })} placeholder="Add Technology..." />
                                                    <ListEditField label="Features" values={project.features} onChange={(v) => updateProject(project.id, { features: v })} placeholder="Add Feature..." />
                                                </div>
                                            </div>

                                            {/* Section 3: Media & Links */}
                                            <div className="space-y-6">
                                                <div className="flex items-center gap-2 text-accent border-b border-accent/10 pb-2">
                                                    <LinkIcon size={16} /> <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em]">Neural Links</span>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                    <InputField label="Live URL" value={project.links.view} onChange={(v) => updateProject(project.id, { links: { ...project.links, view: v } })} />
                                                    <InputField label="Source URL" value={project.links.github || ''} onChange={(v) => updateProject(project.id, { links: { ...project.links, github: v } })} />
                                                    <InputField label="Design URL" value={project.links.design || ''} onChange={(v) => updateProject(project.id, { links: { ...project.links, design: v } })} />
                                                </div>
                                            </div>

                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function InputField({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) {
    return (
        <div>
            <label className="block text-[0.6rem] uppercase tracking-widest text-secondary mb-2 ml-1">{label}</label>
            <input
                className="w-full bg-white/5 border border-white/10 rounded p-3 text-sm text-white focus:border-accent outline-none transition-colors"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

function TextareaField({ label, value, onChange, rows = 3 }: { label: string, value: string, onChange: (v: string) => void, rows?: number }) {
    return (
        <div>
            <label className="block text-[0.6rem] uppercase tracking-widest text-secondary mb-2 ml-1">{label}</label>
            <textarea
                rows={rows}
                className="w-full bg-white/5 border border-white/10 rounded p-4 text-sm text-white focus:border-accent outline-none transition-colors resize-none"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

function ListEditField({ label, values, onChange, placeholder }: { label: string, values: string[], onChange: (v: string[]) => void, placeholder: string }) {
    const [input, setInput] = useState('');
    const addItem = () => {
        if (input.trim()) {
            onChange([...values, input.trim()]);
            setInput('');
        }
    };
    return (
        <div>
            <label className="block text-[0.6rem] uppercase tracking-widest text-secondary mb-3 ml-1">{label}</label>
            <div className="flex flex-wrap gap-2 mb-3 min-h-[40px] p-2 bg-white/[0.02] border border-dashed border-white/10 rounded">
                {values.map((v, i) => (
                    <span key={i} className="flex items-center gap-2 text-[0.65rem] px-3 py-1 bg-accent/10 border border-accent/20 text-accent rounded uppercase font-medium">
                        {v} <Trash2 size={12} className="cursor-pointer hover:text-red-500" onClick={() => onChange(values.filter((_, idx) => idx !== i))} />
                    </span>
                ))}
            </div>
            <div className="flex gap-2">
                <input
                    className="flex-grow bg-white/5 border border-white/10 rounded p-2 text-xs focus:border-accent underline-none"
                    placeholder={placeholder}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addItem()}
                />
                <button onClick={addItem} className="p-2 border border-accent text-accent rounded hover:bg-accent hover:text-black transition-all"><Plus size={16} /></button>
            </div>
        </div>
    );
}
