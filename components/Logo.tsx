import Image from "next/image";

export function Logo({
  className = "",
  size = "nav",
}: {
  className?: string;
  size?: "nav" | "footer";
}) {
  const height = size === "footer" ? 56 : 44;

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Value 4 Casa"
        width={220}
        height={110}
        priority={size === "nav"}
        className="w-auto mix-blend-screen"
        style={{ height }}
      />
    </span>
  );
}
