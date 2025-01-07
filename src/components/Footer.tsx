import { motion } from "framer-motion";
import { Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="container">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            className="text-xl font-bold text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            SpeakIt
          </motion.a>

          <motion.a
            href="https://twitter.com/speakit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Follow us on Twitter</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
