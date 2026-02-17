"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Basic Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: false, // Disabled for performance
            alpha: true,
            powerPreference: "high-performance"
        });

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);

        // Optimized Starfield
        const starsCount = 1000; // Reduced from 2000
        const starsGeometry = new THREE.BufferGeometry();
        const posArray = new Float32Array(starsCount * 3);

        for (let i = 0; i < starsCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 100;
        }

        starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const starsMaterial = new THREE.PointsMaterial({
            size: 0.12,
            color: 0xffffff,
            transparent: true,
            opacity: 0.6,
            depthWrite: false // Optimization for transparent objects
        });

        const starMesh = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(starMesh);

        scene.background = new THREE.Color(0x050505);

        let scrollY = 0;
        let targetScrollY = 0;
        const scrollSpeed = 0.08;
        let frameId: number;

        const handleScroll = () => {
            targetScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize, { passive: true });

        // Optimized Animation Loop
        const animate = () => {
            frameId = requestAnimationFrame(animate);

            scrollY += (targetScrollY - scrollY) * scrollSpeed;

            // Camera movement
            camera.position.z = 30 + (scrollY * -0.04);
            camera.position.x = scrollY * -0.0001;
            camera.rotation.y = scrollY * -0.0001;

            // Subtle rotation
            starMesh.rotation.y += 0.0003;
            starMesh.rotation.x += 0.0001;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);

            // Comprehensive cleanup
            starsGeometry.dispose();
            starsMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="bg-canvas"
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    );
}
