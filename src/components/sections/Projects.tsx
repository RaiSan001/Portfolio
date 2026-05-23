import Link from "next/link";
import { ExternalLink, Beaker, CheckCircle2, CircleDot } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

const statusConfig = {
  complete:      { icon: CheckCircle2, label: "Complete",     color: "text-teal-DEFAULT"  },
  "in-progress": { icon: CircleDot,    label: "In Progress",  color: "text-cyan-DEFAULT"  },
  experimental:  { icon: Beaker,       label: "Experimental", color: "text-purple-soft"   },
};

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Status = statusConfig[project.status];
  return (
    <Card hover glow className="flex flex-col h-full">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-text-primary font-semibold">{project.title}</h3>
        <div className={`flex items-center gap-1 text-xs font-mono ${Status.color} shrink-0 ml-2`}>
          <Status.icon size={12} />
          <span>{Status.label}</span>
        </div>
      </div>

      <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <Badge key={t} variant="default">{t}</Badge>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-border">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary transition-colors"
        >
          <GithubIcon size={14} />
          Source Code
        </a>
        <div className="flex-1" />
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs text-text-muted font-mono">#{tag}</span>
        ))}
      </div>
    </Card>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others   = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        label="03 / projects"
        title="Projects & Experiments"
        subtitle="Tools I've built and experiments I've run. Each one is a learning artifact."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {featured.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>

      {others.length > 0 && (
        <>
          <h3 className="text-text-muted text-sm font-mono mb-5">— other projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </>
      )}

      <div className="mt-12 text-center">
        <a
          href="https://github.com/RaiSan001?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors border border-border hover:border-border-bright rounded-lg px-5 py-2.5"
        >
          <GithubIcon size={16} />
          View all repositories on GitHub
          <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}