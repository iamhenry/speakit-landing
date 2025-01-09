import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="pb-[200px]" id="about">
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
              Meet the developer
            </h2>

            <div className="space-y-4 text-lg text-white/80">
              <p>
                What's up! I'm Henry, the creator of SpeakIt. I developed this
                app out of frustration with subscriptions and a strong desire to
                protect my private conversations from third-party services.
              </p>

              <p>
                As a product designer with 15 years of experience, creating my
                first Mac app was a challenge. However, it was an opportunity to
                turn my design experience into a tangible tool.
              </p>

              <p>
                I'm excited to share SpeakIt with you, an app that prioritizes
                privacy and has given me peace of mind and increased
                productivity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
