"use client";

import { useState, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data";

// Memoized Button Component
const MagicButton = memo<MagicButtonProps>(
  ({ title, icon, position, handleClick, otherClasses }) => (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-purple/10 hover:bg-purple/20 text-white transition-colors ${otherClasses}`}
    >
      {position === "left" && icon}
      <span>{title}</span>
      {position === "right" && icon}
    </button>
  )
);
MagicButton.displayName = "MagicButton";

// Memoized Project Card Component
const ProjectCard = memo<ProjectCardProps>(
  ({ project, isHovered, onHover, onLeave, onClick }) => {
    // Memoize static content
    const techStack = useMemo(
      () => (
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
              <Image
                src={icon}
                alt={`tech-${index}`}
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </motion.div>
          ))}
        </div>
      ),
      [project.iconLists]
    );

    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        onHoverStart={onHover}
        onHoverEnd={onLeave}
        onClick={onClick}
        className="group relative bg-gradient-to-br from-[#13162d] to-[#1a1f47] rounded-2xl overflow-hidden border border-white/5 cursor-pointer"
      >
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#13162d] via-transparent to-black/50 z-20"
            animate={{
              opacity: isHovered ? 0.9 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          />
          <Image
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
            width={400}
            height={300}
            priority={project.id <= 3}
            loading={project.id <= 3 ? "eager" : "lazy"}
          />
          {techStack}
        </div>

        <div className="p-4 md:p-6 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <motion.h3
              className="text-lg md:text-xl font-bold text-white group-hover:text-purple transition-colors line-clamp-1"
              animate={{
                color: isHovered ? "#CBACF9" : "#FFFFFF",
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

  // Memoize visible projects
  const visibleProjectsList = useMemo(
    () => projects.slice(0, visibleProjects),
    [visibleProjects]
  );

  // Memoize callbacks
  const loadMore = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
      setIsLoading(false);
    }, 300);
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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 px-4">
        <AnimatePresence mode="popLayout">
          {visibleProjectsList.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredId === project.id}
              onHover={() => setHoveredId(project.id)}
              onLeave={() => setHoveredId(null)}
              onClick={() => handleProjectClick(project.id)}
            />
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
