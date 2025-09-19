import { useState } from "react";
import type { ReactNode } from "react";
import { Project } from "@/components/project";
import { Internship } from "@/components/internship";
import { X } from "lucide-react";

type Experience = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  duration?: string;
  details?: ReactNode;
};

const experiences: Experience[] = [
  {
    id: 1,
    title: "Cloud Infrastructure Project",
    description: "Built and deployed my React portfolio using AWS (EC2, S3, CloudFront) with Terraform and CI/CD pipelines.",
    imageUrl: "project.svg",
    tags: [ "React", "GitHub Actions", "Terraform", "AWS"],
    details: <Project />
  },
  {
    id: 2,
    title: "Backend Developer & DevOps",
    description: "Contributed to enterprise telecom systems by building APIs, optimizing databases, and automating CI/CD pipelines.",
    imageUrl: "VNPT.svg",
    tags: [ "Python", "PostgreSQL", "Docker", "GitLab CI/CD"],
    duration: "16 months",
    details: <Internship />
  }
];

function ModalBox({ onClose, children }: { onClose: () => void, children: ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 z-[59] bg-black/50" onClick={onClose} />

      <div className="fixed inset-0 z-[60] flex items-center justify-center">
        <div className="relative w-[95vw] max-h-[85vh] rounded-lg border bg-card text-foreground shadow-lg overflow-hidden">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-2 right-2 rounded px-5 py-2 hover:bg-primary/20"
          >
            <X className="h-5 w-5 text-primary" />
          </button>

          <div className="max-h-[85vh] overflow-y-auto p-6 pt-12">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export const ExperienceSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const openExperience = experiences.find((experience) => experience.id === openId);

  return (
    <section id="experience" className="py-24 px-4 relative">
      {/* <div className="container mx-auto max-w-5xl"> */}
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center mb-12 max-w-2xl mx-auto">
          Here are some highlights of my professional experience and projects I've worked on. These roles have allowed me to develop a strong foundation in full-stack development, cloud infrastructure, and DevOps practices.
        </p>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience) => (
            <div key={experience.id} className="group bg-card rounded-lg overflow-hidden shadow-xs">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={experience.imageUrl}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                {experience.duration && (
                  <span className={"absolute top-2 right-2 text-xs font-medium px-2 py-1 rounded-md bg-primary/50 text-primary-foreground"}>
                    {experience.duration}
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>

              <p className="text-sm mb-4">{experience.description}</p>

              <div className="flex justify-between items-center px-4">
                <button className="cosmic-button mb-4" onClick={() => setOpenId(experience.id)}>View Details</button>
              </div>
            </div>
          ))}
        </div>

        {openId && (
          <ModalBox onClose={() => setOpenId(null)}>
            {openExperience?.details}
          </ModalBox>
        )}
      </div>
    </section>
  );
};