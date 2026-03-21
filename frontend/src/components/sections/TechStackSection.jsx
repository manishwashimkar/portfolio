import { motion } from "framer-motion";

import SectionHeading from "../common/SectionHeading";
import { techStack } from "../../utils/constants";

const TechStackSection = () => (
  <section id="stack" className="py-20">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools I trust for modern web development."
        description="A focused stack helps me move quickly without overcomplicating the codebase."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map(({ name, icon: Icon, tone }, index) => (
          <motion.div
            key={name}
            className={`glass-panel bg-gradient-to-br ${tone} p-6`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <Icon className="text-3xl text-accent" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;

