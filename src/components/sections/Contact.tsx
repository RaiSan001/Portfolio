import { Mail } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/siteConfig";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.324V1.324C24 .593 23.408 0 22.676 0" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.756 0 8.332.014 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.808 2.257 6.088 2.243 6.512 2.243 9.756v4.488c0 3.244.014 3.668.072 4.948.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.058 1.704.072 4.948.072s3.668-.014 4.948-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.058-1.28.072-1.704.072-4.948V9.756c0-3.244-.014-3.668-.072-4.948-.059-1.277-.353-2.45-1.32-3.417C19.366.425 18.193.131 16.916.072 15.636.014 15.212 0 11.968 0H12zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        label="05 / contact"
        title="Get In Touch"
        subtitle="I'm always open to learning opportunities, internship leads, project feedback, or just talking about cybersecurity."
      />

      <div className="grid sm:grid-cols-2 gap-5 max-w-xl">
        <a
          href={`mailto:${siteConfig.email}`}
          className="group flex items-center gap-4 bg-surface border border-border hover:border-cyan-dim rounded-lg p-5 transition-all duration-200"
        >
          <div className="w-10 h-10 rounded-lg bg-surface-3 border border-border flex items-center justify-center text-text-muted group-hover:text-cyan-DEFAULT group-hover:border-cyan-dim transition-colors">
            <Mail size={18} />
          </div>
          <div>
            <p className="text-xs text-text-muted font-mono mb-0.5">email</p>
            <p className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">
              {siteConfig.email}
            </p>
          </div>
        </a>

        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 bg-surface border border-border hover:border-border-bright rounded-lg p-5 transition-all duration-200"
        >
          <div className="w-10 h-10 rounded-lg bg-surface-3 border border-border flex items-center justify-center text-text-muted group-hover:text-text-primary group-hover:border-border-bright transition-colors">
            <GithubIcon size={18} />
          </div>
          <div>
            <p className="text-xs text-text-muted font-mono mb-0.5">github</p>
            <p className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">
              RaiSan001
            </p>
          </div>
        </a>

        {siteConfig.facebook && (
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-surface border border-border hover:border-border-bright rounded-lg p-5 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-lg bg-surface-3 border border-border flex items-center justify-center text-text-muted group-hover:text-text-primary group-hover:border-border-bright transition-colors">
              <FacebookIcon size={18} />
            </div>
            <div>
              <p className="text-xs text-text-muted font-mono mb-0.5">facebook</p>
              <p className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">
                meghrazbhattarai
              </p>
            </div>
          </a>
        )}

        {siteConfig.instagram && (
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-surface border border-border hover:border-border-bright rounded-lg p-5 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-lg bg-surface-3 border border-border flex items-center justify-center text-text-muted group-hover:text-text-primary group-hover:border-border-bright transition-colors">
              <InstagramIcon size={18} />
            </div>
            <div>
              <p className="text-xs text-text-muted font-mono mb-0.5">instagram</p>
              <p className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">
                meghrazbhattarai
              </p>
            </div>
          </a>
        )}
      </div>

      <div className="mt-10 p-5 bg-surface border border-border rounded-lg max-w-xl">
        <p className="text-text-muted text-sm font-mono leading-relaxed">
          <span className="text-cyan-muted">Note:</span> I am a student and respond best to
          thoughtful, specific messages. If you&apos;re reaching out about a
          project, opportunity, or to share knowledge. I&apos;d love to hear from you.
        </p>
      </div>
    </section>
  );
}