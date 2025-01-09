import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { SubtleWaveform } from "./SubtleWaveform";

const Hero = () => {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-20 relative">
      <div className="container px-4 md:px-6 text-center">
        <motion.div
          className="w-full max-w-[880px] mx-auto flex-col justify-start items-center gap-5 md:gap-7 inline-flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="self-stretch flex-col justify-start items-start gap-4 flex">
            <motion.h1
              className="heading text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] w-full leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Why type when you can speak?
            </motion.h1>
            <motion.p
              className="self-stretch opacity-80 text-center text-[#CCE4FF] text-lg md:text-xl font-normal leading-relaxed md:leading-[30px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              3x your typing speed by using SpeakIt speech-to-text, in any app
            </motion.p>
          </div>
          <motion.div
            className="self-stretch h-auto md:h-[74px] flex-col justify-start items-center gap-1 flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              className="px-4 py-3 bg-[#00B0F5] hover:bg-[#043B50] rounded-full transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#pricing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Buy Now
            </Button>
            <div className="self-stretch opacity-80 text-center text-white text-xs font-normal leading-[30px]">
              For Apple Silicon, macOS 14.0+
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-full sm:w-[80%] md:w-[600px] mx-auto mt-8 mb-8 md:mb-16"
          >
            <div className="relative">
              <img
                src="/src/assets/laptop.png"
                alt="SpeakIt on MacBook"
                className="w-full h-auto"
              />
              <div className="absolute top-[10%] right-[5%] w-[15%] md:w-auto">
                <SubtleWaveform />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
