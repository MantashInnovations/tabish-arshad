"use client";

import { motion } from 'framer-motion';
import { getPersonalInfo } from '@/lib/data';
import { Download, Terminal } from 'lucide-react';

export default function Hero() {
    const personalInfo = getPersonalInfo();

    return (
        <section id="hero" className="section relative flex flex-col items-center justify-center text-center py-20">
            <div className="container px-4">

                <motion.h1
                    className="text-5xl md:text-9xl font-black mb-6 uppercase tracking-tighter italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {personalInfo.name}
                </motion.h1>

                <motion.p
                    className="text-lg md:text-3xl text-secondary max-w-2xl mx-auto mb-12 font-light italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    {personalInfo.bio}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    <a href="#projects" className="btn px-10">
                        View Missions
                    </a>
                    <a
                        href={personalInfo.cvUrl}
                        download
                        className="btn px-10 border-white text-white hover:bg-white hover:text-black flex items-center gap-2"
                    >
                        <Download size={18} />
                        Download CV
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="text-[0.7rem] uppercase tracking-[0.3em] opacity-50">
                        Scroll to Explore
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
