import { motion } from "framer-motion";
import { Mic, Brain, MessageSquare, Languages } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Natural Conversations",
    description:
      "Practice real-world conversations with AI partners that adapt to your level and learning style.",
  },
  {
    icon: Brain,
    title: "Smart Feedback",
    description:
      "Get instant, personalized feedback on your pronunciation, grammar, and vocabulary usage.",
  },
  {
    icon: MessageSquare,
    title: "Multiple Scenarios",
    description:
      "Practice in various contexts - from casual chats to business meetings and academic discussions.",
  },
  {
    icon: Languages,
    title: "20+ Languages",
    description:
      "Learn any language with native-speaking AI tutors available 24/7 for practice.",
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
    <section className="py-16 md:py-24" id="features">
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
              className="bg-[#003f67] p-6 rounded-xl shadow-sm"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <feature.icon className="w-12 h-12 text-white mb-4" />
              <h3 className="heading text-xl mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
