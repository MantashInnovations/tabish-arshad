"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getProjects } from '@/lib/data';
import { ArrowUpRight, Cpu, Layers } from 'lucide-react';

export default function Projects() {
    const projects = getProjects();

    return (
        <section id="projects" className="section py-32">
            <div className="container px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">
                        Mission Manifest
                    </h2>
                    <p className="text-secondary uppercase tracking-[0.4em] text-[0.6rem] font-bold">
                        Selected Work & Digital Experiments
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link href={`/projects/${project.id}`}>
                                <div className="relative glass-card p-8 h-full flex flex-col border-white/5 hover:border-accent/40 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">

                                    {/* Category Label */}
                                    <div className="flex justify-between items-start mb-10">
                                        <span className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-accent/60 group-hover:text-accent transition-colors">
                                            {project.category}
                                        </span>
                                        <div className="p-2 rounded bg-white/5 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                                            <ArrowUpRight size={16} />
                                        </div>
                                    </div>

                                    {/* Title & Description */}
                                    <div className="flex-grow space-y-4">
                                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight italic group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-secondary text-sm leading-relaxed font-light">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Footer Stats */}
                                    <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            {project.technologies.slice(0, 3).map((tech, i) => (
                                                <div key={i} className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[0.4rem] font-bold text-accent overflow-hidden">
                                                    {tech.substring(0, 2)}
                                                </div>
                                            ))}
                                        </div>
                                        <span className="text-[0.55rem] uppercase tracking-widest text-secondary font-bold">
                                            {project.duration}
                                        </span>
                                    </div>

                                    {/* Hover Overlay Light */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
