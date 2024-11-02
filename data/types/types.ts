// types.ts
interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
}

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface TechIconProps {
  icon: string;
  index: number;
}

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
  priority?: boolean;
}

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick: () => void;
  otherClasses?: string;
}
