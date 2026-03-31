import { ExternalLink, Github, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveDemo: string;
  sourceCode: string;
  featured?: boolean;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "CareerBuilderz - Resume Builder & Job Finder",
      description:
        "A full-stack web platform that enables users to create professional resumes and discover tailored job opportunities through an AI-powered interface.",
      technologies: [
        "HTML",
        "Tailwind CSS",
        "TypeScript",
        "Supabase",
        "Vercel",
        "Figma",
        "JSearch API",
      ],
      image: "/career.png",
      liveDemo: "https://careerbuilderz.vercel.app/",
      sourceCode: "https://github.com/devgotAlyf/builderzcareer",
      featured: true,
    },

    // ✅ DocSpot added correctly
    {
      title: "DocSpot – Doctor Appointment Platform",
      description:
        "A full-stack healthcare platform that allows users to search doctors, book appointments, and manage medical records with a clean and responsive UI.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Supabase",
        "Node.js",
        "JavaScript",
      ],
      image: "/docspot.png",
      liveDemo: "https://doc-spot-web.vercel.app/",
      sourceCode: "https://github.com/devgotAlyf/DocSpot",
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90 z-0" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl border-2 border-white/30 shadow-glow rounded-[2rem] p-12">

          {/* Title */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <FolderOpen className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Things I've Built
              </h2>
            </div>
            <p className="text-lg text-white/95 font-semibold max-w-2xl mx-auto">
              A showcase of projects that demonstrate my passion for creating meaningful digital experiences
            </p>
          </div>

          {/* ✅ GRID FIXED */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project) => (
              <Card
                key={project.title}
                className={`group bg-gradient-to-br from-black/95 to-gray-900/95 border-2 border-white/30 shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                  project.featured ? "lg:col-span-3" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-64">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/50" />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-white text-center px-4">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-white/90 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>

                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}

            {/* ✅ Coming Soon (kept properly OUTSIDE array) */}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  Coming Soon
                </h3>
                <p className="text-gray-400 text-center mb-4">
                  More exciting projects are in development.
                </p>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 border py-2 rounded opacity-50">
                  Live Demo
                </button>
                <button className="flex-1 border py-2 rounded opacity-50">
                  Code
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
