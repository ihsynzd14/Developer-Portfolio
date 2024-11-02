"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { useRouter } from "next/navigation";

import { projects } from "@/data";
import MagicButton from "./MagicButton";

const RecentProjects = () => {
  const router = useRouter();
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true);
    // Simulate loading for better UX
    setTimeout(() => {
      setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
      setIsLoading(false);
    }, 300);
  };

  const handleProjectClick = (projectId: number) => {
    router.push(`/project/${projectId}`);
  };

  return (
    <section className="py-12 md:py-20" id="projects">
      <h1 className="heading mb-8 md:mb-16 px-4">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 px-4">
        <AnimatePresence mode="popLayout">
          {projects.slice(0, visibleProjects).map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => handleProjectClick(project.id)}
              className="group relative bg-gradient-to-br from-[#13162d] to-[#1a1f47] rounded-2xl overflow-hidden border border-white/5 cursor-pointer"
            >
              {/* Project Image with Overlay */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#13162d] via-transparent to-black/50 z-20"
                  animate={{
                    opacity: hoveredId === project.id ? 0.9 : 0.7,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Floating Tech Stack on Image */}
                <div className="absolute top-3 right-3 flex flex-wrap gap-2 z-30">
                  {project.iconLists.map((icon, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: index * 0.1,
                      }}
                      className="w-7 h-7 rounded-lg backdrop-blur-md bg-black/30 border border-white/10 flex items-center justify-center group-hover:border-purple/30 transition-colors"
                    >
                      <img
                        src={icon}
                        alt={`tech-${index}`}
                        className="w-4 h-4"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 md:p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <motion.h3
                    className="text-lg md:text-xl font-bold text-white group-hover:text-purple transition-colors line-clamp-1"
                    animate={{
                      color: hoveredId === project.id ? "#CBACF9" : "#FFFFFF",
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div
                    className="shrink-0 p-2 rounded-full bg-purple/10 text-purple hover:bg-purple/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: -15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLocationArrow size={14} />
                  </motion.div>
                </div>

                <p className="text-[#BEC1DD] text-sm line-clamp-2 min-h-[40px]">
                  {project.des}
                </p>
              </div>

              {/* Interactive Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple/0 via-purple/0 to-purple/10 opacity-0 pointer-events-none"
                animate={{
                  opacity: hoveredId === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visibleProjects < projects.length && (
        <motion.div
          className="flex justify-center mt-8 md:mt-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <MagicButton
            title={
              isLoading
                ? "Loading..."
                : `Show More Projects (${projects.length - visibleProjects})`
            }
            icon={
              <motion.div
                animate={{
                  rotate: isLoading ? 360 : 0,
                }}
                transition={{
                  duration: 1,
                  repeat: isLoading ? Infinity : 0,
                  ease: "linear",
                }}
              >
                <FaLocationArrow />
              </motion.div>
            }
            position="right"
            handleClick={loadMore}
            otherClasses={isLoading ? "opacity-80" : ""}
          />
        </motion.div>
      )}
    </section>
  );
};

export default RecentProjects;
