import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React/React Native", level: 95 },
  { name: "Vue.js", level: 90 },
  { name: "Node.js/Express", level: 90 },
  { name: "MongoDB", level: 85 },
  { name: "Python", level: 80 },
  { name: "Next.js/Remix", level: 85 },
  { name: "Docker/Kubernetes", level: 75 },
  { name: "AWS", level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </section>
  );
}
