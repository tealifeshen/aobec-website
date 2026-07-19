export default function ContactCTA() {
  return (
    <section id="contact" className="bg-[#071523] py-20 text-white md:py-24">
      <div className="site-container">
        <div className="cta-panel relative overflow-hidden rounded-[38px] border border-white/10 px-7 py-14 md:px-14 md:py-16">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#f28b22]/20 blur-[90px]" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#2c769d]/18 blur-[90px]" />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">
                Start a Conversation
              </p>
              <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] md:text-6xl">
                Ready to Build Your Next Energy or Industrial Project?
              </h2>
              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/58">
                Tell us your project location, application, required capacity
                and delivery target. Our team will help organize the next step.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="mailto:sales@aobec.com"
                className="premium-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold"
              >
                Email AOBEC
              </a>
              <a
                href="https://wa.me/8613590908968"
                target="_blank"
                rel="noreferrer"
                className="glass-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
