import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Terminal, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Image Imports
import NexusBank from "@/assets/NexusBank - Advanced Digital Banking Solutions - Brave 7_10_2025 8_11_56 PM.png";
import TopmosFarms from "@/assets/TopmosFarms.png";

// --- 3D COMPONENT: Stealth-Wealth Brutalist Rocket ---
const InteractiveRocket = () => {
  const groupRef = useRef<THREE.Group>(null);
  const exhaustRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (groupRef.current) {
      const baseRotationY = t * 0.2;
      const mouseX = (state.pointer.x * Math.PI) / 4;
      const mouseY = (state.pointer.y * Math.PI) / 4;
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouseY + 0.2, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouseX + baseRotationY, 0.05);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -mouseX * 0.5 - 0.2, 0.05);
      
      groupRef.current.position.y = Math.sin(t * 2) * 0.1 - 0.5;
    }
    
    if (exhaustRef.current) {
      exhaustRef.current.scale.y = 1 + Math.sin(t * 50) * 0.2 + Math.random() * 0.1;
      const material = exhaustRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.4 + Math.random() * 0.4;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, -0.5, 0]} scale={0.8}>
        
        {/* Nose Cone (Brushed Steel) */}
        <mesh position={[0, 3, 0]}>
          <coneGeometry args={[1, 2, 8]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.3} metalness={0.8} />
        </mesh>

        {/* Main Fuselage (Void Black / Matte Graphite) */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[1, 1, 3, 8]} />
          <meshStandardMaterial color="#09090b" roughness={0.8} metalness={0.2} />
        </mesh>

        {/* 4 Aerodynamic Fins (Dark Slate) */}
        {[0, 1, 2, 3].map((i) => (
          <mesh 
            key={i} 
            position={[
              Math.cos((i * Math.PI) / 2) * 1.3, 
              -0.5, 
              Math.sin((i * Math.PI) / 2) * 1.3
            ]} 
            rotation={[0, (-i * Math.PI) / 2, Math.PI / 8]}
          >
            <boxGeometry args={[1.2, 2, 0.1]} />
            <meshStandardMaterial color="#18181b" roughness={0.5} metalness={0.5} />
          </mesh>
        ))}

        {/* Engine Housing (Industrial Metal) */}
        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.8, 1.2, 1, 8]} />
          <meshStandardMaterial color="#27272a" roughness={0.6} metalness={0.7} />
        </mesh>

        {/* --- THE BLASTERS (Clean White Burn, No Neon) --- */}
        <mesh ref={exhaustRef} position={[0, -2.8, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.5, 2.5, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
        </mesh>
        <mesh position={[0, -2.4, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.2, 1.5, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
        </mesh>

      </group>
    </Float>
  );
};

// --- MAIN PAGE COMPONENT ---
const Index = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "30%"]);
  const objectY = useTransform(scrollY, [0, 1000], ["0%", "-50%"]);

  const eliteProjects = [
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
    }
  ];

  return (
    <div className="min-h-screen bg-background relative selection:bg-foreground selection:text-background overflow-hidden">
      
      {/* PARALLAX LAYER: Background Grid (Subtle, No Glow) */}
      <motion.div 
        style={{ y: backgroundY }} 
        className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0 h-[150vh]"
      />

      {/* PARALLAX LAYER: Interactive 3D Canvas */}
      <motion.div 
        style={{ y: objectY }}
        className="absolute top-0 right-0 w-full lg:w-1/2 h-[80vh] z-20 pointer-events-auto"
      >
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.4} />
          {/* Stark, clinical white lighting. No colored lights. */}
          <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#a1a1aa" />
          <InteractiveRocket />
        </Canvas>
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity">
            <Terminal className="h-5 w-5" /> OLORUNFEMI_AMOS
          </Link>
          <div className="hidden md:flex items-center space-x-8 font-mono text-sm">
            <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">/projects</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">/about</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">/contact</Link>
            <a href="https://github.com/theloneson" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">/github</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 lg:pt-48 lg:pb-24 pointer-events-none">
        <div className="container mx-auto px-6 max-w-5xl pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-mono text-muted-foreground mb-6 flex items-center gap-2"
          >
            {/* Simple matte green indicator. No drop shadow. */}
            <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
            SYSTEM.STATUS: ONLINE // LAGOS_WAT
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl sm:text-8xl font-bold tracking-tighter mb-8 uppercase leading-[0.9] relative z-10 mix-blend-difference"
          >
            <span className="text-foreground">Full-Stack</span> <br/> 
            {/* Reverted to the stark hollow text outline */}
            <span className="text-transparent border-text">
              Software Developer
            </span>
            <span className="inline-block w-8 h-12 sm:h-20 bg-foreground ml-3 animate-blink align-baseline"></span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 text-xl text-muted-foreground max-w-2xl leading-relaxed backdrop-blur-sm bg-background/30 p-2 rounded"
          >
            Architecting decentralized infrastructure, high-performance React applications, and sovereign data protocols. I don't just build UIs; I build systems.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-4 font-mono"
          >
            <Button size="lg" asChild className="rounded-none border-2 border-foreground bg-foreground text-background font-bold hover:bg-transparent hover:text-foreground transition-all group pointer-events-auto">
              <Link to="/projects">
                DEPLOY_PROJECTS <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Ticker Tape (Monochrome) */}
      <div className="relative z-10 border-y border-border bg-muted/10 py-3 overflow-hidden font-mono text-xs text-muted-foreground uppercase tracking-widest backdrop-blur-md">
        <div className="animate-marquee flex gap-8 items-center">
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex gap-8">
              <span><span className="text-foreground opacity-50 mr-2">///</span>REACT.JS</span> 
              <span><span className="text-foreground opacity-50 mr-2">///</span>TYPESCRIPT</span> 
              <span><span className="text-foreground opacity-50 mr-2">///</span>NODE.JS</span> 
              <span><span className="text-foreground opacity-50 mr-2">///</span>SUI NETWORK</span> 
              <span><span className="text-foreground opacity-50 mr-2">///</span>WALRUS PROTOCOL</span> 
              <span><span className="text-foreground opacity-50 mr-2">///</span>SMART CONTRACTS</span> 
              <span><span className="text-foreground opacity-50 mr-2">///</span>SYSTEM DESIGN</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <section className="relative z-10 py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter uppercase mb-2 text-foreground">Build_Log</h2>
              <div className="h-1 w-20 bg-foreground"></div>
            </div>
            <Link to="/projects" className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:block">
              VIEW_ALL_RECORDS {">"}
            </Link>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {eliteProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="brutalist-card group flex flex-col rounded-none overflow-hidden"
              >
                <div className="aspect-video overflow-hidden border-b border-border bg-black">
                  {/* Re-added the grayscale filter so projects match the stark aesthetic until hovered */}
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex-1 flex flex-col bg-card">
                  <h3 className="text-xl font-bold font-mono tracking-tight mb-3 text-foreground transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="rounded-none font-mono text-[10px] uppercase bg-background text-foreground border-border">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" asChild className="w-full rounded-none font-mono text-xs border-border text-foreground hover:bg-foreground hover:text-background transition-all">
                    <Link to={`/projects/${project.id}`}>INITIALIZE_VIEW <ExternalLink className="ml-2 h-3 w-3" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;