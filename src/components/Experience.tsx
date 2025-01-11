import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Full Stack Engineer - I",
    company: "Codvo.ai",
    period: "Apr 2023 - Present",
    description:
      "Developed React Native mobile apps and Vue.js admin console. Worked on Python server for RAG pipeline using NATS messaging. Led Agile methodologies and cross-functional collaboration.",
  },
  {
    title: "Full Stack Developer (Technical Team Lead)",
    company: "SmartFoodSafe",
    period: "Jun 2020 - Mar 2023",
    description:
      "Led development of MERN stack applications focused on food safety. Built Node.js/Express APIs and maintained React Native app architecture. Managed multiple successful projects.",
  },
  {
    title: "Web Developer Intern",
    company: "ScootQ",
    period: "Jan 2020 - Mar 2020",
    description:
      "Developed supermarket dashboard using MEVN stack and implemented automated E-mailing system with user-friendly interface.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Professional Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>
                {exp.company} | {exp.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
