
import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      institution: "Bangalore Institute of Technology (BIT)",
      degree: "B.E in Electronics & Communication",
      years: "2023 - 2027",
      status: "Current",
      description:
        "Pursuing Bachelor's degree with focus on Electronics and Communication Engineering, gaining comprehensive knowledge in digital systems, communication protocols, and software development.",
    },
    {
      institution: "Little Flower House",
      degree: "Senior Secondary Education (Class XII)",
      years: "2022 - 2023",
      status: "Completed",
      description:
        "Completed higher secondary education with strong foundation in Mathematics and Science subjects.",
    },
    {
      institution: "Little Flower House (CATJEE)",
      degree: "Secondary Education (Class X)",
      years: "2020 - 2021",
      status: "Completed",
      description:
        "Completed secondary education with excellent academic performance and developed strong analytical skills.",
    },
  ];

  return (
    <section id="education" className="relative min-h-screen py-20">
      <div className="absolute inset-0 bg-black z-0"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-6xl mx-auto bg-black backdrop-blur-xl border-2 border-yellow-500/20 rounded-[2rem] p-12">

          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
                My Academic Journey
              </h2>
            </div>

            <p className="text-lg text-white/95 font-semibold max-w-2xl mx-auto">
              The educational foundation that shaped my technical expertise and
              problem-solving abilities
            </p>

            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">

              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-yellow-400/40 transform md:-translate-x-1/2"></div>

              {educationData.map((item, index) => (
                <div
                  key={item.institution}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 border-4 border-black shadow-lg z-10"></div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <Card className="group bg-black border-2 border-yellow-500/20 hover:shadow-[0_0_35px_rgba(250,204,21,0.4)] transition-all duration-500 transform hover:-translate-y-2">
                      <div className="p-6">

                        {/* Institution Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                              {item.institution}
                            </h3>

                            <p className="text-lg font-medium text-yellow-400">
                              {item.degree}
                            </p>
                          </div>

                          <div
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.status === "Current"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-yellow-500/20 text-yellow-400"
                            }`}
                          >
                            {item.status}
                          </div>
                        </div>

                        {/* Years */}
                        <div className="flex items-center mb-4 text-white/80">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium">{item.years}</span>
                        </div>

                        {/* Description */}
                        <p className="text-white/95 font-medium leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Focus */}
          <div className="mt-20 text-center">
            <Card className="bg-black border-2 border-yellow-500/20 hover:shadow-[0_0_35px_rgba(250,204,21,0.4)] transition-all duration-500 transform hover:-translate-y-2 max-w-2xl mx-auto">
              <div className="p-8">

                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-yellow-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Academic Focus
                </h3>

                <p className="text-white/95 font-medium leading-relaxed">
                  My educational journey has been focused on building a strong
                  foundation in both theoretical concepts and practical
                  applications. Through coursework and projects, I've developed
                  expertise in problem-solving, critical thinking, and technical
                  implementation.
                </p>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
