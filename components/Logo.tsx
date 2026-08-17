export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 text-gold"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 14.5 16 5l12 9.5V27a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V14.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M12 28V18.5h8V28"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="22.5" cy="11" r="1.3" fill="currentColor" />
      </svg>
      <span className="font-sans text-[13px] font-medium tracking-[0.18em] uppercase">
        Value 4 Casa
      </span>
    </span>
  );
}
