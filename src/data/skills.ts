export type SkillLevel = "learning" | "familiar" | "comfortable";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    icon: "Code2",
    skills: [
      { name: "Python",     level: "comfortable" },
      { name: "C",          level: "familiar"    },
      { name: "JavaScript", level: "familiar"    },
      { name: "C++",       level: "familiar"    },
        { name: "PHP",       level: "familiar"    },
    ],
  },
  {
    category: "Networking",
    icon: "Network",
    skills: [
      { name: "TCP/IP Fundamentals", level: "comfortable" },
      { name: "DNS & HTTP",          level: "comfortable" },
      { name: "Wireshark",           level: "familiar"    },
      { name: "Nmap",                level: "familiar"    },
      { name: "VPN & Proxies",       level: "familiar"    },
    ],
  },
  {
    category: "Linux & Systems",
    icon: "Terminal",
    skills: [
      { name: "Linux CLI",         level: "comfortable" },
      { name: "File Permissions",  level: "comfortable" },
      { name: "Bash Scripting",    level: "learning"    },
      { name: "Process Analysis",  level: "learning"    },
      { name: "Kernel Basics",     level: "learning"    },
    ],
  },
  {
    category: "Web Security",
    icon: "Shield",
    skills: [
      { name: "OWASP Top 10",   level: "familiar"    },
      { name: "Burp Suite",     level: "learning"    },
      { name: "HTTP Analysis",  level: "comfortable" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub",    level: "comfortable" },
      { name: "Docker (basics)", level: "learning"    },
      { name: "TryHackMe",       level: "learning"    },
      { name: "HackTheBox",      level: "learning"    },
      { name: "Pycharm",         level: "comfortable" },
    ],
  },
  {
    category: "Concepts",
    icon: "BookOpen",
    skills: [
      { name: "Cryptography Basics",        level: "familiar" },
      { name: "Reverse Engineering",        level: "learning" },
      { name: "Malware Analysis",           level: "learning" },
    ],
  },
];

export const levelConfig: Record<
  SkillLevel,
  { label: string; color: string; width: string }
> = {
  learning: {
    label: "Learning",
    color: "bg-purple-dim border-purple-muted text-purple-soft",
    width: "w-1/3",
  },
  familiar: {
    label: "Familiar",
    color: "bg-blue-dim border-blue-muted text-blue-deep",
    width: "w-2/3",
  },
  comfortable: {
    label: "Comfortable",
    color: "bg-cyan-dim border-cyan-muted text-cyan-DEFAULT",
    width: "w-full",
  },
};