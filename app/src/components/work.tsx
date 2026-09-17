export const Work = () => {
  return (
    <div className="bg-card p-6 md:p-8 rounded-lg shadow-xs space-y-6 w-[min(95vw,60rem)] max-w mx-auto text-left">
      <div>
        <h2 className="text-xl font-bold">
          Backend Developer &amp; DevOps Engineer
        </h2>
        <p className="text-sm text-muted-foreground">
          June 2025 - Present
        </p>
      </div>

      <div className="space-y-4 text-[1.05rem] leading-relaxed">
        <p>
          Backend and DevOps work on client projects, covering development,
          deployment, and day to day operations.
        </p>

        <p>
          Developed and maintained REST APIs with Django and Spring Boot, using
          PostgreSQL for data management. That work included schema design, secure
          and well tuned queries, and keeping data flow consistent across applications.
        </p>

        <p>
          Packaged services with Docker and ran them on Kubernetes. Built and
          maintained delivery pipelines with GitHub Actions, and handled
          deployment, monitoring, and support for the environments I worked in.
        </p>

        <p>
          Provisioned AWS infrastructure with Terraform, applying Infrastructure
          as Code for repeatable environments across projects.
        </p>

        <p>
          Used AI coding assistants and LLM tools in daily work to speed up
          development, debug faster, and automate repetitive tasks across
          backend and infrastructure.
        </p>

        <p>
          Worked directly with a small client team across feature delivery,
          deployment, and ongoing support.
        </p>
      </div>
    </div>
  );
};