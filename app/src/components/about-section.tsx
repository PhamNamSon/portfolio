import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-stack developer, experienced with Cloud & DevOps
            </h3>

            <p>
              With 2 years of experience and a Bachelor of Science in Computer Engineering from the University of Alberta, I bring a strong foundation in software engineering and a growing passion for cloud technologies. My skills span frontend, backend, DevOps, and cloud, allowing me to contribute across the stack and adapt to diverse roles.
            </p>

            <p>
              I have hands-on experience with React and Tailwind CSS on the frontend, Python and PostgreSQL on the backend, and DevOps practices with Docker and GitLab CI/CD. More recently, I've been expanding into cloud infrastructure with AWS and Terraform. What excites me most is solving problems at the intersection of software and infrastructure—creating scalable, reliable systems and continuously learning along the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300">
                View Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BriefcaseBusiness className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Work Experience</h4>
                  <p>2 years<br />Full-stack Development & DevOps</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p>B.Sc. Computer Engineering - Software Option<br />University of Alberta</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Certifications</h4>
                  <p>AWS Solutions Architect - Associate (In Progress)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
