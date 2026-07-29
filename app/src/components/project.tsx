export const Project = () => {
  return (
    <div className="bg-card p-6 md:p-8 rounded-lg space-y-8 max-w-4xl mx-auto">
      <figure className="flex flex-col items-center">
        <img
          src="S3.svg"
          alt="S3 + CloudFront architecture diagram"
          className="w-full h-auto max-w-3xl"
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
          <strong>Static Portfolio with React</strong> - Built a
          personal portfolio website using a single-page React app styled with
          Tailwind CSS to showcase projects and skills, packaged inside Docker for
          consistent local development and deployment.
        </p>

        <p>
          <strong>CI/CD with AWS Infrastructure Automation</strong> - Implemented
          GitHub Actions pipelines that run tests, build the app, and deploy static
          assets to S3 with cache control and CloudFront invalidation, demonstrating
          practical DevOps and cloud automation skills.
        </p>

        <p>
          <strong>Hands-on Infrastructure Experience</strong> - Designed a
          production-grade static hosting setup on AWS using S3 (private with OAC)
          and CloudFront for global CDN, caching, and SSL. ACM for HTTPS and Route 53
          alias to CloudFront. All provisioned via Terraform with remote state in S3.
          Chosen for reliability, scalability, and cost.
        </p>
      </div>
    </div>
  );
};
