import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container text-center">
        <motion.div
          className="w-[880px] flex-col justify-start items-center gap-7 inline-flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="self-stretch flex-col justify-start items-start gap-4 flex">
            <motion.h1
              className="heading text-center text-white text-[56px] w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Why type when you can speak?
            </motion.h1>
            <motion.p
              className="self-stretch opacity-80 text-center text-white text-2xl font-normal font-['Inter'] leading-[30px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              3x your typing speed by using SpeakIt speech-to-text, in any app
            </motion.p>
          </div>
          <motion.div
            className="self-stretch h-[74px] flex-col justify-start items-center gap-1 flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#pricing"
              className="px-4 py-3 bg-[#003f67] rounded-full justify-start items-start inline-flex"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#pricing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="text-white text-sm font-extrabold font-['Karla']">
                Buy Now
              </div>
            </a>
            <div className="self-stretch opacity-80 text-center text-white text-xs font-normal font-['Inter'] leading-[30px]">
              For Apple Silicon, macOS 14.0+
            </div>
          </motion.div>
          <motion.img
            src="/src/assets/laptop.png"
            alt="SpeakIt on MacBook"
            className="w-[600px] mt-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
