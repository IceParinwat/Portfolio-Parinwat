import { PROJECTS } from "../constants";
import { motion } from "motion/react";

export default function Project() {
  const handleProjectClick = (index) => {
    const projectUrls = [
      "https://t-rax-black-hole.vercel.app/",
      "https://assessment-form-react.vercel.app/",
    ];

    if (projectUrls[index]) {
      window.open(projectUrls[index], "_blank");
    }
  };

  return (
    <section id="project" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Project
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="lg:w-1/4 hover:cursor-pointer"
              onClick={() => handleProjectClick(index)}
            >
              <img
                className="mb-6 rounded"
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="flex flex-wrap lg:block w-full max-w-xl lg:w-3/4"
            >
              <h6
                onClick={() => handleProjectClick(index)}
                className="mb-2 font-semibold hover:cursor-pointer"
              >
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className=" mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
