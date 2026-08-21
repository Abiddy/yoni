"use client";

import { UserStar } from "lucide-react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { team } from "@/lib/site";

export function Team() {
  const featured = team[0];

  return (
    <section id="team" className="relative w-full overflow-hidden bg-forest-mid py-16 md:py-24">
      <svg
        className="pointer-events-none absolute right-0 bottom-0 text-white/8"
        fill="none"
        height="154"
        viewBox="0 0 460 154"
        width="460"
        aria-hidden="true"
      >
        <g clipPath="url(#team-swoosh)">
          <path
            d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="40"
          />
        </g>
        <defs>
          <clipPath id="team-swoosh">
            <rect fill="white" height="154" width="460" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 flex max-w-5xl flex-col items-center px-6 text-center lg:px-0">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-forest-deep">
            <UserStar className="h-6 w-6" />
          </div>

          <h2 className="relative mb-4 font-serif text-4xl tracking-tight text-white sm:text-5xl">
            Our team
            <svg
              className="absolute -top-2 -right-8 -z-10 w-24 text-white/10"
              fill="currentColor"
              height="86"
              viewBox="0 0 108 86"
              width="108"
              aria-hidden="true"
            >
              <path
                d="M38.8484 16.236L15 43.5793L78.2688 15L18.1218 71L93 34.1172L70.2047 65.2739"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="28"
              />
            </svg>
          </h2>
          <p className="max-w-2xl text-[16px] leading-7 text-white/65">
            Certified specialists in foreclosure, probate, and short sales —
            meeting you where you are, one family at a time.
          </p>
        </div>

        <div className="relative w-full">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-forest-mid to-transparent sm:w-32" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-forest-mid to-transparent sm:w-32" />

          <Marquee className="[--duration:70s] [--gap:1.5rem]" pauseOnHover>
            {team.map((member) => (
              <article
                className="group flex w-72 shrink-0 flex-col"
                key={member.name}
              >
                <div className="relative h-[23rem] w-full overflow-hidden rounded-2xl bg-forest-deep">
                  <Image
                    alt={member.name}
                    className="object-cover object-top grayscale transition-all duration-300 group-hover:grayscale-0"
                    fill
                    src={member.image}
                    sizes="288px"
                  />
                  <div className="absolute inset-x-2 bottom-2 rounded-lg bg-forest-deep/90 p-3 backdrop-blur-sm">
                    <h3 className="font-semibold text-white">{member.name}</h3>
                    <p className="mt-0.5 line-clamp-2 text-sm text-white/65">
                      {member.title}
                    </p>
                    <p className="mt-2 line-clamp-3 text-[12px] leading-4 text-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {member.bio}
                    </p>
                    <p className="mt-2 text-[12px] text-gold">{member.handle}</p>
                  </div>
                </div>
              </article>
            ))}
          </Marquee>
        </div>

        <div className="mx-auto mt-20 max-w-3xl px-6 text-center lg:px-0">
          <p className="mb-8 font-serif text-lg leading-relaxed text-white md:text-xl">
            “I am passionate about helping you find the best option to resolve
            your current situation and attain your ideal outcome. I have helped
            many homeowners and would love for you to be next.”
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full">
              <Image
                alt={featured.name}
                className="object-cover object-top"
                fill
                src={featured.image}
                sizes="56px"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-white">{featured.name}</p>
              <p className="text-sm text-white/55">
                Certified probate, trust & foreclosure specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
