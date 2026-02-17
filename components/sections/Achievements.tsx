"use client";

import { motion } from 'framer-motion';
import { getAchievements } from '@/lib/data';
import { Award, ExternalLink } from 'lucide-react';

export default function Achievements() {
    const achievements = getAchievements();

    return (
        <section id="achievements" className="section py-20">
            <div className="container px-4 max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 uppercase tracking-widest text-center">
                    Achievements & Certifications
                </h2>

                <div className="space-y-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            className="glass-card flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 hover:border-accent transition-all duration-300 group"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-4xl md:text-5xl text-accent/80 group-hover:scale-110 transition-transform duration-300">
                                {achievement.icon}
                            </div>

                            <div className="flex-grow text-center md:text-left">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                    {achievement.title}
                                </h3>
                                <p className="text-secondary text-base">
                                    {achievement.provider} • <span className="text-accent/60">{achievement.date}</span>
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                {achievement.badge && (
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 p-2">
                                        <img src={achievement.badge} alt="Badge" className="max-w-full h-auto" />
                                    </div>
                                )}
                                {achievement.shareUrl && (
                                    <a
                                        href={achievement.shareUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/5 rounded-full border border-white/10 hover:bg-accent hover:text-black transition-all"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
