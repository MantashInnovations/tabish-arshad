"use client";

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="section relative">
            <div className="container max-w-4xl px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 uppercase tracking-widest text-center">
                    About Me
                </h2>

                <motion.div
                    className="glass-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-lg md:text-xl leading-relaxed text-secondary text-center italic mb-6">
                        "I am a Software Engineering student with a strong interest in Artificial Intelligence, Machine Learning, and Deep Learning."
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-secondary text-center">
                        I am passionate about developing intelligent solutions and conducting research to solve real-world problems.
                        With experience in Visual Studio, MATLAB, and RapidMiner, I enjoy building efficient software solutions.
                        I am self-motivated, research-oriented, and focused on growing as a technology professional while
                        contributing to impactful projects in AI and software development.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
