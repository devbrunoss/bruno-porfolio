import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
export function ProjectList({ projects }: { projects: Project[] }) {
  return <div className="project-list">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index}/>)}</div>;
}