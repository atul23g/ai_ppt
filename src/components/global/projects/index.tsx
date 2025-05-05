import { Project } from "@prisma/client";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/constants";
import ProjectCard from "../project-card";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id} // Fixed: `id` is not defined; use project.id
          title={project?.title}
          projectid={project?.id}
          createdAt={project?.createdAt.toString()}
          isDelete={project?.isDeleted}
          slideData={project?.slides}
          src={
            project.thumbnail ||
            "https://unsplash.com/photos/gray-and-black-laptop-computer-on-surface-Im7lZjxeLhg"
          }
        />
      ))}
    </motion.div>
  );
}

export default Projects;