import { useState } from "react";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  category: "All" | "Frontend" | "Backend" | "DevOps and Cloud";
  icon: string;
};

const skills: Skill[] = [
  { name: "React", category: "Frontend", icon: "react.svg" },
  { name: "TypeScript", category: "Frontend", icon: "typescript.svg" },
  { name: "JavaScript", category: "Frontend", icon: "javascript.svg" },
  { name: "CSS", category: "Frontend", icon: "css3.svg" },
  { name: "HTML", category: "Frontend", icon: "html5.svg" },

  { name: "Python", category: "Backend", icon: "python.svg" },
  { name: "PostgreSQL", category: "Backend", icon: "postgresql.svg" },
  { name: "MySQL", category: "Backend", icon: "mysql.svg" },
  { name: "MongoDB", category: "Backend", icon: "mongodb.svg" },

  { name: "Docker", category: "DevOps and Cloud", icon: "docker.svg" },
  { name: "GitHub Actions", category: "DevOps and Cloud", icon: "github-actions.svg" },
  { name: "GitLab CI/CD", category: "DevOps and Cloud", icon: "gitlab.svg" },
  { name: "Terraform", category: "DevOps and Cloud", icon: "terraform.svg" },
  { name: "AWS", category: "DevOps and Cloud", icon: "aws.svg" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Skill["category"]>("All");

  const filteredSkills = activeCategory === "All"
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(["All", "Frontend", "Backend", "DevOps and Cloud"] as Skill["category"][]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-primary/20 border border-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="bg-card p-6 rounded-lg shadow-xs card-hover ">
              <div className="text-center mb-2">
                <img src={`${skill.icon}`} alt={skill.name} className="mx-auto h-12 w-12 mb-2" />
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}