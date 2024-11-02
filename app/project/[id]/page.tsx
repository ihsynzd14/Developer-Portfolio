"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { useParams } from "next/navigation";
import {
  FaClock,
  FaLightbulb,
  FaShieldAlt,
  FaSync,
  FaMobile,
  FaServer,
} from "react-icons/fa";

import { projects } from "@/data";
import MagicButton from "@/components/MagicButton";

// Feature icon mapping
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

  useEffect(() => {
    const projectData = projects.find((p) => p.id === Number(id));
    setProject(projectData);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Project not found</h1>
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
    <main className="min-h-screen bg-black-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-[60vh] rounded-2xl overflow-hidden mb-12">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black-100 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-white-100 max-w-3xl"
            >
              {project.des}
            </motion.p>
          </div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {project.iconLists.map((icon: string, index: number) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="p-4 rounded-xl backdrop-blur-md bg-black-200 border border-white/10"
              >
                <img src={icon} alt={`tech-${index}`} className="w-8 h-8" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Features Section */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6">Key Features</h3>
              <div className="grid gap-6">
                {project.features.map((feature: any, index: number) => {
                  const IconComponent =
                    featureIcons[feature.title] || FaLightbulb;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                      className="p-4 rounded-xl bg-black-200 border border-white/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-purple/10">
                          <IconComponent className="w-6 h-6 text-purple" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-white-100 text-sm">
                            {feature.details}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6">Project Timeline</h3>
              <div className="space-y-6">
                {project.timeline.map((phase: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="relative pl-8"
                  >
                    {index !== project.timeline.length - 1 && (
                      <div className="absolute left-[0.9rem] top-8 w-0.5 h-full bg-purple/30" />
                    )}
                    <div className="flex items-start gap-4">
                      <div className="absolute left-0 p-2 rounded-full bg-purple">
                        <FaClock className="w-3 h-3 text-white" />
                      </div>
                      <div className="bg-black-200 rounded-xl p-4 border border-white/10 w-full">
                        <h4 className="font-semibold mb-1">{phase.phase}</h4>
                        <p className="text-purple text-sm mb-2">
                          {phase.duration}
                        </p>
                        <p className="text-white-100 text-sm">
                          {phase.details}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <MagicButton
              title="View Live Project"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </motion.div>
      </div>
    </main>
  );
}
