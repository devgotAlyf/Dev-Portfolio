import { Award } from "lucide-react";
import { Card } from "@/components/ui/card";

type Certification = {
  title: string;
  href: string;
  description: string;
};

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "J.P. Morgan - Software Engineering Job Simulation",
      href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_AQ6rX988JPZWoqH6a_1753983323450_completion_certificate.pdf",
      description:
        "Completed a simulation involving project setup, UI development, and integration with databases, gaining experience in scalable backend systems."
    },
    {
      title: "Data & Analytics Course by HP LIFE",
      href: "https://www.life-global.org/course/344-data-science-and-analytics",
      description:
        "Industry-recognized course covering core concepts in data science, analytics tools, and decision-making strategies."
    },
    {
      title: "Udemy - Automated Machine Learning for Beginners (Google & Apple)",
      href: "https://www.udemy.com/certificate/UC-faf8dce0-f72e-400b-8b66-077c64116322/",
      description:
        "Hands-on experience with AutoML tools, automating model selection, training, and deployment for real-world data problems."
    },
    {
      title: "Deloitte - Data Analytics Job Simulation",
      href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_AQ6rX988JPZWoqH6a_1753607378462_completion_certificate.pdf",
      description:
        "Focused on data analytics and forensic technology with tasks involving real-world business scenarios, data analysis, and investigative techniques."
    },
    {
      title: "GeeksforGeeks - AI Tools Skill Up",
      href: "https://www.geeksforgeeks.org/certificate/b16c47eda6e8a6e4a56f91aa8ea54af6",
      description:
        "Practical exposure to AI tools and workflows to improve problem-solving efficiency, productivity, and industry relevance."
    }
  ];

  return (
    <section id="certifications" className="relative min-h-screen py-20">
      {/* Black Background */}
      <div className="absolute inset-0 bg-black z-0" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-6xl mx-auto bg-black backdrop-blur-xl border-2 border-yellow-500/20 rounded-[2rem] p-12">

          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-yellow-400 mr-3" />

              <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
                Certifications
              </h2>
            </div>

            <p className="text-lg text-white/95 font-semibold max-w-2xl mx-auto">
              Courses and simulations that strengthened my practical skills
            </p>

            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Certifications List */}
          <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert) => (
              <Card
                key={cert.title}
                className="group bg-black border-2 border-yellow-500/20 hover:shadow-[0_0_35px_rgba(250,204,21,0.4)] transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-left block"
                  >
                    <div className="text-white">
                      <span className="font-bold text-lg underline decoration-yellow-400/60 underline-offset-4 hover:text-yellow-400 transition-colors duration-300">
                        {cert.title}
                      </span>
                    </div>

                    <p className="mt-2 text-white/95 font-medium">
                      {cert.description}
                    </p>
                  </a>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
