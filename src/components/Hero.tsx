"use client";
import React from "react";
import KineticText from "./KineticText";

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col justify-center px-4 pt-32 pb-20">
            <div className="flex flex-col items-start leading-[0.8]">
                <KineticText className="text-[12vw] font-black uppercase tracking-tighter mix-blend-difference md:text-[15vw]">
                    Creative
                </KineticText>
                <div className="ml-[10vw]">
                    <KineticText className="text-[12vw] font-black uppercase tracking-tighter text-accent mix-blend-difference md:text-[15vw]">
                        Developer
                    </KineticText>
                </div>
                <KineticText className="self-end text-[12vw] font-black uppercase tracking-tighter mix-blend-difference md:text-[15vw]">
                    2026
                </KineticText>
            </div>

            <div className="mt-20 flex w-full justify-between border-t border-accent/30 pt-4 font-mono text-xs uppercase tracking-widest md:text-sm">
                <span>Based in Jakarta</span>
                <span>Scroll to Explore</span>
                <span>Available for Hire</span>
            </div>
        </section>
    );
}
