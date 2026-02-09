import {
  Code2,
  Database,
  BarChart3,
  Brain,
  Layers,
  FlaskConical,
  Atom,
  GitBranch,
  Table,
  LineChart,
  Cpu,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming & Querying",
    skills: [
      { name: "Python", icon: Code2, color: "text-yellow-500" },
      { name: "SQL", icon: Database, color: "text-blue-600" },
    ],
  },
  {
    title: "Data Analysis & BI Tools",
    skills: [
      { name: "Microsoft Excel", icon: Table, color: "text-green-600" },
      { name: "Power BI", icon: BarChart3, color: "text-yellow-600" },
      { name: "DAX", icon: LineChart, color: "text-purple-500" },
      { name: "Power Query", icon: Layers, color: "text-cyan-600" },
      { name: "Git", icon: GitBranch, color: "text-orange-600" },
    ],
  },
  {
    title: "Libraries & ML Fundamentals",
    skills: [
      { name: "Pandas", icon: Layers, color: "text-indigo-500" },
      { name: "NumPy", icon: Cpu, color: "text-blue-500" },
      { name: "Matplotlib", icon: LineChart, color: "text-red-500" },
      { name: "scikit-learn", icon: Brain, color: "text-purple-500" },
      { name: "Machine Learning", icon: Brain, color: "text-pink-500" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: Database, color: "text-blue-700" },
      { name: "MongoDB", icon: Database, color: "text-teal-600" },
    ],
  },
  {
    title: "Data Analytics Skills",
    skills: [
      { name: "Data Cleaning", icon: Layers, color: "text-gray-600" },
      { name: "Exploratory Data Analysis (EDA)", icon: BarChart3, color: "text-indigo-600" },
      { name: "Descriptive Statistics", icon: LineChart, color: "text-green-700" },
      { name: "Data Modeling", icon: Brain, color: "text-purple-600" },
      { name: "Insight & Report Generation", icon: Table, color: "text-blue-600" },
      { name: "AI Automation", icon: Atom, color: "text-cyan-500" },
    ],
  },
  {
  title: "Frameworks & Libraries",
  skills: [
    { name: "Flask", icon: FlaskConical, color: "text-teal-500" },
    { name: "scikit-learn", icon: Brain, color: "text-purple-500" },
    { name: "Pandas", icon: Layers, color: "text-indigo-500" },
    { name: "NumPy", icon: Cpu, color: "text-blue-500" },
    { name: "TensorFlow", icon: Atom, color: "text-orange-500" },
  ],
},

];

export default function Skills() {
  return (
    <section
      id="skills"
      className="pt-6 sm:pt-2 pb-14 px-6 max-w-4xl mx-auto"
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">Skills</h2>

      {/* Blue underline */}
      <div className="w-12 h-1 bg-blue-600 mb-6 rounded-full" />

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
        {skillGroups.map((group, idx) => (
          <div key={idx}>
            {/* Category title */}
            <h3 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
              {group.title}
            </h3>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={i}
                    className="flex items-center gap-2
                               px-4 py-2 text-base font-semibold
                               bg-gray-100 text-gray-800
                               border border-gray-200 rounded-full
                               shadow-sm
                               transform transition duration-300
                               hover:scale-105 hover:shadow-md
                               hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Icon size={18} className={skill.color} />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
