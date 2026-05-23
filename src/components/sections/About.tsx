import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { BookOpen, Code2, FlaskConical, Target } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const interests = [
  {
    icon: Target,
    title: "Security Fundamentals",
    desc: "Networking protocols, web vulnerabilities, authentication flaws, and the OWASP Top 10, building a solid theoretical and practical base.",
  },
  {
    icon: Code2,
    title: "Programming & Tools",
    desc: "Writing security-oriented scripts in Python, learning C for low-level understanding, and getting familiar with standard security tooling.",
  },
  {
    icon: FlaskConical,
    title: "Hands-On Learning",
    desc: "CTF challenges, TryHackMe rooms, HackTheBox machines, and personal lab environments. Learning by doing, not just reading.",
  },
  {
    icon: BookOpen,
    title: "Documentation & Research",
    desc: "Writing up everything I learn, from challenge walkthroughs to vulnerability analyses. Building a knowledge base for the long term.",
  },
];

export function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        label="01 / about"
        title="Who I Am"
        subtitle="A computer science student building serious cybersecurity foundations: one lab, one writeup, and one project at a time."
      />
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-5 text-text-secondary leading-relaxed">
          <p>
            I&apos;m a third-year Computer Science student with a growing focus on
            cybersecurity. I started with the basics : networking, Linux, Python;
            and have been progressively working into more security-specific areas
            like web exploitation, log analysis, and cryptography fundamentals.
          </p>
          <p>
            My approach is practice-first: I spend more time in labs and CTF
            platforms than I do reading textbooks. Every challenge, every broken
            script, and every misconfigured VM teaches me something a lecture
            wouldn't.
          </p>
          <p>
              Currently exploring cybersecurity topics like web application security, basic malware analysis, and learning how privilege escalation works in controlled lab environments.
              Interested in understanding how systems can be secured and tested ethically.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6 font-mono text-sm space-y-3">
          <p className="text-text-muted text-xs tracking-widest uppercase mb-4">profile.json</p>
          {[
            ["name",       siteConfig.name],
            ["degree",     "Bachelor in Information Technology"],
            ["year",       "3rd Year"],
            ["location",   siteConfig.location],
            ["focus",      "Cybersecurity"],
            ["learning",   "Always"],
          ].map(([key, val]) => (
            <div key={key} className="flex gap-3">
              <span className="text-cyan-muted w-20 shrink-0">{key}</span>
              <span className="text-text-muted">:</span>
              <span className="text-text-secondary">&quot;{val}&quot;</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {interests.map(({ icon: Icon, title, desc }) => (
          <Card key={title} hover>
            <Icon size={20} className="text-cyan-muted mb-3" />
            <h3 className="text-text-primary font-semibold mb-2 text-sm">{title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}