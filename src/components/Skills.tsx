import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    name: "AI & LLM systems",
    skills: [
      "OpenAI API",
      "Gemini API",
      "RAG",
      "Document extraction",
      "Pydantic AI",
      "Structured outputs",
      "Tool calling",
      "Human-in-the-loop workflows",
      "Langfuse",
    ],
  },
  { name: "Languages", skills: ["Python", "TypeScript", "JavaScript"] },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "REST", "OpenAPI", "NATS", "Microservices"],
  },
  {
    name: "Frontend & mobile",
    skills: ["React", "Next.js", "React Native", "Vue.js"],
  },
  {
    name: "Data & platform",
    skills: ["MongoDB", "MySQL", "Docker", "Kubernetes", "Jenkins CI/CD"],
  },
  {
    name: "Leadership",
    skills: [
      "Architecture",
      "Code review",
      "Hiring",
      "Mentoring",
      "Delivery ownership",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skillGroups.map((group, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-3">{group.name}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
