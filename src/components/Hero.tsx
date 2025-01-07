import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container text-center">
        <motion.h1
          className="heading text-4xl md:text-5xl lg:text-6xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Master Any Language with AI-Powered Conversations
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Practice speaking with our advanced AI language partners. Get
          real-time feedback, perfect your pronunciation, and gain confidence in
          any language.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="#pricing"
            className="btn-primary text-lg"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#pricing")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Learning Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
