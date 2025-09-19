export const Project = () => {
  return (
    <div className="bg-card grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <div className="flex flex-col gap-8">
        <figure className="flex flex-col items-center">
          <img
            src="EC2.svg"
            alt="EC2 architecture diagram"
            className="w-full h-auto"
          />
          <figcaption className="text-xs mt-2 text-muted-foreground">
            View full size{" "}
            <a
              href="EC2.svg"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              here
            </a>
            .
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center">
          <img
            src="S3.svg"
            alt="S3 + CloudFront architecture diagram"
            className="w-full h-auto"
          />
          <figcaption className="text-xs mt-2 text-muted-foreground">
            View full size{" "}
            <a
              href="S3.svg"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              here
            </a>
            .
          </figcaption>
        </figure>
      </div>

      <div className="space-y-4 text-[1.05rem] leading-relaxed text-left">
        <p>
          See the full code{" "}
          <a
            href="https://github.com/PhamNamSon/portfolio"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            here
          </a>
          .
        </p>

        <p>
          <strong>Static Portfolio with HTML, CSS, and JavaScript</strong> - Built a
          personal portfolio website using a single-page React app styled with
          Tailwind CSS to showcase projects and skills, packaged inside Docker for
          consistent local development and deployment.
        </p>

        <p>
          <strong>CI/CD with AWS Infrastructure Automation</strong> - Implemented
          GitHub Actions pipelines that can run tests, rebuild infrastructure, or
          update files directly on EC2 (Dockerized app) or S3 (static hosting)
          without tearing down the whole stack, demonstrating practical DevOps and
          cloud automation skills.
        </p>

        <p>
          <strong>Hands-on Infrastructure Experience</strong> - Experimented with both
          EC2 and S3 for hosting: run the site on EC2 to demonstrate infrastructure
          management and Docker deployment, while also building workflows for S3 as a
          way to learn scalable static hosting. On top of this, I added a secure contact
          system where visitors can send me messages directly through the site, powered
          by AWS SES and Lambda with validation and monitoring for reliable communication.
        </p>

        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>EC2 stack:</strong> Dockerized portfolio on EC2, private subnets
            across two AZs, fronted by an ALB in public subnets; Route 53 for DNS;
            provisioning with Terraform (state in S3). Emphasizes networking,
            automation, and deployment beyond static hosting.
          </li>
          <li>
            <strong>S3 stack:</strong> Static content in S3 with OAC (no public
            bucket), served through CloudFront (caching & SSL). ACM for HTTPS and
            Route 53 alias to CloudFront. Provisioned via Terraform with state in S3.
            Chosen for reliability, scalability, and cost for a static site.
          </li>
        </ul>
      </div>
    </div>
  );
};
