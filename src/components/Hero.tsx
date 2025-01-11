import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Abhishek V</h1>
      <h2 className="text-2xl md:text-4xl mb-8 text-muted-foreground">
        Senior Full Stack Engineer
      </h2>
      <p className="text-xl mb-12 max-w-2xl mx-auto">
        Passionate Full Stack Developer with expertise in React, Vue, Node.js,
        and cloud technologies. Experienced in building scalable applications
        and leading development teams.
      </p>
      <div className="flex gap-4 justify-center">
        <Button size="lg" asChild>
          <a href="#projects">
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="mailto:abhishekv.dev@gmail.com">Contact Me</a>
        </Button>
      </div>
    </section>
  );
}
