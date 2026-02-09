export default function Experience() {
  const experienceData = [
    {
      role: "AI Research Intern",
      company: "Compozent Technologies",
      duration: "Dec 2025 – Jan 2026",
      description:
        "Built a machine learning–based causal model to study relationships between chemical pollutants using 12,000+ cleaned water quality samples Analyzed and visualized pollutant patterns across 172+ Ganga river basins using Matplotlib. Performed detailed exploratory data analysis to uncover trends and correlations, documenting insights in a structured research report.",
     
        skills: [
        "Python",
        "AI",
        "Machine Learning",
        "Deep Learning",
        "scikit-learn",
        "Matplotlib",
        "Google Colab",
      ],
    },
    {
      role: "Research Intern",
      company: "Compozent Technologies",
      duration: "Jan 2025 – Mar 2025",
      description:
        "Worked on research projects from company clients, gaining valuable hands-on experience in real-world problem solving, data exploration, and structured reporting.",
      skills: [
        "Python",
        "Matplotlib",
        "Report Generation",
        "Google Colab",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="pt-6 sm:pt-8 pb-14 px-6 max-w-4xl mx-auto"
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">Experience</h2>

      {/* Blue underline */}
      <div className="w-12 h-1 bg-blue-600 mb-6 rounded-full" />

      {/* Timeline */}
      <div className="relative pl-4">
        {/* Vertical line */}
        <div className="absolute left-0 top-1 bottom-0 w-px bg-gray-300" />

        <div className="flex flex-col gap-10">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              {/* Header */}
              <div className="flex justify-between  items-start gap-4">
                <div>
                  <p className="text-base sm:text-lg font-semibold text-gray-900">
                    {exp.role}
                  </p>
                  <p className="text-sm text-gray-500">
                    {exp.company}
                  </p>
                </div>

                {/* Duration (right aligned on all devices) */}
                <p className="text-xs sm:text-sm font-medium text-gray-500 whitespace-nowrap">
                  {exp.duration}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
                {exp.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs sm:text-sm
                               bg-gray-100 text-gray-700
                               border border-gray-200 rounded-full
                               hover:bg-blue-50 hover:text-blue-600
                               transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
