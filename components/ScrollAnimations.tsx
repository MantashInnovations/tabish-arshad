"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollAnimations() {
    const pathname = usePathname();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Clear existing triggers
        ScrollTrigger.getAll().forEach(t => t.kill());

        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            gsap.fromTo(section,
                { opacity: 0, y: 50 },
                {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                }
            );
        });

        // Refresh triggers after rendering
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [pathname]);

    return null;
}
