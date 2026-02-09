import { useState } from "react";
import { ChevronDown } from "lucide-react";


export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
  title: "AI Voice Assistant for Meetings",
  subtitle: "Multimodal NLP & Speech Summarization Project",
  duration: "Jan 2026 – Feb 2026",
  description: [
    "Built a multimodal web app to summarize meetings from audio and text inputs.",
    "Used transformer models (T5, FLAN-T5, DistilBART) for intelligent summarization.",
    "Applied sentiment analysis with DistilBERT to extract conversational insights."
  ],
  skills: [
    "NLP",
    "Speech-to-Text",
    "Transformers",
    "Sentiment Analysis",
    "Hugging Face",
    "Flask"
  ],
  github: "https://github.com/Harsh2015/AI-Voice-Assistance-For-Meeting-Support",
  image: "/ai.png",
},


    {
      title: "E-Commerce Sales Analysis",
      subtitle: "SQL-based Business Insights Project",
      duration: "Dec 2025 – Jan 2026",
      description: [
        "Analyzed 100,000+ e-commerce records using SQL to uncover insights on sales performance and customer behavior.",
        "Used advanced SQL queries to calculate revenue, AOV, and product-wise performance.",
        "Generated actionable insights to support pricing and business decisions.",
      ],
      skills: ["PostgreSQL", "SQL", "Data Analysis", "Business Insights"],
      github: "https://github.com/Harsh2015/sql-ecommerce-analysis",
      image: "/sql.png",
    },
    {
      title: "Symptom-Solver",
      subtitle: "ML-based Disease Prediction Web App",
      duration: "Dec 2024 – Jan 2025",
      description: [
        "Built a disease classification model with 97% accuracy using scikit-learn.",
        "Developed a Flask web app with REST APIs and real-time predictions.",
        "Mapped symptoms to diseases with suggested tests and lifestyle guidance.",
      ],
      skills: [
        "Python",
        "Machine Learning",
        "scikit-learn",
        "Flask",
        "Matplotlib",
        "JavaScript",
      ],
      github: "https://github.com/Harsh2015/Symptom-Solver",
      image: "/project.png",
    },
  ];

  return (
    <section
      id="projects"
      className="pt-6 sm:pt-8 pb-14 px-6 max-w-4xl mx-auto"
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">My Projects</h2>
      <div className="w-12 h-1 bg-blue-600 mb-8 rounded-full" />

{/* Projects intro */}
<div className="max-w-2xl mx-auto text-center mb-12">
  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
    Check out my latest projects
  </h3>

  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
   “A few projects that reflect how I think, build, and analyze.”
  </p>
</div>



      {/* Wrapper */}
      <div className="relative">
        {/* Project List */}
        <div
          className={`flex flex-col gap-12 transition-all duration-500 ${
            !showAll ? "max-h-[520px] overflow-hidden" : ""
          }`}
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8"
            >
              {/* Image */}
              <div className="sm:w-2/5 md:w-1/2 border border-gray-300 rounded-lg p-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-h-72 object-contain rounded-md"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-black">
                    {project.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {project.duration}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-1">
                  {project.subtitle}
                </p>

                <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-gray-600">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FADE + BUTTON */}
        {!showAll && (
          <div className="absolute bottom-0 left-0 w-full pt-24">
            {/* Gradient fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white" />

            {/* Button */}
            <div className="relative flex justify-center">
              <button
  onClick={() => setShowAll(true)}
  className="flex items-center gap-1.5
             px-6 py-2 text-sm font-medium
             rounded-full border border-gray-300
             bg-white hover:bg-gray-50
             transition shadow-sm text-blue-600"
>
  More Projects
  <ChevronDown size={16} className="mt-0.5 opacity-70" />
</button>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
