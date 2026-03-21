import { motion } from "framer-motion";

import SectionHeading from "../common/SectionHeading";

const ContactSection = ({
  formData,
  formErrors,
  submitState,
  onChange,
  onSubmit,
}) => (
  <section id="contact" className="py-14 sm:py-20">
    <div className="section-shell grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="section-frame lg:col-span-2">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something clear, useful, and well-crafted."
              description="If you have a project, freelance opportunity, or collaboration in mind, I’d love to hear about it."
            />
            <div className="mt-6 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mt-8 sm:space-y-4">
              <p className="rounded-2xl border border-slate-200/80 bg-white/75 px-4 py-3 shadow-[0_14px_28px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-slate-900/55 dark:shadow-none">
                Email: manishwashimkar45@gmail.com
              </p>
              <p className="rounded-2xl border border-slate-200/80 bg-white/75 px-4 py-3 shadow-[0_14px_28px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-slate-900/55 dark:shadow-none">
                Location: India, open to remote work worldwide
              </p>
              <p className="rounded-2xl border border-slate-200/80 bg-white/75 px-4 py-3 shadow-[0_14px_28px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-slate-900/55 dark:shadow-none">
                Typical focus: full-stack product builds, portfolio sites, dashboards, and API integrations
              </p>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            className="glass-panel p-5 shadow-[0_20px_44px_rgba(15,23,42,0.08)] sm:p-8 dark:shadow-none"
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
                  className="premium-input"
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
                  className="premium-input"
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
                  className="premium-input min-h-[160px] resize-y"
                />
                {formErrors.message ? <span className="text-xs text-rose-500">{formErrors.message}</span> : null}
              </label>

              <button
                type="submit"
                disabled={submitState.status === "loading"}
                className="premium-button-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
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
      </div>
    </div>
  </section>
);

export default ContactSection;
