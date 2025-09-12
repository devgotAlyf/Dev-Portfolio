import { ExternalLink, Github, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "CareerBuilderz - Resume Builder & Job Finder",
      description: "A full-stack web platform that enables users to create professional resumes and discover tailored job opportunities through an AI-powered interface and integrated job search APIs. Features include secure authentication, a fully responsive UI, and a seamless job discovery experience.",
      technologies: ["HTML", "Tailwind CSS", "TypeScript", "Supabase", "Vercel", "Figma", "JSearch API"],
      image: "/career.png",
      liveDemo: "https://careerbuilderz.vercel.app/",
      sourceCode: "https://github.com/devgotAlyf/builderzcareer",
      featured: true
    },
    // Placeholder for future projects
    {
      title: "Coming Soon",
      description: "More exciting projects are in development. Stay tuned for innovative solutions and creative implementations!",
      technologies: ["React", "TypeScript", "Node.js"],
      image: "/placeholder-project-2.jpg",
      liveDemo: "#",
      sourceCode: "#",
      featured: false
    }
  ];

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-20"
    >
      {/* Dark overlay to separate from background video */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90 z-0" />
      
      <div className="container mx-auto px-6 relative z-20">
            <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl border-2 border-white/30 shadow-glow hover:shadow-glow-lg transition-all duration-500 rounded-[2rem] p-12">
            {/* Section Title */}
            < div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <FolderOpen className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-purple via-cyan to-pink bg-clip-text">
                  Things I've Built
                </h2>
              </div>
              <p className="text-lg text-white/95 font-semibold max-w-2xl mx-auto">
                A showcase of projects that demonstrate my passion for creating meaningful digital experiences
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple via-cyan to-pink mx-auto rounded-full mt-6"></div>
            </div>

            {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl border-2 border-white/30 shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image/Visual */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                </div>
                
                {/* Project Title Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-white drop-shadow-lg">{project.title}</h3>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-cyan/30 animate-float"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-pink/30 animate-float-delayed"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* Project Description */}
                  <p className="text-white/95 font-medium leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-4">
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-purple/30 hover:border-purple hover:bg-purple/10 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                    <a 
                      href={project.sourceCode} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-cyan/30 hover:border-cyan hover:bg-cyan/10 transition-all duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Projects Coming Soon */}
        <div className="text-center mt-16">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple/20 to-cyan/20 border border-white/20 flex items-center justify-center">
              <FolderOpen className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">More Projects Coming Soon</h3>
            <p className="text-white/90 font-medium">
              I'm constantly working on new and exciting projects. Check back soon for updates!
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;