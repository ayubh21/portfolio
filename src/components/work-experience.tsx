const experiences = [
  {
    title: "Software Engineer Intern",
    company: "MDremit",
    period: "SEP 2025 – APR 2026",
    summary:
      "Designed and maintained the backend of a cloud-based medical billing system, building secure claim-processing pipelines for automated submission to Teleplan.",
    tags: ["Backend", "Cloud", "Healthcare"],
    tagColor: "blue",
  },
  {
    title: "Frontend Developer Capstone",
    company: "Ledcor",
    period: "JAN 2024 – APR 2024",
    summary:
      "Built a video tagging system in partnership with Ledcor, enabling project- and tag-based video search through close collaboration with the client.",
    tags: ["Frontend", "React"],
    tagColor: "orange",
  },
  {
    title: "Software Developer Capstone",
    company: "Premier Stays",
    period: "JAN 2025 – APR 2025",
    summary:
      "Collaborated with a team of four to revamp a third-party listing service, enabling direct property listings on the company's website. Integrated Google Maps and AWS S3 into a unified platform to automate data flow between systems, configured cloud storage with proper permissions and security policies, and implemented dynamic pricing logic driven by live market data.",
    tags: ["Full-Stack", "AWS", "Google Maps API"],
    tagColor: "teal",
  },
  {
    title: "Seasonal Sales Associate",
    company: "Mark's",
    period: "SEP 2024 – DEC 2024",
    summary:
      "Delivered attentive customer service and kept merchandising organized during a high-volume seasonal retail period.",
    tags: ["Customer Service", "Retail"],
    tagColor: "green",
  },
  {
    title: "Retail Sales Associate",
    company: "Under Armour",
    period: "FEB 2021 – MAY 2023",
    summary:
      "Provided personalized product recommendations and mentored new team members in a fast-paced retail environment.",
    tags: ["Sales", "Mentorship"],
    tagColor: "purple",
  },
]

const tagStyles: Record<string, string> = {
  blue: "bg-blue-900/30 text-blue-300",
  orange: "bg-orange-900/30 text-orange-300",
  green: "bg-green-900/30 text-green-300",
  purple: "bg-purple-900/30 text-purple-300",
  teal: "bg-teal-900/30 text-teal-300",
}

export default function WorkExperience() {
  return (
    <section id="experience" className="flex flex-col items-center px-4 mb-16">
      <h3 className="text-[#c5c5c5] font-semibold text-lg mb-10">WORK EXPERIENCE</h3>
      <div className="max-w-3xl w-full border-l border-[#2a2a2a] pl-8 space-y-8">
        {experiences.map((exp) => (
          <div key={exp.title + exp.company} className="relative">
            <span className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-orange-500" />
            <div className="flex justify-between items-baseline flex-wrap gap-x-3 gap-y-1 mb-1">
              <h4 className="font-semibold text-lg text-white">{exp.title}</h4>
              <span className="text-[#888] text-xs font-mono whitespace-nowrap">{exp.period}</span>
            </div>
            <p className="text-orange-400 text-sm font-medium mb-2">{exp.company}</p>
            <p className="text-[#a0a0a0] text-sm leading-relaxed mb-3">{exp.summary}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span key={tag} className={`text-xs px-2 py-0.5 rounded ${tagStyles[exp.tagColor]}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
