import { motion } from "framer-motion";

import SectionHeading from "../common/SectionHeading";
import { highlights } from "../../utils/constants";

const AboutSection = () => (
  <section id="about" className="py-14 sm:py-20">
    <div className="section-shell">
      <div className="section-frame">
        <SectionHeading
          eyebrow="About Me"
          title="I build clean MERN applications with a practical product mindset."
          description="Focused on React interfaces, Express APIs, MongoDB data flows, and the small details that make web apps feel reliable."
        />

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            className="glass-panel p-5 sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-8">
              I am a MERN Stack Developer who enjoys turning ideas into responsive, useful web
              applications. I like building interfaces that are easy to use and backend routes that
              are simple to understand.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mt-5 sm:text-base sm:leading-8">
              My current focus is React, Tailwind CSS, Node.js, Express, and MongoDB. I learn best by
              shipping projects, improving the details, and keeping the codebase readable.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                className="glass-panel p-5 sm:p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-200 sm:text-base">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
