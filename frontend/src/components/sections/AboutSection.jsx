import { motion } from "framer-motion";

import SectionHeading from "../common/SectionHeading";
import { highlights } from "../../utils/constants";

const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="section-shell">
      <SectionHeading
        eyebrow="About Me"
        title="I turn product ideas into stable, user-friendly applications."
        description="My work blends polished frontend execution with practical backend systems, helping teams launch experiences that feel fast, clear, and dependable."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="glass-panel p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
            I build full-stack web products with a strong focus on clean architecture, accessible
            interfaces, and details that make software feel professional. Whether I am designing a
            landing page, shaping API routes, or modeling data in MongoDB, I aim for solutions that
            stay readable and scale well over time.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            My preferred stack centers on React, Tailwind CSS, Node.js, Express, and MongoDB, and I
            enjoy crafting systems where the UI and backend feel thoughtfully connected. I care about
            shipping work that feels polished to users and practical for teams to maintain.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item}
              className="glass-panel p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
