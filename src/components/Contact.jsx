  import { motion } from 'framer-motion';

  const Contact = () => {
    return (
      <section id="contact" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <span className="text-secondary mr-2">03.</span> What's Next?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h3>
          <p className="text-textSecondary mb-12">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:shukladiwakar941@gmail.com"
            className="inline-block px-8 py-4 border-2 border-secondary text-secondary hover:bg-secondary/10 transition-colors rounded"
          >
            Say Hello
          </a>
        </motion.div>
      </section>
    );
  };

  export default Contact;