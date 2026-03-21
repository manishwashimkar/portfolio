import { motion } from "framer-motion";

import SectionHeading from "../common/SectionHeading";
import { techStack } from "../../utils/constants";

const TechStackSection = () => (
  <section id="stack" className="py-14 sm:py-20">
    <div className="section-shell">
      <div className="section-frame">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I trust for modern web development."
          description="A focused stack helps me move quickly without overcomplicating the codebase."
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {techStack.map(({ name, icon: Icon, tone }, index) => (
            <motion.div
              key={name}
              className={`glass-panel group bg-gradient-to-br ${tone} p-5 shadow-[0_16px_30px_rgba(15,23,42,0.06)] sm:p-6 dark:shadow-none`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Icon className="text-2xl text-accent transition duration-300 group-hover:scale-110 sm:text-3xl" />
              <h3 className="mt-4 text-base font-semibold text-slate-900 transition duration-300 group-hover:text-accent dark:text-white sm:text-lg">{name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TechStackSection;
