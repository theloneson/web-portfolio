import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Code, Trophy, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const timeline = [
    {
      year: "2022",
      title: "Started Learning Web Development",
      description: "Began my journey with HTML, CSS, and JavaScript fundamentals.",
      icon: <Code className="h-4 w-4" />,
    },
    {
      year: "2023",
      title: "Learned React & Modern Tools",
      description: "Mastered React, TypeScript, and modern development tools like Tailwind CSS.",
      icon: <Trophy className="h-4 w-4" />,
    },
    {
      year: "2024",
      title: "Built 6+ Real Projects",
      description: "Created multiple full-stack projects and contributed to open source.",
      icon: <Heart className="h-4 w-4" />,
    },
  ];

  const skills = [
    "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3",
    "Git", "Responsive Design", "React Router", "API Integration", "Vite", "SCSS"
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

      {/* About Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl animate-fade-in">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in">
                Frontend Developer & Web Enthusiast
              </p>
            </div>

            {/* Main Content */}
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 mb-16">
              {/* Left - Photo & Intro */}
              <div className="animate-fade-in">
                <div className="mb-8 overflow-hidden rounded-lg shadow-elegant">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Olorunfemi Amos"
                    className="h-96 w-full object-cover"
                  />
                </div>
                <Card className="bg-gradient-card shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      What I Love
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm passionate about creating interactive user interfaces and learning modern web technologies. 
                      Every day brings new challenges and opportunities to grow as a developer.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Right - Personal Intro */}
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Card className="bg-gradient-card shadow-elegant h-fit">
                  <CardHeader>
                    <CardTitle>Hello, I'm Olorunfemi!</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      I'm a passionate frontend developer who discovered the world of web development in 2022. 
                      What started as curiosity has grown into a deep love for creating beautiful, functional web experiences.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I specialize in React and modern JavaScript, with a keen eye for responsive design and user experience. 
                      I enjoy solving complex problems and turning ideas into interactive digital solutions.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
                      or sharing my learning journey with the developer community.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Learning Timeline */}
            <div className="mb-16">
              <h2 className="mb-8 text-center text-3xl font-bold text-foreground animate-fade-in">
                My Learning Journey
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {timeline.map((item, index) => (
                  <Card 
                    key={item.year} 
                    className="bg-gradient-card shadow-elegant hover:shadow-hover transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        {item.icon}
                      </div>
                      <CardTitle className="text-xl">{item.year}</CardTitle>
                      <CardDescription className="font-semibold text-foreground">
                        {item.title}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Skills & Tech Stack */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Skills & Tech Stack</CardTitle>
                  <CardDescription>
                    Technologies I work with and continue to learn
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;