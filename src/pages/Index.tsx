import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Instagram, MessageCircle, Menu, X } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile-placeholder.png";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Plataforma E-commerce",
      description: "Loja virtual completa com integração de pagamentos e gestão de estoque em tempo real",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
      link: "#"
    },
    {
      title: "App de Tarefas",
      description: "Aplicativo de gestão de tarefas com interface de arrastar e soltar",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Painel de Clima",
      description: "Dashboard de previsão do tempo com mapas interativos e localização em tempo real",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Analytics de Redes Sociais",
      description: "Plataforma de visualização de dados para métricas e engajamento em redes sociais",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Blog Pessoal CMS",
      description: "Sistema de blog com suporte a markdown e foco em SEO",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com", color: "hover:text-foreground" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-primary" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "hover:text-pink-600" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me", color: "hover:text-green-600" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Portfolio</h2>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
            {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted"
      >
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Olá, eu sou <span className="text-primary">Pedro Henrique Corrêa</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Desenvolvedor Front-end / Full-stack
          </p>

          <p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Crio aplicações web modernas, responsivas e focadas em uma boa experiência para o
            usuário.
          </p>

          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 animate-scale-in"
            style={{ animationDelay: "0.6s" }}
          >
            Ver meus projetos
          </Button>
        </div>
      </section>

      

      {/* About Section */}
      <section id="about" className="py-20 bg-card fade-on-scroll opacity-0">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Sobre mim</h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg flex-shrink-0">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Sou um desenvolvedor apaixonado por tecnologia, atualmente estudando desenvolvimento de software
                e focado em criar aplicações web modernas e bem estruturadas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gosto de trabalhar tanto no front-end quanto no back-end, sempre buscando aprender novas ferramentas e boas práticas.
                Meu objetivo é contribuir com projetos reais, crescer na área e fazer parte de times de desenvolvimento colaborativos.
              </p>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background fade-on-scroll opacity-0">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Projetos</h2>
          <p className="text-center text-muted-foreground mb-12">Alguns projetos que representam meu estilo de desenvolvimento.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                onClick={() => window.open(project.link, "_blank")}
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card fade-on-scroll opacity-0">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contato</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estou sempre aberto para conversar sobre novos projetos, ideias ou oportunidades. Pode me chamar em qualquer uma das redes abaixo.
          </p>
          
          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-2 p-6 rounded-lg bg-background hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:scale-110 ${social.color}`}
              >
                <social.icon size={32} className="transition-transform duration-300 group-hover:scale-125" />
                <span className="font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2025 Pedro Henrique Corrêa. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;