import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Terminal, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import NexusBank from "@/assets/NexusBank - Advanced Digital Banking Solutions - Brave 7_10_2025 8_11_56 PM.png";
import TopmosFarms from "@/assets/TopmosFarms.png";
import FitTrack from "@/assets/fittrack.png";
import landingImage from "@/assets/jazzup-3d-shopfront - Brave 7_10_2025 6_33_37 PM.png";

const Projects = () => {
  const allProjects = [
    {
      id: "Penguin",
      title: "PENGUIN_PROTOCOL",
      description: "Decentralized Hybrid Messaging Protocol. Built with Socket.IO, Walrus Protocol, and Seal for cryptographic access control.",
      image: NexusBank, 
      technologies: ["React", "Node.js", "Walrus", "Sui", "TypeScript"],
    },
    {
      id: "NexusBank",
      title: "NEXUS_BANK",
      description: "High-performance digital banking UI with seamless fund transfers and real-time balance tracking.",
      image: NexusBank,
      technologies: ["React", "TypeScript", "Tailwind"],
    },
    {
      id: "TopmosFarms",
      title: "TOPMOS_FARMS",
      description: "Full-stack e-commerce architecture handling product cataloging, cart state, and checkout flows.",
      image: TopmosFarms,
      technologies: ["React", "TypeScript", "State Mgt"],
    },
    {
      id: "Jazz Up E-commerce Website",
      title: "JAZZUP_STORE",
      description: "A fully responsive e-commerce site built with TypeScript showcasing hand-painted apparel.",
      image: landingImage,
      technologies: ["TypeScript", "CSS3"],
    },
    {
      id: "FitTrack",
      title: "FIT_TRACKER",
      description: "A personal fitness tracking application with workout logging and progress tracking.",
      image: FitTrack,
      technologies: ["React", "Chart.js", "Context API"],
    }
  ];

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0"></div>

      <nav className="relative z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" asChild className="rounded-none font-mono text-sm hover:bg-primary hover:text-primary-foreground">
            <Link to="/"><ArrowLeft className="h-4 w-4 mr-2" /> /return_home</Link>
          </Button>
          <h1 className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <Terminal className="h-5 w-5" /> ARCHIVE.VIEW
          </h1>
        </div>
      </nav>

      <section className="relative z-10 py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tighter uppercase mb-2 animate-fade-up">Full_Repository</h2>
            <div className="h-1 w-20 bg-primary animate-fade-up delay-100"></div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project, index) => (
              <div key={project.id} className={`brutalist-card group flex flex-col animate-fade-up delay-${(index % 3 + 1) * 100}`}>
                <div className="aspect-video overflow-hidden border-b border-border p-2 bg-muted/20">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col bg-card">
                  <h3 className="text-xl font-bold font-mono tracking-tight mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="rounded-none font-mono text-[10px] uppercase border-border bg-background">{tech}</Badge>
                    ))}
                  </div>
                  <Button variant="outline" asChild className="w-full rounded-none font-mono text-xs border-border hover:border-primary hover:text-primary transition-all">
                    <Link to={`/projects/${project.id}`}>INITIALIZE_VIEW <ExternalLink className="ml-2 h-3 w-3" /></Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;