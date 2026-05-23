import Link from "next/link";
import { Home, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="font-mono text-cyan-muted text-6xl font-bold mb-4">404</div>
        <div className="bg-surface border border-border rounded-lg p-5 font-mono text-sm mb-8 text-left">
          <div className="flex items-center gap-2 text-text-muted mb-3">
            <Terminal size={14} />
            <span>bash: command not found</span>
          </div>
          <p className="text-text-secondary">
            <span className="text-cyan-muted">$</span> cat /requested-page
          </p>
          <p className="text-red-400 mt-1">
            cat: /requested-page: No such file or directory
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-surface border border-border hover:border-border-bright text-text-secondary hover:text-text-primary px-5 py-2.5 rounded-lg text-sm transition-all duration-200"
        >
          <Home size={16} />
          Return Home
        </Link>
      </div>
    </div>
  );
}