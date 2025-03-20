import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/10 to-transparent" />
      <div className="max-w-4xl relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-secondary font-mono mb-4 hover-trigger"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent animate-gradient hover-trigger"
        >
          Diwakar Shukla
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-textSecondary mb-6 hover-trigger"
        >
          Software Engineer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-textSecondary max-w-xl mb-8 text-lg hover-trigger"
        >
          I craft exceptional digital experiences with modern web technologies.
          Specializing in building innovative, scalable, and user-friendly applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex gap-6"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-secondary/10 border-2 border-secondary text-secondary hover:bg-secondary/20 transition-all duration-300 rounded-lg hover:scale-105 hover-trigger font-mono"
          >
            View My Work
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors hover-trigger text-2xl"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors hover-trigger text-2xl"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors hover-trigger text-2xl"
            >
              <FiTwitter />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;