import {
  Bookmark,
  Bus,
  Car,
  Check,
  ChevronDown,
  Globe,
  ImagePlus,
  MapPin,
  Navigation,
  Phone,
  Share2,
  Star,
} from "lucide-react";
import Image from "next/image";
import { HoursStatus } from "@/components/HoursStatus";
import { site } from "@/lib/site";

const actions = [
  { label: "Website", href: "#top", icon: Globe },
  { label: "Directions", href: site.maps.directions, icon: Navigation },
  { label: "Save", href: site.maps.search, icon: Bookmark },
  { label: "Share", href: site.maps.search, icon: Share2 },
  { label: "Call", href: site.phoneHref, icon: Phone },
] as const;

export function GoogleProfile() {
  return (
    <article className="w-full max-w-[440px] overflow-hidden rounded-xl border border-black/8 bg-white shadow-[0_18px_50px_rgba(16,40,39,0.18)]">
      <div className="grid grid-cols-[1.35fr_1fr] gap-1 p-1">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-stone-200">
          <Image
            src="/images/house.jpg"
            alt="Residential property represented by Value 4 Casa"
            fill
            className="object-cover"
            sizes="280px"
          />
          <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            <ImagePlus className="h-3 w-3" />
            Add photos
          </span>
        </div>
        <div className="grid min-h-full grid-rows-2 gap-1">
          <div className="relative min-h-[92px] overflow-hidden rounded-md bg-[#e8eef3]">
            <iframe
              title="Map of Value 4 Casa in Commerce, California"
              src={site.maps.embed}
              className="h-full w-full border-0 grayscale-[0.15]"
              loading="lazy"
            />
          </div>
          <div className="relative overflow-hidden rounded-md bg-stone-200">
            <Image
              src="/images/office.jpg"
              alt="Value 4 Casa office exterior"
              fill
              className="object-cover"
              sizes="180px"
            />
            <span className="absolute bottom-2 left-2 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
              See outside
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 pt-4 pb-5">
        <h3 className="text-[22px] leading-7 font-semibold tracking-tight text-[#202124]">
          {site.google.title}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px]">
          <span className="font-medium text-[#202124]">{site.google.rating}</span>
          <span className="flex items-center gap-0.5 text-[#fbbc04]" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-3.5 w-3.5 fill-current" />
            ))}
          </span>
          <a
            href={site.maps.search}
            target="_blank"
            rel="noreferrer"
            className="text-[#1a73e8] hover:underline"
          >
            {site.google.reviews} Google reviews
          </a>
        </div>

        <p className="mt-1 text-[13px] text-[#5f6368]">{site.google.category}</p>

        <p className="mt-2 inline-flex items-center gap-1.5 text-[13px] text-[#1a73e8]">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1a73e8] text-white">
            <Check className="h-2.5 w-2.5" strokeWidth={3} />
          </span>
          Verified Business Profile
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {actions.map((action) => {
            const Icon = action.icon;
            const external = action.href.startsWith("http") || action.href.startsWith("tel:");
            return (
              <a
                key={action.label}
                href={action.href}
                target={external && !action.href.startsWith("tel:") ? "_blank" : undefined}
                rel={external && !action.href.startsWith("tel:") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#dadce0] px-3 py-1.5 text-[13px] font-medium text-[#1a73e8] transition-colors hover:bg-[#f8f9fa]"
              >
                <Icon className="h-3.5 w-3.5" />
                {action.label}
              </a>
            );
          })}
        </div>

        <p className="mt-4 text-[13px] leading-5 text-[#3c4043]">
          {site.google.description}
        </p>

        <dl className="mt-4 space-y-2.5 text-[13px] text-[#3c4043]">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#5f6368]" />
            <div>
              <dt className="sr-only">Address</dt>
              <dd>{site.address.full}</dd>
              <p className="mt-1 flex items-center gap-3 text-[#5f6368]">
                <span className="inline-flex items-center gap-1">
                  <Bus className="h-3.5 w-3.5" /> 1 hr 43 min
                </span>
                <span className="inline-flex items-center gap-1">
                  <Car className="h-3.5 w-3.5" /> 23 min
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-[#5f6368]" />
            <a href={site.phoneHref} className="text-[#1a73e8] hover:underline">
              {site.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <ChevronDown className="h-4 w-4 text-[#5f6368]" />
            <HoursStatus />
          </div>
        </dl>
      </div>
    </article>
  );
}
