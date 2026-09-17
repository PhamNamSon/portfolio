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
              Backend developer with cloud and DevOps experience
            </h3>

            <p>
              With 3 years of experience and a Bachelor of Science in Computer Engineering from the University of Alberta, I work across backend development, cloud infrastructure, and DevOps. I am comfortable moving between application code, delivery pipelines, and the infrastructure underneath.
            </p>

            <p>
              On the backend I work with Python and Java, building REST APIs with Django, Spring Boot, and FastAPI. I use PostgreSQL for data, package services with Docker, and run them on Kubernetes. On the cloud side I work with AWS and Terraform, and automate delivery with GitHub Actions and GitLab CI/CD. What I enjoy most is the space where software meets infrastructure, and learning what each side needs from the other.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a href="Nam_Son_resume.pdf" target="_blank" rel="noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300">
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
                  <p>3 years<br />Backend Development & DevOps</p>
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
                  <p>Certified Kubernetes Administrator (CKA)</p>
                  <p>AWS Certified Solutions Architect - Associate</p>
                  <p>AWS Certified Developer - Associate</p>
                  <p>Microsoft Certified: Azure Administrator Associate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};