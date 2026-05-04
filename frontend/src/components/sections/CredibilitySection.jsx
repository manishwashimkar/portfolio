import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import SectionHeading from "../common/SectionHeading";
import { credibilitySignals, socialLinks } from "../../utils/constants";

const profileLinks = socialLinks.filter(({ label }) => ["GitHub", "LinkedIn"].includes(label));

const CredibilitySection = () => (
  <section id="credibility" className="py-14 sm:py-20">
    <div className="section-shell">
      <div className="section-frame">
        <SectionHeading
          eyebrow="Credibility"
          title="Proof points that make collaboration easier to trust."
          description="A quick look at outcomes, working style, and public profiles you can review before reaching out."
        />

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3">
          {credibilitySignals.map((item, index) => (
            <motion.article
              key={item.label}
              className="glass-panel p-5 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{item.label}</p>
              <h3 className="mt-4 text-lg font-semibold leading-7 text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.detail}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-5 flex flex-wrap gap-3 sm:mt-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          {profileLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-[0_12px_24px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_18px_30px_rgba(138,91,61,0.12)] dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
            >
              <Icon className="text-sm" />
              View {label}
              <FaArrowUpRightFromSquare className="text-[0.65rem]" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default CredibilitySection;
