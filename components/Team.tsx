"use client";

import { UserStar } from "lucide-react";
import Image from "next/image";
import { SwipeRow } from "@/components/ui/swipe-row";
import { team } from "@/lib/site";

export function Team() {
  const featured = team[0];

  return (
    <section
      id="team"
      className="cursor-house relative w-full scroll-mt-24 overflow-hidden bg-forest-mid py-14 sm:scroll-mt-28 sm:py-16 md:py-24"
    >
      <svg
        className="pointer-events-none absolute right-0 bottom-0 hidden text-white/8 sm:block"
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

      <div className="relative z-10 w-full">
        <div className="mx-auto mb-8 flex max-w-5xl flex-col items-center px-4 text-center sm:mb-14 sm:px-6">
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-forest-deep sm:mb-6 sm:h-12 sm:w-12">
            <UserStar className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>

          <h2 className="relative mb-3 font-serif text-[2rem] tracking-tight text-white sm:mb-4 sm:text-4xl md:text-5xl">
            Our team
            <svg
              className="absolute -top-2 -right-8 -z-10 hidden w-24 text-white/10 sm:block"
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
          <p className="max-w-2xl text-[15px] leading-7 text-pretty text-white/65 sm:text-[16px]">
            Certified specialists in foreclosure, probate, and short sales —
            meeting you where you are, one family at a time.
          </p>
          <p className="mt-4 text-[12px] tracking-[0.16em] text-gold uppercase sm:hidden">
            Swipe to meet everyone
          </p>
        </div>

        <SwipeRow autoPlay>
          {team.map((member) => (
            <article
              className="group flex w-[min(14.5rem,calc(100%-2.75rem))] shrink-0 snap-start flex-col sm:w-[min(18rem,80vw)]"
              key={member.name}
            >
              <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-forest-deep sm:h-72 md:h-80">
                <Image
                  alt={member.name}
                  className="pointer-events-none object-cover object-[center_22%] grayscale transition-all duration-300 group-hover:grayscale-0"
                  draggable={false}
                  fill
                  src={member.image}
                  sizes="(min-width: 640px) 288px, 232px"
                />
              </div>
              <div className="pt-3 sm:pt-4">
                <h3 className="text-[15px] font-semibold text-white sm:text-base">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-[12px] leading-4 text-pretty text-white/65 sm:mt-1 sm:text-sm sm:leading-5">
                  {member.title}
                </p>
                <p className="mt-1.5 line-clamp-3 text-[11px] leading-4 text-white/55 sm:mt-2 sm:line-clamp-4 sm:text-[13px] sm:leading-5">
                  {member.bio}
                </p>
                <p className="mt-2 text-[11px] text-gold sm:mt-3 sm:text-[12px]">
                  {member.handle}
                </p>
              </div>
            </article>
          ))}
        </SwipeRow>

        <div className="mx-auto mt-14 max-w-3xl px-4 text-center sm:mt-20 sm:px-6 lg:px-0">
          <p className="mb-8 font-serif text-base leading-relaxed text-pretty text-white sm:text-lg md:text-xl">
            “I am passionate about helping you find the best option to resolve
            your current situation and attain your ideal outcome. I have helped
            many homeowners and would love for you to be next.”
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full">
              <Image
                alt={featured.name}
                className="object-cover object-[center_22%]"
                fill
                src={featured.image}
                sizes="56px"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-white">{featured.name}</p>
              <p className="text-sm text-pretty text-white/55">
                Certified probate, trust & foreclosure specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
