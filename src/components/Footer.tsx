import { motion } from "framer-motion";
import TwitterXIcon from "./icons/twitter-x.svg";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            className="text-xl font-bold text-white"
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
            className="text-white/80 hover:text-white transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={TwitterXIcon}
              alt="Follow us on Twitter"
              className="w-6 h-6"
            />
            <span className="sr-only">Follow us on Twitter</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
