"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const features = [
  "Unlimited voice-to-text transcription",
  "Offline speech recognition",
  "Over 90+ language supported",
  "Native macOS experience",
  "Custom hotkey shortcuts",
  "Automatic punctuation",
  "No Subscriptions",
  "Privacy-focused",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Pricing() {
  return (
    <section className="pb-[200px]" id="pricing">
      <div className="container mx-auto">
        <motion.div
          className="max-w-4xl mx-auto rounded-2xl p-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-3">
            <h2 className="heading text-1xl md:text-2xl">Lifetime License</h2>
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-700 hover:bg-green-100"
            >
              20% off
            </Badge>
          </div>

          <motion.div variants={itemVariants}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h3 className="heading text-3xl md:text-4xl leading-tight mb-4">
                  Transform your voice into text with AI precision
                </h3>
                <p className="text-lg text-white/80">
                  Get access to all premium features:
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:text-right">
                <div className="text-5xl font-bold mb-2 text-white">$9</div>
                <p className="text-white/80">Lifetime</p>
                <Button className="mt-4 px-4 py-3 bg-[#00B0F5] hover:bg-[#043B50] rounded-full transition-colors duration-200">
                  Buy Now
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-2"
                >
                  <Check className="text-white w-5 h-5" />
                  <span className="text-lg text-white">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
