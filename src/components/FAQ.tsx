import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does SpeakIt's AI conversation practice work?",
    answer:
      "SpeakIt uses advanced AI technology to create natural, interactive conversations. You speak to AI language partners who understand context, correct your mistakes, and adapt to your proficiency level. The AI provides instant feedback on pronunciation, grammar, and vocabulary usage.",
  },
  {
    question: "What languages are available on SpeakIt?",
    answer:
      "SpeakIt currently supports over 20 languages, including English, Spanish, French, German, Italian, Chinese, Japanese, Korean, and more. We regularly add new languages based on user demand and feedback.",
  },
  {
    question: "Can I use SpeakIt as a complete beginner?",
    answer:
      "Absolutely! SpeakIt is designed for all proficiency levels, from complete beginners to advanced learners. The AI adapts to your level, starting with basic conversations and gradually increasing complexity as you improve.",
  },
  {
    question: "How much time should I practice each day?",
    answer:
      "We recommend practicing for at least 15-20 minutes daily for optimal results. However, you can use SpeakIt as much as you want - our AI tutors are available 24/7 for practice sessions of any length.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24" id="faq">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
              FAQ
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="heading text-3xl md:text-4xl mb-4">
              Common Questions & Answers
            </h2>
            <p className="text-lg text-gray-600">
              Find out all the essential details about our platform and how it
              can serve your needs.
            </p>
          </motion.div>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <span className="text-xl font-semibold text-gray-400 shrink-0">
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
