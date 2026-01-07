"use client";
import Hero from "@/components/Hero";
import ProjectsTable from "@/components/ProjectsTable";
import AboutManifesto from "@/components/AboutManifesto";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProjectsTable />
      <AboutManifesto />

      <footer className="py-10 text-center font-mono text-xs text-gray-600">
        &copy; 2026 KINETIC PROFILE SYSTEM. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
