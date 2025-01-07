import { motion } from "framer-motion";
import { Check } from "lucide-react";

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

const Pricing = () => {
  return (
    <section className="py-16 md:py-24" id="pricing">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-3xl md:text-4xl mb-4">
            Start Your Language Journey Today
          </h2>
          <p className="text-lg text-gray-600">
            Get unlimited access to all features with our simple pricing plan
          </p>
        </motion.div>

        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-8 text-center border-b border-gray-100 bg-gradient-to-b from-white to-gray-50">
              <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary">$19</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Billed monthly. Cancel anytime.</p>
            </div>

            <div className="p-8">
              <ul className="space-y-5">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="#"
                  className="btn-primary w-full text-lg shadow-md shadow-primary/20"
                >
                  Get Started Now
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
