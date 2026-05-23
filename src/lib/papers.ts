import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PaperMeta } from "@/data/papers";

const PAPERS_DIR = path.join(process.cwd(), "content", "papers");

/**
 * Returns all paper slugs derived from filenames in content/papers/.
 * Supports both .mdx and .md extensions.
 */
export function getAllPaperSlugs(): string[] {
  if (!fs.existsSync(PAPERS_DIR)) return [];
  return fs
    .readdirSync(PAPERS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.trim().replace(/\.(mdx|md)$/, ""));
}

/**
 * Returns the frontmatter metadata for a single paper by slug.
 * Returns null if the file does not exist.
 */
export function getPaperMeta(slug: string): PaperMeta | null {
  const fullPath = findPaperFile(slug);
  if (!fullPath) return null;

  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data } = matter(raw);

  return {
    slug,
    title:    data.title    ?? "Untitled",
    abstract: data.abstract ?? "",
    date:     data.date     ?? "",
    tags:     data.tags     ?? [],
    pdfUrl:   data.pdfUrl   ?? "",
    readTime: data.readTime ?? "",
  };
}

/**
 * Returns the frontmatter metadata AND raw MDX/MD body for a single paper.
 * Returns null if the file does not exist.
 */
export function getPaperContent(
  slug: string
): { meta: PaperMeta; content: string } | null {
  const fullPath = findPaperFile(slug);
  if (!fullPath) return null;

  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title:    data.title    ?? "Untitled",
      abstract: data.abstract ?? "",
      date:     data.date     ?? "",
      tags:     data.tags     ?? [],
      pdfUrl:   data.pdfUrl   ?? "",
      readTime: data.readTime ?? "",
    },
    content,
  };
}

/**
 * Returns all papers sorted newest-first.
 * Automatically picks up any new .mdx / .md file dropped in content/papers/.
 */
export function getAllPapers(): PaperMeta[] {
  return getAllPaperSlugs()
    .map(getPaperMeta)
    .filter((p): p is PaperMeta => p !== null)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

// ─── Internal helper ────────────────────────────────────────────────────────

/**
 * Finds the absolute file path for a slug, trying .mdx then .md.
 * Also handles filenames that were saved with a trailing space.
 */
function findPaperFile(slug: string): string | null {
  for (const ext of [".mdx", ".md"]) {
    // exact match
    const exact = path.join(PAPERS_DIR, `${slug}${ext}`);
    if (fs.existsSync(exact)) return exact;

    // some editors / OS save with a trailing space in the filename
    const spaced = path.join(PAPERS_DIR, `${slug}${ext} `);
    if (fs.existsSync(spaced)) return spaced;
  }
  return null;
}