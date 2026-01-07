"use client";
import React from "react";
import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
} from "framer-motion";

interface KineticTextProps {
    children: React.ReactNode;
    className?: string;
    baseVelocity?: number;
}

export default function KineticText({ children, className = "" }: KineticTextProps) {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });

    // Map velocity to skew. 
    // Fast scroll = high skew.
    const skewX = useTransform(smoothVelocity, [-1000, 1000], [-30, 30]);
    const skewXClamped = useTransform(skewX, (value) => {
        // Clamp value to reasonable limits
        if (value > 45) return 45;
        if (value < -45) return -45;
        return value;
    });

    return (
        <div className={`kinetic-text-container overflow-hidden ${className}`}>
            <motion.p
                style={{ skewX: skewXClamped }}
                className="will-change-transform inline-block origin-bottom-left"
            >
                {children}
            </motion.p>
        </div>
    );
}
