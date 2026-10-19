import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const experiences = [
  {
    title: "Technical Lead, Full-Stack & AI",
    company: "SmartFoodSafe (rejoined)",
    period: "Feb 2026 - Oct 2026",
    points: [
      "Led technology, delivery and code quality across a ~30-repository MERN platform with a junior-heavy team.",
      "Shipped the Health & Safety module to production and delivered change acknowledgement, a scheduling API integration and a shared form library reused across record modules.",
      "Resolved ~250 SonarQube issues in the UI codebase and set engineering standards: typed OpenAPI contracts, Jenkins quality gates and dependency automation.",
      "Ran engineering hiring end to end, from interview design through coordination to final evaluation.",
      "Designed a multi-tenant AI assistant in Python and Pydantic AI on the Gemini API with typed tools, structured outputs, tool access scoped by tenant and role, and human approval for sensitive actions, and built a working prototype.",
    ],
  },
  {
    title: "Software Craftsperson",
    company: "Incubyte",
    period: "Sep 2025 - Feb 2026",
    points: [
      "Fixed WCAG accessibility issues in a production Next.js application and added automated accessibility checks to CI/CD to prevent regressions.",
    ],
  },
  {
    title: "Senior Full-Stack Engineer",
    company: "Codvo.ai",
    period: "Apr 2023 - Sep 2025",
    points: [
      "Built the Python microservice for AI-driven structured data extraction from PDFs using the OpenAI API in the NeIO RAG and document-processing platform.",
      "Used NATS for decoupled, resilient messaging between services, and added Langfuse tracing to inspect pipeline behaviour and diagnose failures.",
      "Built a Vue.js internal admin console and shipped a React Native mobile app.",
      "Built frontend and backend for a Saudi enterprise client's IoT platform (6 months), integrating a Camunda rule engine owned by another team; worked with the client remotely through go-live.",
    ],
  },
  {
    title: "Technical Team Lead, Full-Stack",
    company: "SmartFoodSafe",
    period: "Jun 2020 - Mar 2023",
    points: [
      "Led a team of three engineers and owned architecture and delivery for two production applications: Node.js/Express APIs and a React Native app.",
      "Owned stability, scalability and technical decisions while mentoring engineers and staying hands-on in implementation.",
      "Handled client communication on bugs and requirement clarifications, translating issues into fixes and scoped work for the team.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Professional Experience
      </h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>
                {exp.company} | {exp.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {exp.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
