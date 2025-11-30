import React, { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
  const handleMouseMove = (e, ref) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 18;
    const rotateX = ((y / rect.height) - 0.5) * -18;

    card.style.setProperty("--tilt-x", `${rotateX}deg`);
    card.style.setProperty("--tilt-y", `${rotateY}deg`);
  };

  const handleMouseLeave = (ref) => {
    const card = ref.current;
    if (!card) return;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };

  const headerBg = `${import.meta.env.BASE_URL}header.jpg`; // from public/header.jpg

  return (
    <section
      id="projects"
      className="relative py-28 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-0"></div>

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle"></div>
        <div className="particle delay-1"></div>
        <div className="particle delay-2"></div>
        <div className="particle delay-3"></div>
      </div>

      <div className="container-max relative z-20">
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 
            bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text drop-shadow-lg">
            PROJECTS
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Real-world engineering work showcasing PySpark, ApacheBeam, BigQuery, Kafka, Cloud, Vertex AI and Generative AI.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {projects.map((project) => {
            const ref = useRef(null);

            // Ensure project.image respects BASE_URL.
            // If project.image is "images/foo.png" or "/images/foo.png", this still works.
            const projectImg = `${import.meta.env.BASE_URL}${project.image.replace(/^\//, "")}`;

            return (
              <div
                key={project.id}
                ref={ref}
                onMouseMove={(e) => handleMouseMove(e, ref)}
                onMouseLeave={() => handleMouseLeave(ref)}
                className="
                  tilt-card relative overflow-hidden rounded-3xl
                  bg-white/10 dark:bg-gray-800/20 
                  backdrop-blur-xl border border-white/20 dark:border-gray-700/30 
                  shadow-2xl hover:shadow-purple-500/40
                  transition-all duration-500 group
                "
                style={{
                  transform: "perspective(900px) rotateX(var(--tilt-x)) rotateY(var(--tilt-y))"
                }}
              >
                {/* SHINE EFFECT */}
                <div className="shine absolute inset-0 pointer-events-none"></div>

                {/* IMAGE */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={projectImg}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700
                      group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
                </div>

                {/* CONTENT */}
                <div className="p-7 space-y-5">
                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/*  GITHUB ICON UNDER DESCRIPTION */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                        bg-white/10 border border-white/20
                        text-white text-sm
                        transition-all duration-300
                        hover:bg-white/20 hover:scale-110
                        shadow-md
                      "
                    >
                      <Github size={18} />
                      GitHub Repo
                    </a>
                  )}

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="
                          px-3 py-1 text-xs font-medium rounded-full 
                          bg-white/10 border border-white/20 text-gray-100 
                          backdrop-blur-sm transition-all hover:scale-110
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-4 pt-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex items-center gap-2 px-4 py-2 rounded-lg
                          bg-gradient-to-r from-purple-600 to-blue-600
                          text-white text-sm font-medium 
                          transition-all duration-300 hover:scale-110
                        "
                      >
                        <ExternalLink size={18} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA — SIDE BY SIDE */}
        <div className="text-center mt-20">
          <p
            className="
              text-lg md:text-xl text-gray-200 mb-8 
              bg-gradient-to-r from-purple-400 to-blue-400 
              text-transparent bg-clip-text 
              font-semibold tracking-wide
            "
          >
            ✨ Let’s Talk — I'm Open to Opportunities and Collaborations
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href="https://github.com/yugandharct"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3 px-7 py-3
                bg-gradient-to-r from-purple-600 to-blue-600 text-white
                font-semibold rounded-lg shadow-lg hover:scale-110 
                transition-all duration-300 text-lg
              "
            >
              <Github size={22} />
              View All Projects
            </a>

            <button
              id="projects-connect-btn"
              onClick={() =>
                document.getElementById("contact-btn-trigger")?.click()
              }
              className="
                inline-flex items-center gap-3 px-7 py-3
                bg-gradient-to-r from-purple-600 to-blue-600 text-white
                font-semibold rounded-lg shadow-lg
                hover:scale-110 
                transition-all duration-300 text-lg
              "
            >
              💬 Let’s Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
