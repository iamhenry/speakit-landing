import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm  border-white/10">
      <nav className="container h-16 flex items-center justify-between">
        <motion.a
          href="/"
          className="text-xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          SpeakIt
        </motion.a>

        <motion.a
          href="#pricing"
          // className="opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileTap={{ scale: 0.95 }}
        >
          Buy Now
        </motion.a>
      </nav>
    </header>
  );
};

export default Navbar;
