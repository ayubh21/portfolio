const experiences = [
  {
    title: "Full-Stack Developer",
    company: "MDremit",
    period: "DEC 2024 – PRESENT",
    summary:
      "Designed, built, and deployed features for a production medical billing platform using React, TypeScript, and Node.js, owning delivery end-to-end for physicians and clinic staff. Integrated third-party billing and AI APIs, including GPT-4, with validation and error-handling layers, delivering a secure claim submission workflow and reducing manual review effort by 15%. Utilized Git and CI/CD pipelines for automated builds and deployments, monitoring production with Grafana and Loki.",
    tags: ["React", "TypeScript", "Node.js", "GPT-4"],
  },
  {
    title: "Software Developer Intern",
    company: "Premier Stays",
    period: "SEP 2023 – AUG 2024",
    summary:
      "Supported project delivery across the Software Development Life Cycle, contributing to design, implementation, testing, and release of a Next.js and TypeScript booking platform that replaced a third-party listing service. Built responsive UI components for listing search, filtering, and booking flows, and integrated the Google Maps API and AWS S3-backed media uploads to deliver new product capabilities.",
    tags: ["Next.js", "TypeScript", "AWS", "Google Maps API"],
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
