import Image from "next/image";

export function Logo({
  className = "",
  size = "nav",
}: {
  className?: string;
  size?: "nav" | "footer";
}) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Value 4 Casa"
        width={220}
        height={110}
        priority={size === "nav"}
        className={`w-auto mix-blend-screen ${
          size === "footer" ? "h-11 sm:h-14" : "h-8 sm:h-10 lg:h-11"
        }`}
      />
    </span>
  );
}
