"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const features = [
  "Unlimited AI conversation practice",
  "Real-time pronunciation feedback",
  "20+ languages available",
  "Progress tracking & analytics",
  "Custom learning paths",
  "24/7 AI tutor availability",
  "Mobile & desktop access",
  "Regular content updates",
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
    <section className="py-16 md:py-24" id="pricing">
      <div className="container mx-auto">
        <motion.div
          className="max-w-4xl mx-auto rounded-2xl p-8 md:p-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-3 mb-6">
            <h2 className="heading text-3xl md:text-4xl">Premium Plan</h2>
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-700 hover:bg-green-100"
            >
              20% off
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="heading text-3xl md:text-4xl leading-tight mb-6">
                Master any language with AI assistance
              </h3>
              <p className="text-lg text-white/80 mb-8">
                Get access to all premium features:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-end justify-start"
            >
              <div className="text-right">
                <div className="text-5xl font-bold mb-2 text-white">$19</div>
                <p className="text-white/80">per month</p>
              </div>
              <Button size="lg" className="mt-8">
                Get Started
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
