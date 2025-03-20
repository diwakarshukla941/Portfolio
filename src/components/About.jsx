import { motion } from "framer-motion";
import profilePic from "../images/portfolio_pic.png";

const About = () => {
  const skills = [
    { name: "JavaScript (ES6+)", icon: "⚡" },
    { name: "React & Next.js", icon: "⚛️" },
    { name: "Node.js", icon: "🚀" },
    { name: "TypeScript", icon: "📘" },
    { name: "Python", icon: "🐍" },
    { name: "SQL & NoSQL", icon: "🗃️" },
    { name: "AWS & Cloud", icon: "☁️" },
    { name: "DevOps & CI/CD", icon: "🔄" },
  ];

  return (
    <section id="about" className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-4 section-heading">
          <span className="text-secondary font-mono">01.</span>
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-textSecondary space-y-4">
            <p className="leading-relaxed">
              Hello! I'm a passionate developer who loves creating elegant
              solutions to complex problems. My journey in web development began
              with a curiosity about how websites work, and that curiosity has
              evolved into a professional career building modern web
              applications.
            </p>
            <p className="leading-relaxed">
              Today, I work with cutting-edge technologies to build scalable,
              performant applications that provide exceptional user experiences.
              I'm particularly interested in web performance, accessibility, and
              creating intuitive user interfaces.
            </p>
            <div className="pt-6">
              <h3 className="text-textPrimary font-semibold mb-4">
                Technologies I work with:
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2 hover-trigger group"
                  >
                    <span className="text-secondary group-hover:rotate-12 transition-transform">
                      {skill.icon}
                    </span>
                    <span className="group-hover:text-secondary transition-colors">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Profile Picture with Increased Height */}
          <div className="relative group w-full h-[450px] md:h-[550px]">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg p-2 shadow-xl z-10 w-full h-full">
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img
                  src={profilePic}
                  alt="Developer"
                  className="w-full h-full object-cover grayscale transition-all duration-500 transform group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-secondary/50 rounded-lg translate-x-5 translate-y-5 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
