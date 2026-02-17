"use client";

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="section py-20">
            <div className="container px-4 max-w-4xl text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-widest">
                    Get in Touch
                </h2>

                <p className="text-lg md:text-xl text-secondary mb-12 max-w-2xl mx-auto">
                    Have a project in mind or just want to chat about AI and the future of tech?
                    Drop me a message and let's craft something extraordinary.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    <motion.div
                        className="glass-card"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form className="space-y-4">
                            <div>
                                <label className="block text-[0.7rem] uppercase tracking-widest text-secondary mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Your cosmic identity"
                                />
                            </div>
                            <div>
                                <label className="block text-[0.7rem] uppercase tracking-widest text-secondary mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="how@reach.you"
                                />
                            </div>
                            <div>
                                <label className="block text-[0.7rem] uppercase tracking-widest text-secondary mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="What's on your mind?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn w-full flex items-center justify-center gap-2 group"
                            >
                                Send Transmission
                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                    <div className="flex flex-col justify-center space-y-8">
                        <div>
                            <h3 className="text-accent text-[0.7rem] uppercase tracking-[0.3em] mb-4">Direct Link</h3>
                            <a
                                href="mailto:tabish.arshad14@gmail.com"
                                className="text-2xl md:text-3xl font-bold hover:text-accent transition-colors"
                            >
                                tabish.arshad14@gmail.com
                            </a>
                        </div>

                        <div>
                            <h3 className="text-accent text-[0.7rem] uppercase tracking-[0.3em] mb-4">Social Universes</h3>
                            <div className="flex gap-6">
                                <a href="https://www.linkedin.com/in/tabish-arshad-061535281/" className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-accent hover:text-black transition-all">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://github.com/tabish-arshad" className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-accent hover:text-black transition-all">
                                    <Github size={24} />
                                </a>
                                {/* <a href="#" className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-accent hover:text-black transition-all">
                                    <Twitter size={24} />
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
