import ymcPreview from "../assets/ymc.png"

const projects = [
  {
    title: "Mindful Scan",
    period: "JAN 2024",
    description:
      "GPT-4-powered content moderation tool built with React and Go to identify and flag inappropriate content in real time.",
    stack: ["React", "TypeScript", "Golang", "GPT-4"],
    url: "https://mindfulscan.up.railway.app/",
    preview: "https://mindfulscan.up.railway.app/",
    type: "iframe" as const,
  },
  {
    title: "Edmonton Muslim Directory",
    period: "APR 2024 - JUN 2024",
    description:
      "Business directory connecting the Edmonton Muslim community with local Muslim-owned businesses, with map-based search and an admin dashboard for listings.",
    stack: ["Next.js", "TypeScript", "Drizzle ORM", "Google Maps API"],
    url: "https://edmonton-muslim-directory-v2-125cshtme-ayubs-projects.vercel.app/",
    preview: ymcPreview,
    type: "img" as const,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center px-4 mb-16 py-16 bg-white w-full">
      <h3 className="text-[#333] font-semibold text-lg mb-10">PROJECTS</h3>
      <div className="max-w-4xl w-full grid sm:grid-cols-2 gap-6 text-left">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-xl border border-[#e5e5e5] bg-white overflow-hidden hover:border-[#ccc] transition-colors duration-300 flex flex-col shadow-sm"
          >
            <div className="p-6 pb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-[#e5e5e5] text-[#555] px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="font-bold text-xl text-[#111] mb-4 transition-colors duration-300">
                {project.title}
              </h4>
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 rounded-lg overflow-hidden block bg-[#f5f5f5] shrink-0 relative"
              style={{ height: "200px" }}
            >
              {project.type === "iframe" ? (
                <>
                  <iframe
                    src={project.preview}
                    title={`${project.title} preview`}
                    className="border-0 pointer-events-none"
                    style={{ transform: "scale(0.50)", transformOrigin: "top left", width: "350%", height: "350%" }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0" />
                </>
              ) : (
                <img
                  src={project.preview}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              )}
            </a>

            <div className="p-6 pt-4 flex flex-col flex-1">
              <p className="text-[#555] text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white bg-black rounded-full px-4 py-2 hover:bg-[#222] transition-all duration-200 w-fit"
              >
                View Project <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
