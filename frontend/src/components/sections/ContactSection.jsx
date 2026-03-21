import { motion } from "framer-motion";

import SectionHeading from "../common/SectionHeading";

const ContactSection = ({
  formData,
  formErrors,
  submitState,
  onChange,
  onSubmit,
}) => (
  <section id="contact" className="py-20">
    <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something clear, useful, and well-crafted."
          description="If you have a project, freelance opportunity, or collaboration in mind, I’d love to hear about it."
        />
        <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          <p>Email: manishwashimkar45@gmail.com</p>
          <p>Location: India, open to remote work worldwide</p>
          <p>Typical focus: full-stack product builds, portfolio sites, dashboards, and API integrations</p>
        </div>
      </div>

      <motion.form
        onSubmit={onSubmit}
        className="glass-panel p-6 sm:p-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
      >
        <div className="grid gap-5">
          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              placeholder="Your name"
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-accent dark:border-white/10 dark:bg-slate-950 dark:text-white"
            />
            {formErrors.name ? <span className="text-xs text-rose-500">{formErrors.name}</span> : null}
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              placeholder="you@example.com"
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-accent dark:border-white/10 dark:bg-slate-950 dark:text-white"
            />
            {formErrors.email ? <span className="text-xs text-rose-500">{formErrors.email}</span> : null}
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={onChange}
              rows="6"
              placeholder="Tell me about your project or idea"
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-accent dark:border-white/10 dark:bg-slate-950 dark:text-white"
            />
            {formErrors.message ? <span className="text-xs text-rose-500">{formErrors.message}</span> : null}
          </label>

          <button
            type="submit"
            disabled={submitState.status === "loading"}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-slate-950"
          >
            {submitState.status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {submitState.message ? (
            <p
              className={`text-sm ${
                submitState.status === "success"
                  ? "text-emerald-600 dark:text-emerald-300"
                  : submitState.status === "error"
                    ? "text-rose-600 dark:text-rose-300"
                    : "text-slate-500"
              }`}
            >
              {submitState.message}
            </p>
          ) : null}
        </div>
      </motion.form>
    </div>
  </section>
);

export default ContactSection;
