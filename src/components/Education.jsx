export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Information Technology",
      duration: "2023 – 2026",
      school: "Mumbai University",
      extra: "",
    },
    {
      degree: "Diploma in Computer Engineering",
      duration: "2021 – 2023",
      school: "Directorate of Technical Education",
    },
  ];

  return (
    <section
      id="education"
      className="pt-6 sm:pt-8 pb-14 px-6 max-w-4xl mx-auto"
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">Education</h2>

      {/* Blue underline */}
      <div className="w-12 h-1 bg-blue-600 mb-6 rounded-full" />

      {/* Desktop + Mobile unified layout */}
      <div className="flex flex-col gap-8">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2"
          >
            {/* Left content */}
            <div className="sm:max-w-[65%]">
              <p className="text-sm sm:text-base font-medium text-gray-800">
                {edu.degree}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {edu.school}
              </p>
            </div>

            {/* Right year */}
            <div className="text-xs sm:text-sm font-semibold text-gray-500 whitespace-nowrap sm:text-right">
              {edu.duration}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
