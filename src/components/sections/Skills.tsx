import * as LucideIcons from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { skillCategories, levelConfig, type SkillLevel } from "@/data/skills";

const levelVariantMap: Record<SkillLevel, "cyan" | "blue" | "purple"> = {
  comfortable: "cyan",
  familiar:    "blue",
  learning:    "purple",
};

export function Skills() {
  return (
    <section id="skills" className="bg-surface-2 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="02 / skills"
          title="Skills & Technologies"
          subtitle="An honest assessment of where I am. Skill levels reflect actual practice, not wishful thinking."
        />

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-10">
          {(["comfortable", "familiar", "learning"] as SkillLevel[]).map((level) => (
            <Badge key={level} variant={levelVariantMap[level]}>
              {levelConfig[level].label}
            </Badge>
          ))}
          <span className="text-text-muted text-xs self-center ml-1">— self-assessed proficiency</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => {
            const Icon = LucideIcons[cat.icon as keyof typeof LucideIcons] as React.ComponentType<{ size?: number; className?: string }>;

            return (
              <Card key={cat.category} className="space-y-4">
                <div className="flex items-center gap-2">
                  {Icon && <Icon size={18} className="text-cyan-muted" />}
                  <h3 className="text-text-primary font-semibold text-sm">{cat.category}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between gap-3">
                      <span className="text-text-secondary text-sm">{skill.name}</span>
                      <Badge variant={levelVariantMap[skill.level]}>
                        {levelConfig[skill.level].label}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}