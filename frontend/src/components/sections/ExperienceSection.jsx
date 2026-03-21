import { motion } from "framer-motion";

import SectionHeading from "../common/SectionHeading";
import { experienceTimeline } from "../../utils/constants";

const ExperienceSection = () => (
  <section id="experience" className="py-14 sm:py-20">
    <div className="section-shell">
      <div className="section-frame">
        <SectionHeading
          eyebrow="Experience"
          title="A steady path through frontend craft and backend delivery."
          description="A concise timeline of the work and learning that shaped my full-stack approach."
        />

        <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-6">
          {experienceTimeline.map((item, index) => (
            <motion.div
              key={`${item.period}-${item.title}`}
              className="glass-panel grid gap-4 p-5 sm:p-6 md:grid-cols-[180px_1fr]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">{item.period}</p>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.company}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
