import { categories, type Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectList({ projects }: { projects: Project[] }) {
  const sections = categories
    .map((category) => ({
      ...category,
      items: projects.filter((project) => project.category === category.id),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <>
      <nav className="project-nav" aria-label="Categorias de projetos">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            {section.title}
            <span>{String(section.items.length).padStart(2, "0")}</span>
          </a>
        ))}
      </nav>

      {sections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className="project-section"
          aria-labelledby={`${section.id}-title`}
        >
          <header className="project-section-head">
            <p className="eyebrow">
              {String(i + 1).padStart(2, "0")} — {section.eyebrow}
            </p>
            <h2 id={`${section.id}-title`}>{section.title}</h2>
            <p>{section.description}</p>
          </header>

          <div className="project-list">
            {section.items.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
