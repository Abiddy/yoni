import { ContactForm } from "@/components/ContactForm";
import { GoogleProfile } from "@/components/GoogleProfile";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="relative bg-forest-deep">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative flex flex-col px-5 py-20 sm:px-10 lg:px-14 lg:py-28">
          <div className="mb-14 text-center">
            <p className="font-serif text-2xl text-white">{site.name}</p>
          </div>

          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="mt-auto max-w-xl pt-16">
            <p className="text-[15px] leading-7 text-white/72">
              Our team wants to thank you for considering us to help you during
              this process, kindly leave us your information and we will call
              you in less than 60 minutes and give you the value you deserve for
              your casa. We take pride in building relationships as we get many
              referrals through our relationships and our goal is for you to
              have a great team in your corner to help you navigate this
              process. Take few minutes and read our reviews as our clients came
              to us just like you and the reviews help them feel little more
              comfortable.
            </p>
          </Reveal>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden bg-[#dbe4ea] px-5 py-16 sm:px-10 lg:px-12">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#9aa8b3_0.7px,transparent_0.7px)] [background-size:14px_14px]" />
          <Reveal className="relative w-full max-w-[440px]">
            <p className="mb-5 text-center text-[11px] tracking-[0.22em] text-[#5b6b74] uppercase">
              Trusted on Google · 4.9 from 100 reviews
            </p>
            <GoogleProfile />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
