import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Terminal } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import NexusBank from "@/assets/NexusBank - Advanced Digital Banking Solutions - Brave 7_10_2025 8_11_56 PM.png";
import TopmosFarms from "@/assets/TopmosFarms.png";
import FitTrack from "@/assets/fittrack.png";
import landingImage from "@/assets/jazzup-3d-shopfront - Brave 7_10_2025 6_33_37 PM.png";

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projects = {
    "Penguin": {
      title: "PENGUIN_PROTOCOL",
      description: "Decentralized Hybrid Messaging Protocol.",
      longDescription: "A Web3 messaging architecture decoupling real-time transport from persistent, decentralized storage to ensure low-latency communication without sacrificing decentralization. Integrates Walrus Protocol for blob storage and Seal for cryptographic access.",
      image: NexusBank, // Fix image source to your actual Penguin image
      technologies: ["React", "Node.js", "Socket.IO", "Walrus", "Seal", "Sui"],
      features: ["Real-time message routing", "Decentralized blob storage integration", "Cryptographic access policies", "zkLogin Authentication"],
      demoUrl: "#",
      githubUrl: "https://github.com/theloneson",
    },
    "NexusBank": {
      title: "NEXUS_BANK",
      description: "High-performance digital banking UI with seamless fund transfers.",
      longDescription: "A fintech architecture demonstrating secure routing, state management, and real-time interaction. Designed with a strict focus on UX and data handling.",
      image: NexusBank,
      technologies: ["React", "TypeScript", "Tailwind CSS", "State Management"],
      features: ["Real-time balance tracking", "Fund transfer simulation", "Responsive dashboard layout"],
      demoUrl: "https://bank-web-wizard-main.netlify.app/",
      githubUrl: "https://github.com/theloneson/bank-web-wizard-main",
    },
    "TopmosFarms": {
      title: "TOPMOS_FARMS",
      description: "Full-stack e-commerce architecture handling product cataloging.",
      longDescription: "This project demonstrates the ability to build a fully functional e-commerce platform handling state, cart logic, and checkout flows efficiently.",
      image: TopmosFarms,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      features: ["Dynamic product routing", "Global cart state", "Checkout simulation"],
      demoUrl: "https://topmosfarmschips.netlify.app/",
      githubUrl: "https://github.com/theloneson/topmos-chips-3d-store-main",
    },
    "FitTrack": {
      title: "FIT_TRACKER",
      description: "A personal fitness tracking application.",
      longDescription: "An interactive dashboard application using Chart.js for data visualization, allowing users to log workouts and map their progress chronologically.",
      image: FitTrack,
      technologies: ["React", "Chart.js", "Context API"],
      features: ["Workout logging", "Data visualization", "State persistence"],
      demoUrl: "https://lifetrackerahead.netlify.app/",
      githubUrl: "https://github.com/theloneson/life-track-ahead-main",
    },
    "Jazz Up E-commerce Website": {
      title: "JAZZUP_STORE",
      description: "Responsive e-commerce site for hand-painted apparel.",
      longDescription: "A clean, modern storefront highlighting responsive UI patterns, image optimization, and standard web-store workflows.",
      image: landingImage,
      technologies: ["TypeScript", "CSS3"],
      features: ["Responsive grid layouts", "Cart functionality", "Modern UI implementation"],
      demoUrl: "https://remarkable-froyo-48e316.netlify.app/",
      githubUrl: "https://github.com/theloneson/jazzup-3d-shopfront-main",
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary selection:text-primary-foreground">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0"></div>

      <nav className="relative z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" asChild className="rounded-none font-mono text-sm hover:bg-primary hover:text-primary-foreground">
            <Link to="/projects"><ArrowLeft className="h-4 w-4 mr-2" /> /return_projects</Link>
          </Button>
          <h1 className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <Terminal className="h-5 w-5" /> PROJECT.INSPECT
          </h1>
        </div>
      </nav>

      <section className="relative z-10 py-16 lg:py-24 animate-fade-up">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-12">
            <h1 className="text-5xl font-bold tracking-tighter uppercase mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground font-mono">{project.description}</p>
          </div>
          
          <div className="brutalist-card p-2 mb-12">
            <img src={project.image} alt={project.title} className="w-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 border border-border" />
          </div>

          <div className="grid gap-8 lg:grid-cols-3 font-mono">
            <div className="lg:col-span-2 space-y-8">
              <div className="brutalist-card p-8">
                <h2 className="text-xl font-bold uppercase mb-4 border-b border-border pb-2">Architecture_Overview</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.longDescription}</p>
              </div>
              <div className="brutalist-card p-8">
                <h2 className="text-xl font-bold uppercase mb-4 border-b border-border pb-2">Core_Modules</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.features.map((feature, i) => (
                    <li key={i}>[+] {feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="brutalist-card p-8">
                <h2 className="text-xl font-bold uppercase mb-4 border-b border-border pb-2">Dependencies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="rounded-none text-[10px] uppercase border-border bg-background">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="brutalist-card p-8 space-y-4">
                <h2 className="text-xl font-bold uppercase mb-4 border-b border-border pb-2">Deployment</h2>
                <Button asChild className="w-full rounded-none uppercase bg-primary text-primary-foreground hover:bg-transparent border-2 border-primary hover:text-primary transition-all">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">LIVE_PREVIEW <ExternalLink className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button variant="outline" asChild className="w-full rounded-none uppercase border-border hover:border-primary hover:text-primary transition-all">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">SOURCE_CODE <Github className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;