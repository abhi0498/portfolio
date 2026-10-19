import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Nav from "@/components/Nav";
import { about, experience, profile, projects, skills } from "@/content";

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[11px] leading-5 text-primary"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={`${id}-heading`}
      className="sticky top-0 z-10 -mx-6 mb-6 bg-background/80 px-6 py-5 font-mono text-xs uppercase tracking-[0.2em] text-foreground backdrop-blur lg:sr-only"
    >
      {children}
    </h2>
  );
}

const socials = [
  { label: "GitHub", href: profile.links.github, Icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin },
  { label: `Email ${profile.email}`, href: `mailto:${profile.email}`, Icon: Mail },
];

export default function Page() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a
        href="#content"
        className="absolute left-0 top-0 -translate-y-full rounded bg-primary px-4 py-2 font-medium text-primary-foreground focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="lg:flex lg:justify-between lg:gap-12">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[46%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              <a href="#">{profile.name}</a>
            </h1>
            <p className="mt-3 text-lg font-medium text-foreground/90 sm:text-xl">
              {profile.title.split(" · ").map((part, i) => (
                <span key={part} className="whitespace-nowrap">
                  {i > 0 && " · "}
                  {part}
                </span>
              ))}
            </p>
            <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
              {profile.pitch}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
              {profile.location} · Available to join immediately
            </p>
            <Nav />
          </div>
          <ul className="mt-8 flex items-center gap-5" aria-label="Social links">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-6 w-6" />
                </a>
              </li>
            ))}
          </ul>
        </header>

        <main id="content" className="pt-12 md:pt-20 lg:w-[54%] lg:py-24">
          <section id="about" aria-labelledby="about-heading" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionHeading id="about">About</SectionHeading>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              {about.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </section>

          <section id="experience" aria-labelledby="experience-heading" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionHeading id="experience">Experience</SectionHeading>
            <ol className="group/list space-y-12">
              {experience.map((job) => (
                <li key={job.period}>
                  <article className="group relative grid gap-2 pb-1 transition-opacity sm:grid-cols-8 sm:gap-8 lg:group-hover/list:opacity-60 lg:hover:!opacity-100">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-foreground/[0.04] lg:group-hover:shadow-[inset_0_1px_0_0_hsl(var(--foreground)/0.08)]" />
                    <p className="z-10 mt-1 font-mono text-xs uppercase tracking-wide text-muted-foreground sm:col-span-2">
                      {job.period}
                    </p>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-foreground">
                        {job.title} · {job.company}
                        {job.note && (
                          <span className="ml-2 font-mono text-xs font-normal text-muted-foreground">
                            ({job.note})
                          </span>
                        )}
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                        {job.points.map((point) => (
                          <li key={point} className="relative pl-4 before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-2 before:bg-muted-foreground/60">
                            {point}
                          </li>
                        ))}
                      </ul>
                      <Tags items={job.tags} />
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </section>

          <section id="projects" aria-labelledby="projects-heading" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionHeading id="projects">Projects</SectionHeading>
            <ul className="group/list space-y-12">
              {projects.map((project) => (
                <li key={project.title}>
                  <article className="group relative grid gap-2 pb-1 transition-opacity sm:grid-cols-8 sm:gap-8 lg:group-hover/list:opacity-60 lg:hover:!opacity-100">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-foreground/[0.04] lg:group-hover:shadow-[inset_0_1px_0_0_hsl(var(--foreground)/0.08)]" />
                    <p className="z-10 mt-1 font-mono text-xs uppercase tracking-wide text-muted-foreground sm:col-span-2">
                      {project.kind}
                    </p>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-foreground">{project.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2" aria-label={`${project.title} links`}>
                        {project.links.map((link) => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:text-primary"
                            >
                              {link.label}
                              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                            </a>
                          </li>
                        ))}
                      </ul>
                      <Tags items={project.tags} />
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          <section id="skills" aria-labelledby="skills-heading" className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
            <SectionHeading id="skills">Skills</SectionHeading>
            <dl className="divide-y divide-border">
              {skills.map(({ group, items }) => (
                <div key={group} className="grid gap-2 py-4 first:pt-0 sm:grid-cols-8 sm:gap-8">
                  <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground sm:col-span-2 sm:mt-0.5">
                    {group}
                  </dt>
                  <dd className="text-sm leading-relaxed text-foreground/90 sm:col-span-6">
                    {items.join(" · ")}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <footer className="border-t border-border pt-10 pb-16 lg:pb-0">
            <p className="text-lg font-medium text-foreground">Hiring for a tech lead or senior full-stack role?</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              I&apos;m based in {profile.location} and can join immediately. Email is the fastest way to reach me.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {profile.email}
            </a>
            <p className="mt-12 font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
