const experiences = [
  {
    title: "Software Engineer Intern",
    company: "MDremit",
    period: "SEP 2025 – APR 2026",
    bullets: [
      "Designed, developed, and maintained the backend of a cloud-based medical billing system aimed at reducing administrative burden for physicians submitting patient claims.",
      "Architected a scalable and secure, cloud-first backend infrastructure with a focus on reliability, data integrity, and compliance with healthcare data requirements.",
      "Implemented core claim-processing logic to support automated submission of medical claims to Teleplan.",
      "Built and maintained structured data pipelines to ensure accurate mapping of medical services, fees, and billing codes.",
    ],
    tags: ["Backend", "Cloud", "Healthcare"],
    tagColor: "blue",
  },
  {
    title: "Frontend Developer Capstone",
    company: "Ledcor",
    period: "JAN 2024 – APR 2024",
    bullets: [
      "Completed a thorough capstone project in partnership with Ledcor to develop a video tagging system.",
      "Held several meetings with the client to understand their requirements and expectations.",
      "Developed a frontend that enables the search of videos based on projects and tags.",
      "Worked together as a team to overcome challenges and produce high-quality results.",
    ],
    tags: ["Frontend", "React", "Team"],
    tagColor: "orange",
  },
  {
    title: "Seasonal Sales Associate",
    company: "Mark's",
    period: "SEP 2024 – DEC 2024",
    bullets: [
      "Delivered attentive customer service on the sales floor, assisting shoppers in finding apparel and workwear suited to their needs.",
      "Maintained product displays and restocked merchandise to ensure a well-organized and visually appealing store environment.",
      "Processed transactions accurately and efficiently using point-of-sale systems during a high-volume seasonal period.",
    ],
    tags: ["Customer Service", "Retail"],
    tagColor: "green",
  },
  {
    title: "Retail Sales Associate",
    company: "Under Armour",
    period: "FEB 2021 – MAY 2023",
    bullets: [
      "Provided personalized product recommendations and exceptional customer service in a fast-paced retail environment, consistently meeting and exceeding sales targets.",
      "Built strong rapport with customers to foster repeat business and brand loyalty.",
      "Supported daily store operations including inventory management, merchandising, and visual display upkeep.",
      "Trained and mentored new team members on customer engagement techniques and store procedures.",
    ],
    tags: ["Sales", "Mentorship", "Operations"],
    tagColor: "purple",
  },
]

const tagStyles: Record<string, string> = {
  blue: "bg-blue-900/30 text-blue-300",
  orange: "bg-orange-900/30 text-orange-300",
  green: "bg-green-900/30 text-green-300",
  purple: "bg-purple-900/30 text-purple-300",
}

export default function WorkExperience() {
  return (
    <section className="flex flex-col items-center px-4 mb-20">
      <div className="flex items-center gap-4 mb-12">
        <h3 className="text-[#c5c5c5] font-semibold text-lg">WORK EXPERIENCE</h3>
      </div>
      <div className="max-w-4xl w-full flex flex-col items-center">
        {experiences.map((exp, i) => (
          <div key={exp.title + exp.company} className="w-full flex flex-col items-center">
            <div className="w-full bg-gradient-to-br from-[#1E1E1D] to-[#161616] p-8 rounded-lg border border-[#333] text-left">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-2xl text-white">{exp.title}</h4>
                <span className="text-[#888] text-sm font-mono bg-[#0a0a0a] px-3 py-1 rounded-full whitespace-nowrap ml-4">
                  {exp.period}
                </span>
              </div>
              <p className="text-orange-400 font-medium mb-4">{exp.company}</p>
              <ul className="text-[#b0b0b0] text-sm leading-relaxed mb-5 space-y-1 list-disc list-inside">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className={`text-xs px-2 py-1 rounded ${tagStyles[exp.tagColor]}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {i < experiences.length - 1 && (
              <div className="flex flex-col items-center my-2 text-[#555]">
                <div className="w-px h-6 bg-[#555]" />
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1v12M3 9l5 5 5-5" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
