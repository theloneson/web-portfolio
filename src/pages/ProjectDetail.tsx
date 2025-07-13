import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import NexusBank from "@/assets/NexusBank - Advanced Digital Banking Solutions - Brave 7_10_2025 8_11_56 PM.png";
import weatherImage from "@/assets/project-weather.jpg";
import landingImage from "@/assets/jazzup-3d-shopfront - Brave 7_10_2025 6_33_37 PM.png";
import FitTrack from "@/assets/fittrack.png";
import BukitLawang from "@/assets/Bukit Lawang - North Sumatra's Untamed Paradise - Brave 7_11_2025 4_24_46 PM.png";
import TopmosFarms from "@/assets/TopmosFarms.png";
import Omnifood from "@/assets/OMNIFOOD - Personal - Microsoft​ Edge 7_11_2025 9_40_27 AM.png";


const ProjectDetail = () => {
  const { projectId } = useParams();

  const projects = {
    "NexusBank": {
      title: "NexusBank",
      description: " A responsive digital banking app built with modern frontend tools. Features include money transfers, balance tracking, and a clean, intuitive interface.",
      longDescription: "This project showcases my ability to build secure and responsive financial applications. The banking app features core functionalities such as account balance display, seamless fund transfers, transaction history, and a sleek user interface. Built with a focus on user experience and real-time interactions, it demonstrates frontend integration skills, component design, and data handling ideal for modern fintech solutions.",
      image: NexusBank,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
      features: [
        "View account balance",
        "Transfer funds between accounts",
        "View Investment portfolio",
        "Responsive design",
        "Clean, modern UI"
      ],
      demoUrl: "https://bank-web-wizard-main.netlify.app/",
      githubUrl: "https://github.com/theloneson/bank-web-wizard-main",
    },
    "Omnifood": {
      title: "Omnifood",
      description: "Omnifood is a front-end website for a modern healthy food service, built with HTML, CSS, and JavaScript. It features a clean layout, interactive sections, and smooth navigation, showcasing core web skills without frameworks.",
      longDescription: "Omnifood is a front-end website for a modern, health-focused food delivery service. The project showcases a clean layout, smooth scrolling navigation, and interactive elements like pricing plans and meal selection. Built using only HTML, CSS, and vanilla JavaScript, it highlights core front-end skills without relying on frameworks. While it's not fully responsive or built with React/TypeScript, it reflects a solid understanding of structured layouts, custom styling, and DOM manipulation.",
      image: Omnifood,
      technologies: ["HTML", "JavaScript", "CSS3"],
      features: [
        "Real-time weather data",
        "City-based weather search",
        "5-day weather forecast",
        "Temperature unit conversion",
        "Weather condition icons",
        "Mobile-responsive design"
      ],
      demoUrl: "https://healthyfoodresturant.netlify.app/",
      githubUrl: "https://github.com/theloneson/Healthy-Food-Restaurant-Website-Template-main",
    },
    "Jazz Up E-commerce Website": {
      title: "Jazz Up E-commerce Website",
      description: "A fully responsive e-commerce site built with TypeScript. Showcases hand-painted apparel with a clean layout, functional cart, and modern UI.",
      longDescription: "A TypeScript-powered e-commerce platform built to showcase and sell hand-painted clothing. Features include a responsive design, clean product layout, and a functional cart system — all tailored to highlight wearable art.",
      image: landingImage,
      technologies: ["TypeScript", "CSS3"],
      features: [
        "Fully responsive design",
        "TypeScript component architecture",
        "Functional add-to-cart system",
        "Lightweight and fast performance",
        "Optimized for all screen sizes",
        "Auto-generated modern design"
      ],
      demoUrl: "https://remarkable-froyo-48e316.netlify.app/",
      githubUrl: "https://github.com/theloneson/jazzup-3d-shopfront-main",
    },
    "EcoTourism Website": {
      title: "EcoTourism Website",
      description: "A website promoting eco-tourism in Bukit Lawang, featuring local attractions, accommodations, and booking options.",
      longDescription: "This project highlights the beauty and adventure of eco-tourism in Bukit Lawang. The website provides information on local attractions, eco-friendly accommodations, and booking options for travelers. It aims to promote sustainable tourism practices while showcasing the natural beauty of the region.",
      image: BukitLawang,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      features: [
        "View local attractions",
        "Book eco-friendly accommodations",
        "Explore sustainable tourism practices",
        "Responsive design",
        "Clean, modern UI"
      ],
      demoUrl: "https://moonlit-pixie-550b5c.netlify.app/",
      githubUrl: "https://github.com/theloneson/lawang-jungle-escape-main",
    },
    "FitTrack": {
      title: "FitTrack",
      description: "A personal fitness tracking application with workout logging, progress tracking, and social sharing features.",
      longDescription: "This project showcases my ability to build a comprehensive fitness tracking application. FitTrack allows users to log workouts, track progress over time, and share achievements with friends. The app is designed with a focus on user engagement and motivation, featuring interactive charts and social sharing options.",
      image: FitTrack,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      features: [
        "Log workouts and exercises",
        "Track progress with interactive charts",
        "Set fitness goals and milestones",
        "Share achievements on social media",
        "Responsive design",
        "Clean, modern UI"
      ],
      demoUrl: "https://lifetrackerahead.netlify.app/",
      githubUrl: "https://github.com/theloneson/life-track-ahead-main",
    },
    "TopmosFarms": {
      title: "TopmosFarms",
      description: "An E-commerce platform showcasing plantain chips in various flavors. Features include product listings, shopping cart, and secure checkout.",
      longDescription: "This project demonstrates my ability to build a fully functional e-commerce platform. Topmos Farms allows users to browse a variety of plantain chips, add products to their cart, and complete purchases seamlessly. The platform is designed with a focus on user experience, featuring a clean layout and intuitive navigation.",
      image: TopmosFarms,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      features: [
        "Browse plantain chips by flavor",
        "Add products to cart",
        "Secure checkout process",
        "Responsive design",
        "Clean, modern UI"
      ],
      demoUrl: "https://topmosfarmschips.netlify.app/",
      githubUrl: "https://github.com/theloneson/topmos-chips-3d-store-main",
    },
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            <h1 className="text-xl font-bold text-foreground">Olorunfemi</h1>
          </div>
        </div>
      </nav>

      {/* Project Hero */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.description}
              </p>
            </div>
            
            <div className="mb-12 overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={project.image} 
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Project Details */}
              <div className="lg:col-span-2">
                <Card className="mb-8 bg-gradient-card shadow-elegant">
                  <CardHeader>
                    <CardTitle>About This Project</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-elegant">
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="bg-gradient-card shadow-elegant">
                  <CardHeader>
                    <CardTitle>Technologies Used</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-elegant">
                  <CardHeader>
                    <CardTitle>Project Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="portfolio" className="w-full" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;