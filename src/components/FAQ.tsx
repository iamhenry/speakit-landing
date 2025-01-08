import { motion } from "framer-motion";

const faqs = [
  {
    question: "What exactly does SpeakIt do?",
    answer:
      "SpeakIt is a macOS app that converts your spoken words into text. You can record your voice and get accurate text transcriptions instantly on your Mac.",
  },
  {
    question: "Do I need an internet connection to use SpeakIt?",
    answer:
      "No! SpeakIt works completely offline. It uses Whisper Models that runs directly on your Mac, so your voice data stays private and secure on your device.",
  },
  {
    question: "Will it work with my Mac?",
    answer:
      "SpeakIt works with Mac's running versions of macOS 14.0+ (M1 chip and above). It's designed to be lightweight and efficient, so it won't slow down your computer.",
  },
  {
    question: "Can I use it for long recordings?",
    answer:
      "Yes! You can record and transcribe conversations of any length. The app is optimized to handle both quick notes and longer sessions.",
  },
  {
    question: "How accurate is the voice recognition?",
    answer:
      "Very accurate! We use Whisper by OpenAI, which is known for its high accuracy across different accents and speaking styles. It works well even with background noise and can understand technical terms.",
  },
];

const FAQ = () => {
  return (
    <section className="pb-[100px]" id="faq">
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
            <p className="text-lg text-white/80">
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
              <span className="text-xl font-semibold text-white/40 shrink-0">
                {index + 1}
              </span>
              <div>
                <h3 className="heading text-xl mb-2 text-white">
                  {faq.question}
                </h3>
                <p className="text-white/80">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
