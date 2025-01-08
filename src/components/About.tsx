import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="pb-[100px]" id="about">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <img
                src="/images/henry.png"
                alt="AI Language Learning"
                className="w-full h-auto rounded-2xl"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add(
                    "bg-gradient-to-br",
                    "from-primary/20",
                    "to-primary/10"
                  );
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="heading text-3xl md:text-4xl mb-6 text-white">
              Behind the developer of SpeakIt?
            </h2>

            <div className="space-y-4 text-lg text-white/80">
              <p>
                SpeakIt revolutionizes language learning by combining advanced
                AI technology with proven language acquisition methods. Our
                platform creates an immersive environment where you can practice
                speaking naturally, without fear of judgment.
              </p>

              <p>
                Unlike traditional language learning apps that focus on
                vocabulary and grammar drills, SpeakIt emphasizes real
                conversation practice. Our AI tutors adapt to your level,
                providing personalized feedback and encouragement to help you
                progress faster.
              </p>

              <p>
                Whether you're a beginner starting your language journey or an
                advanced learner aiming for fluency, SpeakIt provides the tools
                and support you need to succeed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
