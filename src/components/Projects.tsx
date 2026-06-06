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
    // 🔥 DocSpot FIRST (FEATURED)
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
      featured: true,
    },

    // 👉 Ledger SECOND
    {
      title: "Ledger — Autonomous Backend Audit System",
      description:
        "A Spring Boot backend for event-driven transaction auditing. It stores transactions as append-only events in PostgreSQL, processes them asynchronously through Kafka, uses Redis for idempotent consumer protection, and applies AI-based audit decisions to mark transactions as APPROVED or FLAGGED. Includes Swagger UI for API testing and deployed on Render.",
      technologies: [
        "Java",
        "Spring Boot",
        "Apache Kafka",
        "PostgreSQL",
        "Redis",
        "Swagger",
        "Render",
      ],
      image: "/ledger.png",
      liveDemo: "https://ledger-2qwo.onrender.com/",
      sourceCode: "https://github.com/devgotAlyf/Ledger",
      featured: false,
    },

    // 👉 CareerBuilderz THIRD
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
      featured: false,
    },
  ];
return (
  <section id="projects" className="relative min-h-screen py-20">
    <div className="absolute inset-0 bg-black z-0" />

    <div className="container mx-auto px-6 relative z-20">
      <div className="max-w-6xl mx-auto bg-black backdrop-blur-xl border border-yellow-500/20 rounded-[2rem] p-12">

        {/* Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <FolderOpen className="w-8 h-8 text-yellow-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Things I've Built
            </h2>
          </div>

          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            A showcase of projects that demonstrate my passion for creating meaningful digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={`group relative bg-black border border-yellow-500/20 transition-all duration-500 overflow-hidden
              hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(250,204,21,0.6)]
              ${project.featured ? "lg:col-span-3" : ""}`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-yellow-400/20 blur-xl"></div>

              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-white text-center px-4">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <p className="text-white/90 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-black text-white border border-yellow-500/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 transition">
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
                    <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 transition">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}

          <div className="rounded-2xl border border-yellow-500/20 bg-black p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-center mb-4 text-white">
                Coming Soon
              </h3>

              <p className="text-gray-400 text-center mb-4">
                More exciting projects are in development.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 border border-yellow-500/20 py-2 rounded opacity-50 text-white">
                Live Demo
              </button>

              <button className="flex-1 border border-yellow-500/20 py-2 rounded opacity-50 text-white">
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
