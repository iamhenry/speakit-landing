import { motion } from "framer-motion";
const features = [
  {
    icon: "/icons/lock.svg",
    title: "Privacy First",
    description:
      "SpeakIt runs locally on your computer without the need of using the internet or third-party services",
  },
  {
    icon: "/icons/Messages.svg",
    title: "Multi-lingual",
    description:
      "With automatic language detection, SpeakIt supports over 90 languages.",
  },
  {
    icon: "/icons/bars.svg",
    title: "Productivity",
    description:
      "The average person types 40 words per minute. SpeakIt enables you to 3x that.",
  },
  {
    icon: "/icons/checkmarks.svg",
    title: "Accuracy Over Siri",
    description:
      "Let's face it, Siri isn't that smart. SpeakIt is powered by Whisper and has accuracy rates of 95% to 98.5%",
  },
  {
    icon: "/icons/Voice.svg",
    title: "Automatic Punctuation",
    description:
      "Automatic detection for punctuations like commas, periods, question marks, etc",
  },
  {
    icon: "/icons/email.svg",
    title: "No Sign-up Required",
    description: "A friction-free experience without the hassle of signing up",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section className="pb-[200px]" id="features">
      <div className="container">
        <motion.h2
          className="heading text-3xl md:text-4xl text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Everything You Need to Speak Fluently
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl text-center"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12 mb-4"
              />
              <h3 className="heading text-xl mb-2">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
