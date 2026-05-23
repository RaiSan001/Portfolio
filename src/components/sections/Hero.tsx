import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Terminal } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";


export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl w-full">

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-teal-DEFAULT animate-pulse-slow" />
              <span className="text-xs font-mono text-text-secondary">
                Open to internships &amp; learning opportunities
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-text-primary leading-tight tracking-tight mb-4">
              {siteConfig.name}
            </h1>

            <p className="text-xl sm:text-2xl text-cyan-DEFAULT font-mono font-light mb-6">
              {siteConfig.title}
            </p>

            <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-2xl">
              {siteConfig.shortBio}
            </p>

            <div className="bg-surface border border-border rounded-lg px-5 py-4 mb-10 font-mono text-sm max-w-md">
              <div className="flex items-center gap-2 mb-3 text-text-muted">
                <Terminal size={14} />
                <span className="text-xs">whoami</span>
              </div>
              <div className="space-y-1 text-text-secondary">
                <p>
                  <span className="text-cyan-muted">university</span>
                  <span className="text-text-muted mx-2">→</span>
                  {siteConfig.university}
                </p>
                <p>
                  <span className="text-cyan-muted">focus</span>
                  <span className="text-text-muted mx-2">→</span>
                  Cybersecurity Research &amp; Dev
                </p>
                <p>
                  <span className="text-cyan-muted">status</span>
                  <span className="text-text-muted mx-2">→</span>
                  <span className="text-teal-DEFAULT">actively learning</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-cyan-muted shadow-xl">
              <Image
                src="/images/profile.png"
                alt={siteConfig.name}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
