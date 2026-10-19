import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

// GitHub Pages is static, so there is no backend to receive a form;
// link straight to the channels that actually reach me.
export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="text-muted-foreground mb-8">
        Based in Bangalore, India. Email is the fastest way to reach me.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button size="lg" asChild>
          <a href="mailto:abhishekv.dev@gmail.com">
            <Mail className="mr-2 h-5 w-5" />
            abhishekv.dev@gmail.com
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a
            href="https://linkedin.com/in/abhishekvdev0498"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a
            href="https://github.com/abhi0498"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </a>
        </Button>
      </div>
    </section>
  );
}
