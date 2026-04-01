import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Terminal, Send, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary selection:text-primary-foreground">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0"></div>

      <nav className="relative z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" asChild className="rounded-none font-mono text-sm hover:bg-primary hover:text-primary-foreground">
            <Link to="/"><ArrowLeft className="h-4 w-4 mr-2" /> /return_home</Link>
          </Button>
          <h1 className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <Terminal className="h-5 w-5" /> NETWORK.CONNECT
          </h1>
        </div>
      </nav>

      <section className="relative z-10 py-20 lg:py-32 animate-fade-up">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-16">
            <h1 className="text-5xl font-bold tracking-tighter uppercase mb-2">Establish_Uplink</h1>
            <div className="h-1 w-20 bg-primary"></div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="brutalist-card p-8">
              <form className="space-y-6 font-mono text-sm" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-muted-foreground uppercase">IDENTIFIER [NAME]</label>
                  <Input className="rounded-none border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary" placeholder="Enter string..." />
                </div>
                <div className="space-y-2">
                  <label className="text-muted-foreground uppercase">ADDRESS [EMAIL]</label>
                  <Input type="email" className="rounded-none border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary" placeholder="user@host.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-muted-foreground uppercase">PAYLOAD [MESSAGE]</label>
                  <Textarea className="rounded-none border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary resize-none" rows={6} placeholder="Transmit data..." />
                </div>
                <Button className="w-full rounded-none font-mono uppercase bg-primary text-primary-foreground hover:bg-transparent border-2 border-primary hover:text-primary transition-all group">
                  EXECUTE_TRANSMIT <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            <div className="space-y-6 font-mono">
              <div className="brutalist-card p-8">
                <h3 className="text-xl font-bold uppercase mb-4 border-b border-border pb-2">Endpoints</h3>
                <div className="space-y-4">
                  <a href="https://github.com/theloneson" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-5 w-5" /> /theloneson
                  </a>
                  <a href="#" target="_blank" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" /> /olorunfemi-amos
                  </a>
                  <a href="mailto:olorunfemiamos87@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" /> olorunfemiamos87@gmail.com
                  </a>
                </div>
              </div>
              <div className="brutalist-card p-6 border-l-4 border-l-green-500 bg-card">
                <p className="text-sm text-muted-foreground">
                  STATUS: <span className="text-green-500 font-bold">ACCEPTING_CONNECTIONS</span><br/>
                  RESPONSE_TIME: {"<"} 24_HOURS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;