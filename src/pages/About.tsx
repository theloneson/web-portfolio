import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const skills = ["TypeScript", "React", "Node.js", "Walrus Protocol", "Sui", "Tailwind CSS", "Socket.IO", "Next.js", "Git", "REST-APIs"];

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary selection:text-primary-foreground">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0"></div>

      <nav className="relative z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" asChild className="rounded-none font-mono text-sm hover:bg-primary hover:text-primary-foreground">
            <Link to="/"><ArrowLeft className="h-4 w-4 mr-2" /> /return_home</Link>
          </Button>
          <h1 className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <Terminal className="h-5 w-5" /> SYSTEM.ABOUT
          </h1>
        </div>
      </nav>

      <section className="relative z-10 py-20 lg:py-32 animate-fade-up">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-16">
            <h1 className="text-5xl font-bold tracking-tighter uppercase mb-2">Developer_Profile</h1>
            <div className="h-1 w-20 bg-primary"></div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="brutalist-card p-2">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="Olorunfemi Amos" className="w-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 border border-border" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="brutalist-card p-8">
                <h2 className="text-2xl font-bold font-mono uppercase mb-4 border-b border-border pb-2">Initialize_Sequence</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm font-mono">
                  <p>{">"} I am a frontend developer and Web3 architect.</p>
                  <p>{">"} I specialize in bridging the gap between high-performance Web2 user interfaces and decentralized Web3 infrastructure. I don't just build apps; I architect sovereign data solutions.</p>
                  <p>{">"} Currently focused on React, TypeScript, and integrating cryptographic access controls (Seal) with decentralized blob storage (Walrus Protocol).</p>
                </div>
              </div>

              <div className="brutalist-card p-8">
                <h2 className="text-2xl font-bold font-mono uppercase mb-4 border-b border-border pb-2">Tech_Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="rounded-none font-mono text-xs border-border bg-background">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;