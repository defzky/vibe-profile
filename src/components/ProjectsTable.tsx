"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        id: "01",
        name: "NEURAL_GLITCH",
        type: "Web Experience",
        year: "2025",
        link: "#",
        description: "Generative art piece using WebGL and audio reactivity.",
    },
    {
        id: "02",
        name: "BRUTAL_TYPE",
        type: "Design System",
        year: "2024",
        link: "#",
        description: "A typography-first design system for fintech.",
    },
    {
        id: "03",
        name: "ACID_GRID",
        type: "Three.js Experiment",
        year: "2025",
        link: "#",
        description: "Interactive infinite grid shader implementation.",
    },
    {
        id: "04",
        name: "CRYPLE_STOCK",
        type: "Dashboard",
        year: "2024",
        link: "#",
        description: "Real-time crypto analytics with brutalist UI.",
    },
];

export default function ProjectsTable() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    return (
        <section className="min-h-screen px-4 py-20">
            <h2 className="mb-10 font-mono text-xl text-accent pb-4 border-b border-accent/30">
                {"// SELECT WORK"}
            </h2>

            <div className="flex flex-col">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 border-b border-white/10 pb-4 font-mono text-xs uppercase text-gray-500">
                    <div className="col-span-1">ID</div>
                    <div className="col-span-5 md:col-span-4">Project Name</div>
                    <div className="col-span-0 hidden md:col-span-3 md:block">Type</div>
                    <div className="col-span-2 hidden md:col-span-2 md:block text-right">Year</div>
                    <div className="col-span-6 md:col-span-2 text-right">Link</div>
                </div>

                {/* Rows */}
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                        className="group relative grid grid-cols-12 gap-4 border-b border-white/10 py-8 transition-colors hover:bg-white/5 items-center cursor-none"
                    >
                        <div className="col-span-1 font-mono text-accent text-sm">
                            [{project.id}]
                        </div>
                        <div className="col-span-5 md:col-span-4 font-black text-2xl md:text-5xl uppercase tracking-tighter truncate group-hover:pl-4 transition-all duration-300">
                            {project.name}
                        </div>
                        <div className="col-span-0 hidden md:col-span-3 md:block font-mono text-sm uppercase text-gray-400">
                            {project.type}
                        </div>
                        <div className="col-span-2 hidden md:col-span-2 md:block text-right font-mono text-sm">
                            {project.year}
                        </div>
                        <div className="col-span-6 md:col-span-2 text-right">
                            <a href={project.link} className="inline-block px-4 py-1 border border-accent rounded-full text-accent text-xs font-bold uppercase hover:bg-accent hover:text-black transition-colors">
                                View Case
                            </a>
                        </div>

                        {/* Hover Project Description Reveal - Mobile compatible only via tap, mainly desktop visual */}
                        <AnimatePresence>
                            {hoveredProject === project.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="col-span-12 overflow-hidden"
                                >
                                    <div className="pt-2 font-mono text-xs text-accent">
                                        &gt; {project.description}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
