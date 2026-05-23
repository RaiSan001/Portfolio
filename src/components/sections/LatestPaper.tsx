import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { PaperMeta } from "@/data/papers";

interface LatestPaperProps {
  paper: PaperMeta;
}

export function LatestPaper({ paper }: LatestPaperProps) {
  return (
    <section className="bg-surface-2 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono text-cyan-muted tracking-widest uppercase">
              04 / latest
            </span>
            <h2 className="mt-1 text-3xl font-bold text-text-primary">Latest Writing</h2>
          </div>
          <Link
            href="/papers"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-cyan-DEFAULT transition-colors"
          >
            View all
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="border border-border-bright rounded-xl p-8 bg-surface hover:border-cyan-dim transition-all duration-300">
          <div className="flex flex-wrap gap-2 mb-4">
            {paper.tags.map((tag) => (
              <Badge key={tag} variant="cyan">{tag}</Badge>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-text-primary mb-3">
            {paper.title}
          </h3>
          <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">
            {paper.abstract}
          </p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-text-muted font-mono mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {new Date(paper.date).toLocaleDateString("en-US", {
                year: "numeric", month: "long", day: "numeric",
              })}
            </span>
            {paper.readTime && (
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {paper.readTime}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`/papers/${paper.slug}`}
              className="inline-flex items-center gap-2 bg-surface-3 border border-border text-text-secondary hover:text-text-primary hover:border-border-bright px-4 py-2 rounded-lg text-sm transition-all duration-200"
            >
              Read Writeup
              <ArrowRight size={14} />
            </Link>
            {paper.pdfUrl && (
              <a
                href={paper.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-dim border border-cyan-muted text-cyan-DEFAULT hover:border-cyan-DEFAULT px-4 py-2 rounded-lg text-sm transition-all duration-200"
              >
                Download PDF
              </a>
            )}
          </div>
        </div>

        <div className="mt-4 sm:hidden">
          <Link
            href="/papers"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-cyan-DEFAULT transition-colors"
          >
            View all papers
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}