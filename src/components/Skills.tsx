import { Code, Database, Wrench, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "JavaScript", "TypeScript", "Kotlin", "MySQL"],
      color: "purple"
    },
    {
      title: "Web Development",
      icon: Database,
      skills: ["HTML", "Tailwind CSS", "Advanced JavaScript"],
      color: "cyan"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Figma", "IntelliJ-Idea", "Google Cloud AutoML (Vertex)"],
      color: "pink"
    },
    {
      title: "CS Fundamentals",
      icon: BookOpen,
      skills: ["Data Structures & Algorithms", "OOP", "OS", "DBMS", "Computer Networks"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "border-purple/30 hover:border-purple hover:bg-purple/5 group-hover:text-purple",
      cyan: "border-cyan/30 hover:border-cyan hover:bg-cyan/5 group-hover:text-cyan",
      pink: "border-pink/30 hover:border-pink hover:bg-pink/5 group-hover:text-pink",
      orange: "border-orange/30 hover:border-orange hover:bg-orange/5 group-hover:text-orange"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
      <section 
        id="skills" 
        className="relative min-h-screen py-20"
      >
        {/* Dark overlay to separate from background video */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl border-2 border-white/30 shadow-glow hover:shadow-glow-lg transition-all duration-500 rounded-[2rem] p-12">
            {/* Section Title */}
            <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Code className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-purple via-cyan to-pink bg-clip-text">
                My Tech Toolbox
              </h2>
            </div>
            <p className="text-lg text-white/95 font-semibold max-w-2xl mx-auto">
              A collection of technologies and tools I use to bring ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple via-cyan to-pink mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category) => (
              <Card
                key={category.title}
                className="group bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl border-2 border-white/30 shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full border-2 ${getColorClasses(category.color)} flex items-center justify-center transition-colors duration-300 bg-black/50`}>
                      <category.icon className="w-6 h-6 text-white" />
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
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          category.color === 'purple' ? 'bg-purple' : 
                          category.color === 'cyan' ? 'bg-cyan' : 
                          category.color === 'pink' ? 'bg-pink' : 
                          'bg-orange'
                        }`}></div>
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