import { motion } from "framer-motion";
import galleria from "../images/galleria.png";
import apiTestDashboard from "../images/api_test_dashboard.png";
import ProjectManagement from "../images/ProjectManagement.png";
import recipeSearch from "../images/RecipeSearch.png";
import invoiceApp from "../images/invoiceApp.png";
import NikeClone from "../images/NikeClone.png";

const Projects = () => {
  const projects = [
    {
      title: "Galleria",
      description:
        "A web application that allows users to search for images. Simply enter a keyword, and it fetches and displays relevant images.",
      tech: ["React", "Node.js", "MongoDB"],
      image: galleria,
      github: "https://github.com/diwakarshukla941/Galleria",
      live: "https://galleriea.netlify.app/",
    },
    {
      title: "API Testing And Dashboard",
      description:
        "A dashboard for testing and managing APIs, built with modern web technologies.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: apiTestDashboard,
      github: "https://github.com/diwakarshukla941/-Api-Testing-And-Dashboard",
      live: "https://apivisionn.netlify.app/",
    },
    {
      title: "Project Management App",
      description:
        "A simple yet effective Project Management System for software engineers to manage tasks, track progress, and collaborate efficiently.",
      tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      image: ProjectManagement,
      github: "https://github.com/diwakarshukla941/Project-Management",
      live: "https://projecttmanager.netlify.app/",
    },
    {
      title: "Recipe Search App",
      description:
        "A full-stack application built with React and Node.js, where users can search for recipes, save their favorites, and explore random recipes.",
      tech: ["React", "Node.js", "Tailwind CSS"],
      image: recipeSearch,
      github: "https://github.com/diwakarshukla941/recipeSearch",
      live: "https://recipesearchhapp.netlify.app/",
    },
    {
      title: "Invoice App",
      description:
        "A full-stack application built with React and Node.js, where users can create invoices and manage their bills and also can generate pdf of bills. ",
      tech: ["React", "Node.js", "Tailwind CSS"],
      image: invoiceApp,
      github: "https://github.com/diwakarshukla941/invoiceApp-frontend",
      live: "https://invoice-app-frontend-xi.vercel.app/",
    },
    {
      title: "Nike Clone",
      description:
        "A responsive Nike landing page clone built using React 18 and Tailwind CSS.Includes hero section, product grid, and mobile sidebar for seamless navigation.",
      tech: ["React", "Tailwind CSS"],
      image: NikeClone,
      github: "https://github.com/diwakarshukla941/NikeClone",
      live: "https://nikee-clonee.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center section-heading">
          <span className="text-secondary mr-2">02.</span> Some Things I have
          Built
        </h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 project-card p-4 hover-trigger`}
            >
              <div className="w-full md:w-7/12 relative group">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/80 group-hover:bg-transparent transition-colors duration-300 rounded-lg"></div>
                </a>
              </div>
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                <h3 className="text-secondary text-sm mb-2">
                  Featured Project
                </h3>
                <h4 className="text-2xl font-bold mb-4 gradient-text">
                  {project.title}
                </h4>
                <div className="card-gradient p-6 rounded-lg mb-4">
                  <p className="text-textSecondary">{project.description}</p>
                </div>
                <ul
                  className={`flex flex-wrap gap-4 mb-4 ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech} className="text-textSecondary text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
