import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Linkedin, Mail, ArrowDown, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import NexusBank from "@/assets/NexusBank - Advanced Digital Banking Solutions - Brave 7_10_2025 8_11_56 PM.png";
import weatherImage from "@/assets/project-weather.jpg";
import landingImage from "@/assets/jazzup-3d-shopfront - Brave 7_10_2025 6_33_37 PM.png";
import FitTrack from "@/assets/fittrack.png";
import BukitLawang from "@/assets/Bukit Lawang - North Sumatra's Untamed Paradise - Brave 7_11_2025 4_24_46 PM.png";
import TopmosFarms from "@/assets/TopmosFarms.png";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const projects = [
    {
      id: "NexusBank",
      title: "NexusBank",
      description: "A responsive digital banking app built with modern frontend tools. Features include money transfers, balance tracking, and a clean, intuitive interface.",
      image: NexusBank,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
    },
    {
      id: "weather-dashboard", 
      title: "Weather Dashboard",
      description: "A real-time weather application that displays current conditions and forecasts. Integrated with OpenWeatherMap API for accurate weather data.",
      image: weatherImage,
      technologies: ["React", "API Integration", "CSS3"],
    },
    {
      id: "Jazz Up E-commerce Website",
      title: "Jazz Up E-commerce Website",
      description: "A fully responsive e-commerce site built with TypeScript. Showcases hand-painted apparel with a clean layout, functional cart, and modern UI.",
      image: landingImage,
      technologies: ["TypeScript", "CSS3"],
    },
    {
      id: "EcoTourism Website",
      title: "EcoTourism Website",
      description: "A website promoting eco-tourism in Bukit Lawang, featuring local attractions, accommodations, and booking options.",
      image: BukitLawang,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "FitTrack",
      title: "FitTrack",
      description: "A personal fitness tracking application with workout logging, progress tracking, and social sharing features.",
      image: FitTrack,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "TopmosFarms",
      title: "TopmosFarms",
      description: "A responsive digital banking app built with modern frontend tools. Features include money transfers, balance tracking, and a clean, intuitive interface.",
      image: TopmosFarms,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground">Olorunfemi Amos</h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => scrollToSection("projects")}>
                Projects
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection("about")}>
                About
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection("contact")}>
                Contact
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/theloneson" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-hero pt-24 pb-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl animate-fade-in">
              Olorunfemi Amos
            </h1>
            <h2 className="mb-8 text-2xl font-semibold text-primary sm:text-3xl animate-fade-in">
              Frontend Developer & Web Enthusiast
            </h2>
            <p className="mb-12 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto animate-fade-in">
              Passionate about crafting beautiful, interactive user interfaces and exploring the latest in modern web technologies. 
              I transform ideas into engaging digital experiences with clean code and attention to detail.
            </p>
            <Button 
              variant="portfolio" 
              size="lg" 
              onClick={() => scrollToSection("projects")}
              className="animate-scale-in group"
            >
              See Projects
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Here are some of my recent projects that showcase my skills in frontend development
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden bg-gradient-card shadow-elegant transition-all duration-300 hover:shadow-hover hover:scale-[1.02]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
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
                  <Button variant="portfolio" asChild className="w-full group">
                    <Link to={`/projects/${project.id}`}>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      View Project
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 items-center lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face" 
                alt="Olorunfemi Amos"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elegant"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                About Me
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Hello! I'm Olorunfemi, a passionate frontend developer with a deep love for UI/UX design 
                  and modern web technologies. I specialize in creating beautiful, interactive user interfaces 
                  that provide seamless user experiences across all devices.
                </p>
                <p className="text-lg">
                  My expertise spans React, TypeScript, Tailwind CSS, and the latest web frameworks. 
                  I'm constantly exploring new tools and design patterns, staying at the forefront of 
                  web development to deliver cutting-edge digital solutions that combine functionality 
                  with exceptional visual design.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                I'm always interested in new opportunities and collaborations. 
                Let's discuss how we can work together!
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-card-foreground">
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or just say hello!"
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" variant="portfolio" size="lg" className="w-full group">
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="mb-6 text-xl font-semibold text-foreground">
                    Let's connect on social media
                  </h3>
                  <div className="space-y-4">
                    <Button variant="ghost" size="lg" asChild className="w-full justify-start">
                      <a href="https://github.com/theloneson" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5 mr-3" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="ghost" size="lg" asChild className="w-full justify-start">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5 mr-3" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="ghost" size="lg" asChild className="w-full justify-start">
                      <a href="mailto:olorunfemiamos87@gmail.com">
                        <Mail className="h-5 w-5 mr-3" />
                        olorunfemiamos87@gmail.com
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to messages within 24 hours. For urgent inquiries, 
                    feel free to reach out directly via email or LinkedIn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="lg" asChild className="hover:scale-110 transition-transform">
                <a href="https://github.com/theloneson" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild className="hover:scale-110 transition-transform">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
            
            {/* Copyright */}
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Made with ❤️ using React and Tailwind CSS
              </p>
              <p className="text-xs text-muted-foreground">
                © 2024 Olorunfemi Amos. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;