import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft, Ban } from "lucide-react";
import { Link } from "react-router-dom";
import NexusBank from "@/assets/NexusBank - Advanced Digital Banking Solutions - Brave 7_10_2025 8_11_56 PM.png";
import weatherImage from "@/assets/project-weather.jpg";
import landingImage from "@/assets/project-landing.jpg";
import FitTrack from "@/assets/fittrack.png";
import BukitLawang from "@/assets/Bukit Lawang - North Sumatra's Untamed Paradise - Brave 7_11_2025 4_24_46 PM.png";
import TopmosFarms from "@/assets/TopmosFarms.png";
import Omnifood from "@/assets/OMNIFOOD - Personal - Microsoft​ Edge 7_11_2025 9_40_27 AM.png";

const Projects = () => {
  const projects = [
    {
      id: "NexusBank",
      title: "NexusBank",
      description: "A responsive task management app built with React and local storage. Features include adding, editing, and deleting tasks with a clean, modern interface.",
      image: NexusBank,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
      liveUrl: "https://bank-web-wizard-main.netlify.app/",
      githubUrl: "https://github.com/theloneson/bank-web-wizard-main",
    },
    {
      id: "Omnifood",
      title: "Omnifood",
      description: "Omnifood is a front-end website for a modern healthy food service, built with HTML, CSS, and JavaScript. It features a clean layout, interactive sections, and smooth navigation, showcasing core web skills without frameworks.",
      image: Omnifood,
      technologies: ["HTML", "JavaScript", "CSS3"],
      liveUrl: "https://healthyfoodresturant.netlify.app/",
      githubUrl: "https://github.com/theloneson/Healthy-Food-Restaurant-Website-Template-main",
    },
    {
      id: "Jazz Up E-commerce Website",
      title: "Jazz Up E-commerce Website",
      description: "A fully responsive e-commerce site built with TypeScript. Showcases hand-painted apparel with a clean layout, functional cart, and modern UI.",
      image: landingImage,
      technologies: ["TypeScript", "CSS3"],
      liveUrl: "https://remarkable-froyo-48e316.netlify.app/",
      githubUrl: "https://github.com/theloneson/jazzup-3d-shopfront-main",
    },
    {
      id: "EcoTourism Website",
      title: "EcoTourism Website",
      description: "A website promoting eco-tourism in Bukit Lawang, featuring local attractions, accommodations, and booking options.",
      image: BukitLawang,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://moonlit-pixie-550b5c.netlify.app/",
      githubUrl: "https://github.com/theloneson/lawang-jungle-escape-main",
    },
    {
      id: "FitTrack",
      title: "FitTrack",
      description: "A personal fitness tracking application with workout logging, progress tracking, and social sharing features.",
      image: FitTrack,
      technologies: ["React", "Chart.js", "Context API", "CSS Modules"],
      liveUrl: "https://lifetrackerahead.netlify.app/",
      githubUrl: "https://github.com/theloneson/life-track-ahead-main",
    },
    {
      id: "TopmosFarms",
      title: "TopmosFarms",
      description: "An E-commerce platform showcasing plantain chips in various flavors. Features include product listings, shopping cart, and secure checkout.",
      image: TopmosFarms,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://topmosfarmschips.netlify.app/",
      githubUrl: "https://github.com/theloneson/topmos-chips-3d-store-main",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-xl font-bold text-foreground">Olorunfemi Amos</h1>
          </div>
        </div>
      </nav>

      {/* Projects Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl animate-fade-in">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              A collection of projects showcasing my frontend development skills and passion for creating interactive web experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group bg-gradient-card shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="portfolio" size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        View Live
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;