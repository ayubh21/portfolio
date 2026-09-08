const experiences = [
  {
    title: "Software Developer Intern",
    company: "MDremit",
    period: "SEP 2025 – APR 2026",
    summary:
      "Tasked with aiding in the construction and building of a cloud-based medical billing system startup aimed at reducing administrative burden for physicians submitting patient claims.",
    tags: ["TypeScript", "Docker", "React", "Node.js"],
  },
  {
    title: "Software Developer Intern",
    company: "Premier Stays Property Management",
    period: "SEP 2024 – APR 2025",
    summary:
      "Supported project delivery across the Software Development Life Cycle, contributing to design, implementation, testing, and release of a Next.js and TypeScript booking platform that replaced a third-party listing service.",
    tags: ["Next.js", "TypeScript", "AWS"],
  },
  {
    title: "Frontend Developer",
    company: "Ledcor",
    period: "JAN 2024 – APR 2024",
    summary:
      "Collaborated on the building of a searchable video tagging system frontend application, within a team of four.",
    tags: ["Frontend", "React"],
  },
  {
    title: "Sales Associate",
    company: "Under Armour",
    period: "SEP 2021 – MAY 2023",
    summary:
      "Provided personalized product recommendations and mentored new team members in a fast-paced retail environment.",
    tags: ["Sales", "Mentorship"],
  },
]

export default function WorkExperience() {
  return (
    <section id="experience" className="flex flex-col items-center px-4 mb-16">
      <h3 className="text-[#c5c5c5] font-semibold text-lg mb-10">WORK EXPERIENCE</h3>
      <div className="max-w-3xl w-full border-l border-[#2a2a2a] pl-8 space-y-8">
        {experiences.map((exp) => (
          <div key={exp.title + exp.company} className="relative">
            <span className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-white" />
            <div className="flex justify-between items-baseline flex-wrap gap-x-3 gap-y-1 mb-1">
              <h4 className="font-semibold text-lg text-white">{exp.title}</h4>
              <span className="text-[#888] text-xs font-mono whitespace-nowrap">{exp.period}</span>
            </div>
            <p className="text-[#888] text-sm font-medium mb-2">{exp.company}</p>
            <p className="text-[#a0a0a0] text-sm leading-relaxed mb-3">{exp.summary}</p>
            <p className="text-xs text-[#888]">{exp.tags.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
