import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Send, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

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
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

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

      {/* Contact Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl animate-fade-in">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
                I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <Card className="bg-gradient-card shadow-elegant animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-card-foreground flex items-center gap-2">
                    <Mail className="h-6 w-6 text-primary" />
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary hover:border-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary hover:border-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, ask a question, or just say hello!"
                        rows={6}
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary hover:border-primary/50 resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="portfolio" 
                      size="lg" 
                      className="w-full group"
                    >
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info & Social Links */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {/* Contact Information */}
                <Card className="bg-gradient-card shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-card-foreground">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>olorunfemi.amos@email.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+234 (0) 123 456 7890</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Lagos, Nigeria</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="bg-gradient-card shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-card-foreground">
                      Connect With Me
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      variant="ghost" 
                      size="lg" 
                      asChild 
                      className="w-full justify-start hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    >
                      <a 
                        href="https://github.com/olorunfemiamos" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <Github className="h-5 w-5 mr-3 transition-transform group-hover:scale-110" />
                        GitHub
                      </a>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="lg" 
                      asChild 
                      className="w-full justify-start hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    >
                      <a 
                        href="https://linkedin.com/in/olorunfemiamos" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <Linkedin className="h-5 w-5 mr-3 transition-transform group-hover:scale-110" />
                        LinkedIn
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="bg-gradient-card shadow-elegant">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500 mt-2 animate-pulse"></div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Quick Response</h4>
                        <p className="text-sm text-muted-foreground">
                          I typically respond to messages within 24 hours. For urgent inquiries, 
                          feel free to reach out directly via email or LinkedIn.
                        </p>
                      </div>
                    </div>
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

export default Contact;