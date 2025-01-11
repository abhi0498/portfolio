import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Charitably.in",
    description:
      "A Next.js website designed to improve the discoverability of charitable organizations, making it easier for people to find and support meaningful causes.",
    image: "/placeholder.svg?height=200&width=300",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "Google OAuth",
    ],
    github: "https://github.com/abhi0498/charitably",
    live: "https://charitably.in",
  },
  {
    title: "Translate JSON (npm package)",
    description:
      "A CLI tool for translating i18n JSON files from English to any supported language. Built to streamline the localization process for developers.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Node.js", "Playwright", "CLI", "i18n", "Google Translate API"],
    github: "https://github.com/abhi0498/translate-json-file",
    npm: "https://www.npmjs.com/package/translate-json-file",
  },
  {
    title: "FreshRelease Export (Chrome Extension)",
    description:
      "Chrome extension that enhances FreshRelease's kanban board by adding a button to copy tasks to clipboard in a clean format.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Plasmo", "Chrome Extension", "TypeScript"],
    github: "https://github.com/abhi0498/freshrelease-copy-to-clipboard",
    chrome:
      "https://chromewebstore.google.com/detail/freshrelease-export/emfbelpnpdbkejginlmljfhfdjdjmjci",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
              {project.npm && (
                <a
                  href={project.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  npm
                </a>
              )}
              {project.chrome && (
                <a
                  href={project.chrome}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Chrome Store
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
