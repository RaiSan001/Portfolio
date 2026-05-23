import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, FileText, Tag } from "lucide-react";
import { getAllPapers } from "@/lib/papers";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Papers & Writeups",
  description: "Research notes, CTF writeups, and security studies.",
};

const tagVariants = ["cyan", "teal", "blue", "purple", "default"] as const;

function tagVariant(tag: string): typeof tagVariants[number] {
  const map: Record<string, typeof tagVariants[number]> = {
    "Web Security": "cyan",
    CTF:            "teal",
    Linux:          "blue",
    Networking:     "purple",
    Cryptography:   "cyan",
    Systems:        "blue",
    Learning:       "default",
    Methodology:    "default",
    OWASP:          "teal",
    SQLi:           "cyan",
    "Privilege Escalation": "purple",
  };
  return map[tag] ?? "default";
}

export default function PapersPage() {
  const papers = getAllPapers();

  const allTags = Array.from(new Set(papers.flatMap((p) => p.tags))).sort();

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          label="research / writeups"
          title="Papers & Study Notes"
          subtitle="A personal learning journal — CTF writeups, vulnerability studies, tool explorations, and security research notes. Added as I learn."
        />

        {/* Tag cloud */}
        <div className="flex flex-wrap gap-2 mb-12">
          {allTags.map((tag) => (
            <Badge key={tag} variant={tagVariant(tag)}>{tag}</Badge>
          ))}
        </div>

        {papers.length === 0 ? (
          <div className="text-center py-20 text-text-muted">
            <FileText size={40} className="mx-auto mb-4 opacity-30" />
            <p>No papers yet. Check back soon.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {papers.map((paper) => (
              <Link
                key={paper.slug}
                href={`/papers/${paper.slug}`}
                className="group block border border-border hover:border-cyan-dim bg-surface hover:bg-surface-2 rounded-xl p-6 transition-all duration-200"
              >
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {paper.tags.map((tag) => (
                    <Badge key={tag} variant={tagVariant(tag)}>{tag}</Badge>
                  ))}
                </div>

                <h2 className="text-lg font-semibold text-text-primary group-hover:text-cyan-DEFAULT transition-colors mb-2">
                  {paper.title}
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                  {paper.abstract}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-4 text-xs text-text-muted font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {new Date(paper.date).toLocaleDateString("en-US", {
                        year: "numeric", month: "short", day: "numeric",
                      })}
                    </span>
                    {paper.readTime && (
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {paper.readTime}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    {paper.pdfUrl && (
                      <span className="text-teal-muted font-mono">PDF available</span>
                    )}
                    <span className="flex items-center gap-1 text-text-muted group-hover:text-cyan-DEFAULT transition-colors">
                      Read
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}


      </div>
    </div>
  );
}