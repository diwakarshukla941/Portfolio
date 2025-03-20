import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A web application that helps users track their daily tasks and manage their time effectively.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/600x400',
      github: '#',
      live: '#',
    },
    {
      title: 'Project Two',
      description: 'An e-commerce platform built with modern web technologies.',
      tech: ['Next.js', 'Stripe', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/600x400',
      github: '#',
      live: '#',
    },
    {
      title: 'Project Three',
      description: 'A real-time chat application with video calling capabilities.',
      tech: ['React', 'WebRTC', 'Firebase'],
      image: 'https://via.placeholder.com/600x400',
      github: '#',
      live: '#',
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
          <span className="text-secondary mr-2">02.</span> Some Things I've Built
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
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 project-card p-4 hover-trigger`}
            >
              <div className="w-full md:w-7/12 relative group">
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/80 group-hover:bg-transparent transition-colors duration-300 rounded-lg"></div>
                </a>
              </div>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-secondary text-sm mb-2">Featured Project</h3>
                <h4 className="text-2xl font-bold mb-4 gradient-text">{project.title}</h4>
                <div className="card-gradient p-6 rounded-lg mb-4">
                  <p className="text-textSecondary">{project.description}</p>
                </div>
                <ul className={`flex flex-wrap gap-4 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  {project.tech.map((tech) => (
                    <li key={tech} className="text-textSecondary text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textPrimary hover:text-secondary transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textPrimary hover:text-secondary transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;