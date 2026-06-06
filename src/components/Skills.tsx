
import { Code, Database, Wrench, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        "Java",
        "JavaScript",
        "TypeScript",
        "MySQL",
        "PostgreSQL",
        "Kafka",
        "Springboot",
      ],
    },
    {
      title: "Full-Stack Development",
      icon: Database,
      skills: [
        "Node.Js",
        "Tailwind CSS",
        "Advanced JavaScript",
        "ReactJS",
        "MERN",
        "MongoDB",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "IntelliJ-Idea",
        "Google Cloud AutoML (Vertex)",
      ],
    },
    {
      title: "CS Fundamentals",
      icon: BookOpen,
      skills: [
        "Data Structures & Algorithms",
        "OOP",
        "OS",
        "DBMS",
        "Computer Networks",
      ],
    },
  ];

  return (
    <section id="skills" className="relative min-h-screen py-20">
      {/* Black Background */}
      <div className="absolute inset-0 bg-black z-0"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-6xl mx-auto bg-black backdrop-blur-xl border-2 border-yellow-500/20 rounded-[2rem] p-12">

          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Code className="w-8 h-8 text-yellow-400 mr-3" />

              <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
                My Tech Toolbox
              </h2>
            </div>

            <p className="text-lg text-white/95 font-semibold max-w-2xl mx-auto">
              A collection of technologies and tools I use to bring ideas to life
            </p>

            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category) => (
              <Card
                key={category.title}
                className="group bg-black border-2 border-yellow-500/20 hover:shadow-[0_0_35px_rgba(250,204,21,0.4)] transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="p-6">

                  {/* Category Header */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full border-2 border-yellow-500/30 flex items-center justify-center bg-black/50 transition-all duration-300">
                      <category.icon className="w-6 h-6 text-yellow-400" />
                    </div>

                    <h3 className="text-xl font-bold ml-3 text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-white/95 font-medium flex items-center"
                      >
                        <div className="w-2 h-2 rounded-full mr-2 bg-yellow-400"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>

                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
