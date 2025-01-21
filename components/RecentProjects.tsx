"use client";

import { useState, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data";

// Memoized Button Component
const MagicButton = memo<MagicButtonProps>(
  ({ title, icon, position, handleClick, otherClasses }) => {
    const isLoading = title === "Loading...";
    
    return (
      <button
        onClick={handleClick}
        className="relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none"
        disabled={isLoading}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
               bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-purple border-t-transparent rounded-full animate-spin" />
              <span className="text-purple">Loading</span>
            </div>
          ) : (
            <>
              {position === "left" && icon}
              {title}
              {position === "right" && icon}
            </>
          )}
        </span>
      </button>
    );
  }
);
MagicButton.displayName = "MagicButton";

// Memoized Project Card Component
const ProjectCard = memo<ProjectCardProps>(
  ({ project, isHovered, onHover, onLeave, onClick }) => {
    return (
      <motion.div
        onHoverStart={onHover}
        onHoverEnd={onLeave}
        onClick={onClick}
        className="group relative bg-gradient-to-br from-[#0f1225] to-[#151839] rounded-2xl overflow-hidden border border-white/5 cursor-pointer h-[400px] hover:border-purple/30 hover:-translate-y-1 transition-all duration-300"
      >
        <div className="relative h-48 overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-t from-[#13162d] via-transparent to-black/50 z-20 transition-opacity duration-300 ${
              isHovered ? "opacity-90" : "opacity-70"
            }`}
          />
          <Image
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            width={400}
            height={300}
            priority={project.id <= 3}
            loading={project.id <= 3 ? "eager" : "lazy"}
          />
          
          <div className="absolute top-3 right-3 flex flex-wrap gap-2 z-30">
            {project.iconLists.map((icon, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-lg backdrop-blur-md bg-black/40 border border-white/10 flex items-center justify-center group-hover:border-purple/30 transition-all hover:scale-110"
              >
                <Image
                  src={icon}
                  alt={`tech-${index}`}
                  width={18}
                  height={18}
                  className="w-5 h-5"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <motion.h3
              className="text-xl font-bold text-white group-hover:text-purple transition-colors line-clamp-1"
              animate={{
                color: isHovered ? "#CBACF9" : "#FFFFFF",
              }}
            >
              {project.title}
            </motion.h3>
            <motion.div
              className="shrink-0 p-2.5 rounded-full bg-purple/10 text-purple hover:bg-purple/20 transition-all"
              whileHover={{ scale: 1.1, rotate: -15 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLocationArrow size={16} />
            </motion.div>
          </div>
          
          <p className="text-[#BEC1DD] text-sm leading-relaxed line-clamp-3">
            {project.des}
          </p>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#13162d] to-transparent">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-purple"
            >
              <span>View Project Details</span>
              <FaLocationArrow size={12} className="transform rotate-45" />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple/0 via-purple/0 to-purple/10 opacity-0 pointer-events-none"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

const RecentProjects = () => {
  const router = useRouter();
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [canCollapse, setCanCollapse] = useState(false);

  // Memoize visible projects
  const visibleProjectsList = useMemo(
    () => projects.slice(0, visibleProjects),
    [visibleProjects]
  );

  // Memoize callbacks
  const loadMore = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const newValue = Math.min(visibleProjects + 3, projects.length);
      setVisibleProjects(newValue);
      setCanCollapse(newValue === projects.length);
      setIsLoading(false);
    }, 250); // 500ms loading göster
  }, [visibleProjects, projects.length]);

  const handleCollapse = useCallback(() => {
    setVisibleProjects(3);
    setCanCollapse(false);
    // Smooth scroll to projects section
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }, []);

  const handleProjectClick = useCallback(
    (projectId: number) => {
      router.push(`/project/${projectId}`);
    },
    [router]
  );

  return (
    <section className="py-12 md:py-20" id="projects">
      <h1 className="heading mb-8 md:mb-16 px-4">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 px-4">
        <AnimatePresence mode="wait" initial={false}>
          {visibleProjectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut"
                }
              }}
              exit={{ 
                opacity: 0,
                y: 20,
                transition: {
                  duration: 0.3,
                  delay: 0,
                  ease: "easeIn"
                }
              }}
              style={{ gridArea: "auto" }}
            >
              <ProjectCard
                project={project}
                isHovered={hoveredId === project.id}
                onHover={() => setHoveredId(project.id)}
                onLeave={() => setHoveredId(null)}
                onClick={() => handleProjectClick(project.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        className="flex justify-center mt-8 md:mt-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        {canCollapse ? (
          <MagicButton
            title="Show Less"
            icon={<FaLocationArrow className="rotate-180" />}
            position="right"
            handleClick={handleCollapse}
            otherClasses=""
          />
        ) : visibleProjects < projects.length && (
          <MagicButton
            title={
              isLoading
                ? "Loading..."
                : `Show More (${projects.length - visibleProjects})`
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
            otherClasses={isLoading ? "opacity-80 cursor-not-allowed" : ""}
          />
        )}
      </motion.div>
    </section>
  );
};

export default RecentProjects;
