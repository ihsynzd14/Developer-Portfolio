"use client";

import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FaLocationArrow, FaPlane } from "react-icons/fa6";
import { useParams } from "next/navigation";
import {
  FaClock,
  FaLightbulb,
  FaShieldAlt,
  FaSync,
  FaMobile,
  FaServer,
  FaBroadcastTower,
  FaPlaneArrival,
} from "react-icons/fa";

import { projects } from "@/data";
import MagicButton from "@/components/MagicButton";

// Helper function to capitalize tech names
const capitalizeTechName = (name: string) => {
  const specialCases: { [key: string]: string } = {
    'ts': 'TypeScript',
    'js': 'JavaScript',
    'nodejs': 'Node.js',
    'nextjs': 'Next.js',
    'vuejs': 'Vue.js',
    'postgresql': 'PostgreSQL',
    'mongodb': 'MongoDB',
    'mysql': 'MySQL',
    'api': 'API',
    're': 'React',
    'fastapi': 'FastAPI',
  };

  const techName = name.split('/').pop()?.split('.')[0] || '';
  return specialCases[techName.toLowerCase()] || techName.charAt(0).toUpperCase() + techName.slice(1);
};

const featureIcons: { [key: string]: any } = {
  "Responsive and intuitive user interface": FaMobile,
  "Real-time data synchronization": FaSync,
  "Advanced security measures": FaShieldAlt,
  "Scalable architecture": FaServer,
};

export default function ProjectPage() {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const background = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.1), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  useEffect(() => {
    const projectData = projects.find((p) => p.id === Number(id));
    setProject(projectData);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black-100">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full border-t-2 border-purple animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-r-2 border-purple animate-spin-slow"></div>
          <div className="absolute inset-4 rounded-full border-b-2 border-purple animate-spin-slower"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-black-100">
        <div className="relative">
          <h1 className="text-6xl font-bold text-white/5">404</h1>
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
            Project not found
          </p>
        </div>
        <MagicButton
          title="Back to Projects"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={() => window.history.back()}
        />
      </div>
    );
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-clip">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        {/* Hero Section */}
        <div className="relative mb-12 md:mb-24">
          {/* Project Title & Quick Info */}
          <div className="flex flex-col gap-8 mb-8">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple/10 border border-purple/20 text-purple mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple"></span>
                </span>
                <span className="text-sm font-medium">Project Showcase</span>
              </div>
              
             <div className="flex items-center justify-between gap-4 mb-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white relative">
                  <span className="relative">
                    {project.title}
                    <div className="absolute -top-2 -right-4 w-8 h-8 bg-purple/20 rounded-full blur-lg" />
                  </span>
                </h1>

                <div className="flex items-center gap-3 bg-black-200/50 px-4 py-2 rounded-full border border-purple/20 backdrop-blur-sm hover:border-purple/40 transition-colors">
                  <div className="flex -space-x-3">
                    {project.iconLists.slice(0, 3).map((icon: string, index: number) => (
                      <div 
                        key={index}
                        className="w-7 h-7 rounded-full bg-black-200/80 border border-purple/20 p-1.5 flex items-center justify-center relative hover:scale-110 transition-transform"
                        style={{ zIndex: 3 - index }}
                      >
                        <img src={icon} alt={`tech-${index}`} className="w-full h-full" />
                      </div>
                    ))}
                    {project.iconLists.length > 3 && (
                      <div 
                        className="w-7 h-7 rounded-full bg-black-200/80 border border-purple/20 flex items-center justify-center text-xs font-medium text-white/90 hover:scale-110 transition-transform"
                        style={{ zIndex: 0 }}
                      >
                        +{project.iconLists.length - 3}
                      </div>
                    )}
                  </div>
                  <span className="text-white/80 text-sm font-medium pl-2 border-l border-purple/20">
                    {project.iconLists.length} Technologies
                  </span>
                </div>
              </div>

              <p className="text-lg md:text-xl text-white/80 max-w-3xl relative">
                {project.des}
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple/5 rounded-full blur-xl" />
              </p>
            </div>
          </div>

          {/* Project Image with Overlay */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group h-[50vh] md:h-[70vh] border border-purple/20">
            <div className="absolute inset-0 bg-gradient-to-b from-black-100 via-transparent to-black-100/80 z-10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:2rem_2rem] z-20 opacity-30" />
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-1000 ease-out"
            />
            <div className="absolute bottom-6 right-6 z-30 flex items-center gap-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" 
                className="group/btn relative px-6 py-3 rounded-xl bg-black-200/40 backdrop-blur-sm border border-purple/20 hover:border-purple/40 transition-all duration-500 ease-out overflow-hidden"
              >
                <div className="absolute inset-0 translate-y-[101%] bg-purple/20 group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
                <div className="relative flex items-center gap-3 text-white/90 group-hover/btn:text-white transition-colors duration-500">
                  <span className="text-sm font-medium">Explore</span>
                  <div className="w-6 h-6 rounded-full bg-purple/20 flex items-center justify-center group-hover/btn:bg-purple/30 transition-colors duration-500">
                    <FaPlane className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-500" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-12 md:mb-24">
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-1 bg-purple rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">Project Overview</h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div 
                  onMouseMove={handleMouseMove}
                  className="relative p-8 rounded-2xl bg-black-200/40 border border-purple/20 backdrop-blur-sm group overflow-hidden"
                >
                  <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background }}
                  />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple/40 to-transparent" />
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-purple/20 rounded-full blur-lg group-hover:bg-purple/30 transition-colors duration-500" />
                  <p className="text-base md:text-lg text-white/80 leading-relaxed relative">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="p-8 rounded-2xl bg-black-200/40 border border-purple/20 backdrop-blur-sm group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-8 w-1 bg-purple rounded-full" />
                    <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
                    {project.iconLists.map((icon: string, index: number) => (
                      <div
                        key={index}
                        className="group/tech flex items-center gap-3 p-3 rounded-xl bg-black-100/50 border border-purple/20 hover:border-purple/40 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]"
                      >
                        <div className="w-8 h-8 rounded-lg bg-black-200/80 p-1.5 flex items-center justify-center group-hover/tech:bg-purple/10 transition-colors duration-500">
                          <img src={icon} alt={`tech-${index}`} className="w-full h-full group-hover/tech:scale-110 transition-transform duration-500" />
                        </div>
                        <span className="text-sm font-medium text-white/90 group-hover/tech:text-white transition-colors duration-500">
                          {capitalizeTechName(icon)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-24">
          {/* Features */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-1 bg-purple rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">Key Features</h2>
            </div>
            <div className="space-y-4">
              {project.features.map((feature: any, index: number) => {
                const IconComponent = featureIcons[feature.title] || FaLightbulb;
                return (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-black-200/40 border border-purple/20 backdrop-blur-sm hover:border-purple/40 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] overflow-hidden"
                  >
                    <div className="absolute inset-0 translate-x-[-101%] bg-purple/5 group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                    <div className="relative flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-black-100/50 group-hover:bg-purple/10 transition-colors duration-500">
                        <IconComponent className="w-6 h-6 text-purple group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl font-semibold mb-2 text-white group-hover:text-purple transition-colors duration-500">
                          {feature.title}
                        </h4>
                        <p className="text-base text-white/80 group-hover:text-white/90 transition-colors duration-500">
                          {feature.details}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Timeline */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-1 bg-purple rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">Development Journey</h2>
            </div>
            <div className="relative space-y-4">
              <div className="absolute left-[1.3rem] top-[3.3rem] bottom-10 w-px bg-gradient-to-b from-purple via-purple/50 to-transparent" />
              {project.timeline.map((phase: any, index: number) => (
                <div
                  key={index}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-3 w-[10px] h-[10px] rounded-full bg-purple" />
                  <div className="group p-6 rounded-2xl bg-black-200/40 border border-purple/20 backdrop-blur-sm hover:border-purple/40 transition-all hover:-translate-y-0.5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg md:text-xl font-semibold mb-2 text-white group-hover:text-purple transition-colors">
                          {phase.phase}
                        </h4>
                        <p className="text-base text-white/80">{phase.details}</p>
                      </div>
                      <div className="inline-flex items-center justify-center whitespace-nowrap px-4 py-2 rounded-full bg-black-100/50 text-purple border border-purple/20 group-hover:bg-purple/10 transition-colors">
                        <FaClock className="w-4 h-4 mr-2" />
                        <span>{phase.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-full bg-black-200/40 text-white font-medium border border-purple/20 hover:border-purple/40 transition-colors flex items-center gap-2"
          >
            <FaLocationArrow className="w-4 h-4 rotate-180" />
            <span>Back to Projects</span>
          </button>
        </div>
      </div>
    </main>
  );
}
