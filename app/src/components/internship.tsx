export const Internship = () => {
  return (
    <div className="bg-card p-6 md:p-8 rounded-lg shadow-xs space-y-6 w-[min(95vw,60rem)] max-w mx-auto text-left">
      <div>
        <h2 className="text-xl font-bold">
          Backend Developer
        </h2>
        <p className="text-sm text-muted-foreground">
          January 2023 - August 2023 <br />
          May 2024 - December 2024
        </p>
      </div>

      <div className="space-y-4 text-[1.05rem] leading-relaxed">
        <p>
          Worked on enterprise telecom applications. Containerized services with
          Docker and set up CI/CD pipelines with GitLab CI/CD, which made testing
          and releases repeatable instead of manual.
        </p>

        <p>
          Developed and maintained backend APIs with FastAPI and Spring
          Boot. The services handled data processing, reporting, and
          integrations between internal systems.
        </p>

        <p>
          Contributed to database design and query tuning with PostgreSQL, which
          improved data access speed and reliability. That work included reading
          slow query plans and refining schema design with senior engineers.
        </p>

        <p>
          Took part in system design discussions, feature testing, and peer code
          reviews.
        </p>

        <p>
          Worked with developers, QA engineers, and business analysts to align on
          requirements and deliver solutions.
        </p>
      </div>
    </div>
  );
};