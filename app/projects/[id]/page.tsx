"use client";

import { use } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getProjectById } from '@/lib/data';
import { ArrowLeft, ExternalLink, Github, Code2, Cpu, Globe, User, Clock, Target, Layers } from 'lucide-react';
import { notFound } from 'next/navigation';

export default function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const project = getProjectById(id);

    if (!project) notFound();

    return (
        <main className="relative z-10 min-h-screen py-24 md:py-32">
            <div className="container px-4 max-w-6xl">

                {/* Navigation */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors mb-12 md:mb-20 uppercase tracking-[0.3em] font-bold text-[0.65rem] group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Universe
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <div className="flex flex-col gap-8 md:gap-12 mb-20 md:mb-32">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-accent text-[0.7rem] uppercase tracking-[0.4em] font-black border-l-2 border-accent pl-4 mb-6 block">
                            {project.category}
                        </span>
                        <h1 className="text-5xl md:text-9xl font-black mb-8 uppercase tracking-tighter leading-none italic">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-3xl text-secondary max-w-4xl font-light italic leading-relaxed">
                            {project.description}
                        </p>
                    </motion.div>
                </div>

                {/* Technical Breakdown & Project Info */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 mb-32">

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-16"
                    >
                        <section>
                            <h2 className="text-sm uppercase tracking-[0.5em] text-accent mb-10 flex items-center gap-4">
                                <Code2 size={16} /> Technical Blueprint
                            </h2>
                            <div className="text-secondary text-lg leading-loose space-y-6">
                                {project.content.split('\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-sm uppercase tracking-[0.5em] text-accent mb-10 flex items-center gap-4">
                                <Cpu size={16} /> Advanced Systems
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, i) => (
                                    <div key={i} className="glass-card p-4 border-white/5 flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
                                        <span className="text-secondary text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </motion.div>

                    {/* Sidebar Info */}
                    <motion.aside
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="glass-card border-accent/10 p-8 space-y-8">
                            <div className="space-y-6">
                                <InfoItem icon={<User size={16} />} label="Operational Role" value={project.role} />
                                <Divider />
                                <InfoItem icon={<Target size={16} />} label="Mission Client" value={project.client} />
                                <Divider />
                                <InfoItem icon={<Clock size={16} />} label="Time Sequence" value={project.duration} />
                            </div>

                            <div className="pt-8 space-y-4">
                                <h3 className="text-[0.6rem] uppercase tracking-widest text-accent font-black mb-6">Neural Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[0.6rem] uppercase tracking-widest font-bold">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 flex flex-col gap-4">
                                <a href={project.links.view} target="_blank" className="btn w-full text-center flex items-center justify-center gap-2">
                                    <Globe size={16} /> Live Access
                                </a>
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" className="btn border-white/20 text-white w-full text-center flex items-center justify-center gap-2 hover:bg-white hover:text-black">
                                        <Github size={16} /> Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.aside>

                </div>

            </div>
        </main>
    );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="space-y-2">
            <div className="flex items-center gap-2 text-accent/60">
                {icon} <span className="text-[0.6rem] uppercase tracking-[0.2em] font-black">{label}</span>
            </div>
            <p className="text-lg font-bold uppercase tracking-tight italic">{value}</p>
        </div>
    );
}

function Divider() {
    return <div className="h-px bg-white/5 w-full" />;
}
