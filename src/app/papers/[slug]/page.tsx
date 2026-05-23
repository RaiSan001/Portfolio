import type { Metadata } from "next";
import { notFound }       from "next/navigation";
import Link               from "next/link";
import { ArrowLeft, Calendar, Clock, Download, Tag } from "lucide-react";
import { MDXRemote }      from "next-mdx-remote/rsc";
import { getAllPaperSlugs, getPaperContent } from "@/lib/papers";
import { Badge }          from "@/components/ui/Badge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPaperSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getPaperContent(slug);
  if (!data) return { title: "Not Found" };
  return {
    title: data.meta.title,
    description: data.meta.abstract,
  };
}

const tagVariant = (tag: string): "cyan" | "teal" | "blue" | "purple" | "default" => {
  const map: Record<string, "cyan" | "teal" | "blue" | "purple" | "default"> = {
    "Web Security": "cyan", CTF: "teal", Linux: "blue",
    Networking: "purple", Cryptography: "cyan", Systems: "blue",
  };
  return map[tag] ?? "default";
};

export default async function PaperPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getPaperContent(slug);
  if (!data) notFound();

  const { meta, content } = data;

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back */}
        <Link
          href="/papers"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to Papers
        </Link>

        {/* Header */}
        <header className="mb-10 pb-8 border-b border-border">
          <div className="flex flex-wrap gap-2 mb-5">
            {meta.tags.map((tag) => (
              <Badge key={tag} variant={tagVariant(tag)}>{tag}</Badge>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight mb-5">
            {meta.title}
          </h1>

          <p className="text-text-secondary leading-relaxed mb-6 text-lg">
            {meta.abstract}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-5 text-sm text-text-muted font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {new Date(meta.date).toLocaleDateString("en-US", {
                  year: "numeric", month: "long", day: "numeric",
                })}
              </span>
              {meta.readTime && (
                <span className="flex items-center gap-1.5">
                  <Clock size={13} />
                  {meta.readTime}
                </span>
              )}
            </div>

            {meta.pdfUrl && (
              <a
                href={meta.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-dim border border-cyan-muted text-cyan-DEFAULT px-4 py-2 rounded-lg text-sm hover:border-cyan-DEFAULT transition-all duration-200"
              >
                <Download size={14} />
                Download PDF
              </a>
            )}
          </div>
        </header>

        {/* MDX Content */}
        <article className="prose prose-invert max-w-none">
          <MDXRemote source={content} />
        </article>

        {/* Footer */}
        <div className="mt-14 pt-8 border-t border-border flex items-center justify-between">
          <Link
            href="/papers"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            <ArrowLeft size={14} />
            All Papers
          </Link>
          <span className="text-xs text-text-muted font-mono">
            {meta.date}
          </span>
        </div>
      </div>
    </div>
  );
}